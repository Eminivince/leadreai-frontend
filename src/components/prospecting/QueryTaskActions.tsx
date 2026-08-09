'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Archive, ArchiveRestore, Copy, Pencil, RotateCcw, Square, Trash2 } from 'lucide-react';
import { toast } from 'sonner';
import type { ProspectingJob } from '@leadreai/shared';
import { apiFetch } from '@/lib/api';
import { useWorkspace } from '@/hooks/useWorkspace';

interface QueryTaskActionsProps {
  job: ProspectingJob;
  onChanged?: () => Promise<void> | void;
}

const terminalStates = new Set(['complete', 'failed', 'cancelled']);

export function QueryTaskActions({ job, onChanged }: QueryTaskActionsProps) {
  const { workspaceId } = useWorkspace();
  const router = useRouter();
  const [busyAction, setBusyAction] = useState<string | null>(null);
  const isTerminal = terminalStates.has(job.status);

  async function run(action: string, request: () => Promise<unknown>, message: string) {
    setBusyAction(action);
    try {
      const response = await request() as { data?: { _id?: string } };
      await onChanged?.();
      toast.success(message);
      if ((action === 'retry' || action === 'duplicate') && response.data?._id) {
        router.push(`/dashboard/leads?jobId=${response.data._id}`);
      }
    } catch (err) {
      toast.error(err instanceof Error ? err.message : 'Task action failed.');
    } finally {
      setBusyAction(null);
    }
  }

  if (!workspaceId) return null;

  if (job.status === 'cancelling') {
    return <span className="text-[12px] text-[color:var(--ink-2)]">Stopping search...</span>;
  }

  return (
    <div className="flex flex-wrap items-center gap-2" aria-label="Search actions">
      {!isTerminal && (
        <button
          type="button"
          disabled={busyAction !== null}
          onClick={() => {
            if (!window.confirm('Stop this search? Credits return only when no leads were saved.')) return;
            void run(
              'cancel',
              () => apiFetch(`/api/v1/workspaces/${workspaceId}/jobs/${job._id}/cancel`, { method: 'POST' }),
              'Stop request sent.',
            );
          }}
          className="inline-flex items-center gap-1.5 border border-[color:var(--warn)]/50 px-2.5 h-8 text-[12px] text-[color:var(--warn)] hover:bg-[color:var(--warn)]/[0.08] disabled:opacity-50"
        >
          <Square className="w-3.5 h-3.5" />
          {busyAction === 'cancel' ? 'Stopping...' : 'Stop'}
        </button>
      )}

      {(job.status === 'failed' || job.status === 'cancelled') && (
        <button
          type="button"
          disabled={busyAction !== null}
          onClick={() => void run(
            'retry',
            () => apiFetch(`/api/v1/workspaces/${workspaceId}/jobs/${job._id}/retry`, { method: 'POST' }),
            'Search queued again.',
          )}
          className="inline-flex items-center gap-1.5 bg-[color:var(--ink)] px-2.5 h-8 text-[12px] text-[color:var(--paper)] hover:bg-[color:var(--ember)] disabled:opacity-50"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          {busyAction === 'retry' ? 'Retrying...' : 'Retry'}
        </button>
      )}

      {isTerminal && (
        <button
          type="button"
          disabled={busyAction !== null}
          onClick={() => router.push(`/dashboard?prefill=${encodeURIComponent(job.rawQuery)}`)}
          className="inline-flex items-center gap-1.5 border border-[color:var(--rule)] px-2.5 h-8 text-[12px] text-[color:var(--ink-2)] hover:text-[color:var(--ink)] disabled:opacity-50"
        >
          <Pencil className="w-3.5 h-3.5" />
          Edit query
        </button>
      )}

      {isTerminal && (
        <button
          type="button"
          disabled={busyAction !== null}
          onClick={() => void run(
            'duplicate',
            () => apiFetch(`/api/v1/workspaces/${workspaceId}/jobs/${job._id}/duplicate`, { method: 'POST' }),
            'New search queued.',
          )}
          className="inline-flex items-center gap-1.5 border border-[color:var(--rule)] px-2.5 h-8 text-[12px] text-[color:var(--ink-2)] hover:text-[color:var(--ink)] disabled:opacity-50"
        >
          <Copy className="w-3.5 h-3.5" />
          Duplicate
        </button>
      )}

      {isTerminal && (
        <button
          type="button"
          title={job.archivedAt ? 'Restore search' : 'Archive search'}
          aria-label={job.archivedAt ? 'Restore search' : 'Archive search'}
          disabled={busyAction !== null}
          onClick={() => void run(
            'archive',
            () => apiFetch(`/api/v1/workspaces/${workspaceId}/jobs/${job._id}/archive`, { method: 'POST' }),
            job.archivedAt ? 'Search restored.' : 'Search archived.',
          )}
          className="inline-flex items-center justify-center w-8 h-8 border border-[color:var(--rule)] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] disabled:opacity-50"
        >
          {job.archivedAt ? <ArchiveRestore className="w-3.5 h-3.5" /> : <Archive className="w-3.5 h-3.5" />}
        </button>
      )}

      {isTerminal && (
        <button
          type="button"
          title="Delete search"
          aria-label="Delete search"
          disabled={busyAction !== null}
          onClick={() => {
            if (!window.confirm('Delete this search from the task list? This does not delete saved leads.')) return;
            void run(
              'delete',
              () => apiFetch(`/api/v1/workspaces/${workspaceId}/jobs/${job._id}`, { method: 'DELETE' }),
              'Search deleted from the task list.',
            );
          }}
          className="inline-flex items-center justify-center w-8 h-8 border border-[color:var(--warn)]/35 text-[color:var(--warn)] hover:bg-[color:var(--warn)]/[0.08] disabled:opacity-50"
        >
          <Trash2 className="w-3.5 h-3.5" />
        </button>
      )}
    </div>
  );
}
