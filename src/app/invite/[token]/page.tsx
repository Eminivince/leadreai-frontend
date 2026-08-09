'use client';

import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { useQuery, useMutation } from '@tanstack/react-query';
import { toast } from 'sonner';
import { apiFetch, ApiError } from '@/lib/api';
import { useAuth } from '@/hooks/useAuth';
import { useAppStore } from '@/store/useAppStore';
import type { ApiResponse } from '@leadreai/shared';

interface InvitePreview {
  workspaceName: string;
  inviterName: string;
  email: string;
  role: 'admin' | 'member';
  expiresAt: string;
}

export default function AcceptInvitePage() {
  const params = useParams();
  const token = String(params['token'] ?? '');
  const router = useRouter();
  const { user, isLoading: authLoading } = useAuth();
  const { setWorkspace } = useAppStore();

  const preview = useQuery({
    queryKey: ['invite-preview', token],
    queryFn: () => apiFetch<ApiResponse<InvitePreview>>(`/api/v1/invites/${token}`),
    enabled: !!token,
    retry: false,
  });

  const accept = useMutation({
    mutationFn: () =>
      apiFetch<ApiResponse<{ workspaceId: string; workspaceName: string }>>(
        `/api/v1/invites/${token}/accept`,
        { method: 'POST' },
      ),
    onSuccess: ({ data }) => {
      toast.success(`You've joined ${data.workspaceName}.`);
      // Clear cached workspace so the dashboard re-resolves the new membership.
      setWorkspace(null);
      router.push('/dashboard');
    },
    onError: (err) => toast.error(err instanceof ApiError || err instanceof Error ? err.message : 'Could not accept invite.'),
  });

  const returnTo = encodeURIComponent(`/invite/${token}`);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[color:var(--paper)] px-4">
      <div className="w-full max-w-md bg-white border border-[color:var(--rule)] rounded-2xl p-7 sm:p-9 text-center">
        {preview.isLoading || authLoading ? (
          <p className="text-[14px] text-[color:var(--ink-3)] py-6">Loading invitation…</p>
        ) : preview.isError || !preview.data ? (
          <>
            <h1 className="font-display text-[24px] text-[color:var(--ink)]">Invitation unavailable</h1>
            <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--ink-3)]">
              {preview.error instanceof ApiError || preview.error instanceof Error
                ? preview.error.message
                : 'This invitation is invalid or has expired.'}
            </p>
            <Link
              href="/dashboard"
              className="mt-6 inline-flex items-center justify-center bg-[color:var(--ink)] text-[color:var(--paper)] font-semibold text-[13px] px-5 py-2.5 rounded-lg hover:opacity-85 transition-opacity"
            >
              Go to dashboard
            </Link>
          </>
        ) : (
          <>
            <div className="w-12 h-12 rounded-xl bg-[color:var(--ember)]/10 text-[color:var(--ember)] flex items-center justify-center mx-auto mb-4 text-[20px] font-bold">
              {preview.data.data.workspaceName.charAt(0).toUpperCase()}
            </div>
            <h1 className="font-display text-[24px] text-[color:var(--ink)] leading-tight">
              Join {preview.data.data.workspaceName}
            </h1>
            <p className="mt-2 text-[14px] leading-[1.6] text-[color:var(--ink-3)]">
              <b className="text-[color:var(--ink-2)]">{preview.data.data.inviterName}</b> invited{' '}
              <b className="text-[color:var(--ink-2)]">{preview.data.data.email}</b> to join as a{' '}
              <b className="text-[color:var(--ink-2)]">{preview.data.data.role}</b>.
            </p>

            {user ? (
              user.email?.toLowerCase() === preview.data.data.email.toLowerCase() ? (
                <button
                  type="button"
                  disabled={accept.isPending}
                  onClick={() => accept.mutate()}
                  className="mt-6 w-full inline-flex items-center justify-center bg-[color:var(--ink)] text-[color:var(--paper)] font-semibold text-[14px] px-5 py-3 rounded-lg hover:opacity-85 transition-opacity disabled:opacity-50"
                >
                  {accept.isPending ? 'Joining…' : 'Accept invitation'}
                </button>
              ) : (
                <p className="mt-6 text-[13px] leading-[1.6] text-[color:var(--ink-3)] bg-[color:var(--paper-2)] rounded-lg px-4 py-3">
                  You&rsquo;re signed in as <b>{user.email}</b>, but this invite was sent to{' '}
                  <b>{preview.data.data.email}</b>. Sign in with that email to accept.
                </p>
              )
            ) : (
              <div className="mt-6 flex flex-col gap-2">
                <Link
                  href={`/login?returnTo=${returnTo}`}
                  className="w-full inline-flex items-center justify-center bg-[color:var(--ink)] text-[color:var(--paper)] font-semibold text-[14px] px-5 py-3 rounded-lg hover:opacity-85 transition-opacity"
                >
                  Sign in to accept
                </Link>
                <Link
                  href={`/register?returnTo=${returnTo}`}
                  className="text-[13px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors"
                >
                  New to LeadreAI? Create an account
                </Link>
              </div>
            )}
            <p className="mt-5 text-[11.5px] text-[color:var(--ink-4)]">
              Expires {new Date(preview.data.data.expiresAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>
          </>
        )}
      </div>
    </div>
  );
}
