'use client';

import { useState, useEffect, useRef } from 'react';
import { getAccessToken } from '@/lib/auth';
import type { JobActivityLogEntry } from '@leadreai/shared';

interface JobProgress {
  type: string;
  status?: string;
  percentage?: number;
  stage?: string;
  message?: string;
}

const API_BASE = process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:4000';

export function useJob(
  workspaceId: string | null,
  jobId: string | null,
  onFinished?: () => void,
) {
  const [progress, setProgress] = useState<JobProgress | null>(null);
  const [activityLog, setActivityLog] = useState<JobActivityLogEntry[]>([]);
  const [connection, setConnection] = useState<'connecting' | 'live' | 'reconnecting' | 'closed'>('closed');
  const [lastEventAt, setLastEventAt] = useState<number | null>(null);
  const onFinishedRef = useRef(onFinished);
  onFinishedRef.current = onFinished;

  useEffect(() => {
    if (!workspaceId || !jobId) return;

    const token = getAccessToken();
    const params = token ? `?token=${encodeURIComponent(token)}` : '';
    const url = `${API_BASE}/api/v1/workspaces/${workspaceId}/jobs/${jobId}/stream${params}`;
    let es: EventSource | null = null;
    let retryTimer: number | null = null;
    let retryCount = 0;
    let closed = false;

    const connect = () => {
      if (closed) return;
      setConnection(retryCount === 0 ? 'connecting' : 'reconnecting');
      es = new EventSource(url, { withCredentials: true });
      es.onopen = () => {
        retryCount = 0;
        setConnection('live');
      };
      es.onmessage = (event) => {
        try {
          const data = JSON.parse(event.data as string) as JobProgress & {
            type?: string;
            entries?: JobActivityLogEntry[];
            at?: string;
            step?: string;
            message?: string;
            meta?: Record<string, unknown>;
          };
          setLastEventAt(Date.now());
          if (data.type === 'heartbeat') return;

          if (data.type === 'activity_bootstrap' && Array.isArray(data.entries)) {
            setActivityLog(data.entries);
            return;
          }

          if (data.type === 'activity' && data.at && data.step && data.message) {
            setActivityLog((prev) =>
              [...prev, { at: data.at!, step: data.step!, message: data.message!, meta: data.meta }].slice(-250),
            );
            return;
          }

          if (data.type === 'complete') {
            setProgress({ ...data, status: 'complete' });
            es?.close();
            setConnection('closed');
            onFinishedRef.current?.();
            return;
          }
          if (data.type === 'error') {
            setProgress({ ...data, status: 'failed' });
            es?.close();
            setConnection('closed');
            onFinishedRef.current?.();
            return;
          }
          if (data.status === 'cancelled') {
            setProgress({ ...data, status: 'cancelled' });
            es?.close();
            setConnection('closed');
            onFinishedRef.current?.();
            return;
          }

          setProgress(data);
        } catch {
          // Ignore malformed events. The next server event corrects state.
        }
      };

      es.onerror = () => {
        es?.close();
        if (closed) return;
        retryCount += 1;
        setConnection('reconnecting');
        retryTimer = window.setTimeout(connect, Math.min(30_000, 1_000 * 2 ** Math.min(retryCount, 5)));
      };
    };

    setActivityLog([]);
    setLastEventAt(null);
    connect();

    return () => {
      closed = true;
      es?.close();
      if (retryTimer !== null) window.clearTimeout(retryTimer);
      setConnection('closed');
    };
  }, [workspaceId, jobId]);

  return {
    status: progress?.status ?? null,
    percentage: progress?.percentage ?? null,
    stage: progress?.stage ?? null,
    activityLog,
    connection,
    lastEventAt,
  };
}
