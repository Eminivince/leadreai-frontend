'use client';

import { useEffect, useState } from 'react';
import type { ProspectingJob } from '@leadreai/shared';

const ACTIVE = new Set(['queued', 'parsing', 'collecting', 'enriching', 'deduplicating', 'retrying', 'cancelling']);

const stateCopy: Record<string, { label: string; detail: string }> = {
  queued: { label: 'Queued', detail: 'Waiting for a research worker.' },
  parsing: { label: 'Starting', detail: 'Preparing your search plan.' },
  collecting: { label: 'Searching', detail: 'Finding matching companies and contacts.' },
  enriching: { label: 'Enriching', detail: 'Checking contact details and sources.' },
  deduplicating: { label: 'Finishing', detail: 'Removing duplicates and saving results.' },
  retrying: { label: 'Retrying', detail: 'A temporary error occurred. The search will try again.' },
  cancelling: { label: 'Stopping', detail: 'Waiting for the worker to stop safely.' },
  complete: { label: 'Completed', detail: 'Results are ready.' },
  failed: { label: 'Failed', detail: 'The search did not complete.' },
  cancelled: { label: 'Cancelled', detail: 'The search stopped.' },
};

function formatDuration(seconds: number): string {
  const minutes = Math.floor(seconds / 60);
  const remainder = seconds % 60;
  return minutes > 0 ? `${minutes}m ${remainder}s` : `${remainder}s`;
}

export function QueryTaskState({ job, connection }: { job: ProspectingJob; connection?: string }) {
  const [, setTick] = useState(0);
  const active = ACTIVE.has(job.status);
  const startedAt = new Date(job.startedAt ?? job.createdAt).getTime();
  const lastUpdate = new Date(job.lastProgressAt ?? job.updatedAt ?? job.createdAt).getTime();
  const elapsedSeconds = Math.max(0, Math.floor((Date.now() - startedAt) / 1000));
  const sinceUpdate = Math.max(0, Math.floor((Date.now() - lastUpdate) / 1000));
  const stalled = active && sinceUpdate >= 90;
  const state = stateCopy[job.status] ?? stateCopy.queued!;

  useEffect(() => {
    if (!active) return;
    const timer = window.setInterval(() => setTick((value) => value + 1), 1000);
    return () => window.clearInterval(timer);
  }, [active]);

  return (
    <div className="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 border-y border-[color:var(--rule)] py-3">
      <div>
        <span className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">State</span>
        <p className={`mt-1 text-[13px] font-medium ${stalled ? 'text-[color:var(--warn)]' : 'text-[color:var(--ink)]'}`}>
          {stalled ? 'Needs attention' : state.label}
        </p>
        <p className="mt-0.5 text-[11.5px] leading-[1.35] text-[color:var(--ink-2)]">
          {stalled
            ? 'No recent update. The app is checking task state.'
            : job.status === 'retrying'
              ? `${state.detail} Attempt ${job.retryAttempt ?? 1} of ${job.retryMaxAttempts ?? 3}.`
              : state.detail}
        </p>
      </div>
      <div>
        <span className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">Elapsed</span>
        <p className="mt-1 font-mono text-[13px] tabular-nums text-[color:var(--ink)]">{formatDuration(elapsedSeconds)}</p>
        {active && <p className="mt-0.5 text-[11.5px] text-[color:var(--ink-2)]">Typical search: 2-6 minutes</p>}
      </div>
      <div>
        <span className="font-mono text-[9.5px] tracking-[0.14em] uppercase text-[color:var(--ink-3)]">Updates</span>
        <p className="mt-1 text-[13px] text-[color:var(--ink)]">
          {connection === 'reconnecting' ? 'Reconnecting...' : connection === 'live' ? 'Live' : active ? 'Polling task state' : 'Final'}
        </p>
        <p className="mt-0.5 text-[11.5px] text-[color:var(--ink-2)]">Last update {formatDuration(sinceUpdate)} ago</p>
      </div>
    </div>
  );
}
