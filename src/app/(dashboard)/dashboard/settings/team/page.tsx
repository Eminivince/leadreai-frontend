'use client';

import { useMemo, useState } from 'react';
import { toast } from 'sonner';
import { useWorkspace } from '@/hooks/useWorkspace';
import { useAppStore } from '@/store/useAppStore';
import { useTeam, type TeamMember } from '@/hooks/useTeam';
import { ApiError } from '@/lib/api';
import { ConfirmDialog } from '@/components/ui/confirm-dialog';
import {
  HairlineInput,
  HairlineSelect,
  Label,
  PrimaryButton,
} from '@/components/settings/primitives';

/**
 * Team — invite colleagues, manage roles, and remove seats. Owners and
 * admins get the full management surface; members see a read-only roster.
 */

function roleBadge(role: string): { label: string; cls: string } {
  if (role === 'owner') return { label: 'Owner', cls: 'bg-[color:var(--ember)]/10 text-[color:var(--ember)] border-[color:var(--ember)]/30' };
  if (role === 'admin') return { label: 'Admin', cls: 'bg-[color:var(--paper-3)] text-[color:var(--ink)] border-[color:var(--rule)]' };
  return { label: 'Member', cls: 'bg-[color:var(--paper-3)] text-[color:var(--ink-3)] border-[color:var(--rule)]' };
}

function initials(name: string): string {
  return (
    name
      .split(/\s+/)
      .filter(Boolean)
      .map((p) => p[0])
      .slice(0, 2)
      .join('')
      .toUpperCase() || '·'
  );
}

function errMsg(err: unknown, fallback: string): string {
  return err instanceof ApiError || err instanceof Error ? err.message : fallback;
}

export default function TeamSettingsPage() {
  const { workspaceId } = useWorkspace();
  const { user } = useAppStore();
  const currentUserId = user?._id;

  // We need the roster before we know the viewer's role, so fetch as a member
  // first; the management calls are individually authorized server-side too.
  const probe = useTeam(workspaceId, true);
  const myRole = useMemo(
    () => probe.members.find((m) => m.userId === currentUserId)?.role,
    [probe.members, currentUserId],
  );
  const canManage = myRole === 'owner' || myRole === 'admin';

  const { members, invites, isLoading, invite, revokeInvite, updateRole, removeMember } = probe;

  const [email, setEmail] = useState('');
  const [inviteRole, setInviteRole] = useState<'admin' | 'member'>('member');
  const [pendingRemove, setPendingRemove] = useState<TeamMember | null>(null);

  function submitInvite(e: React.FormEvent) {
    e.preventDefault();
    const trimmed = email.trim();
    if (!trimmed) return;
    invite.mutate(
      { email: trimmed, role: inviteRole },
      {
        onSuccess: () => {
          toast.success(`Invitation sent to ${trimmed}.`);
          setEmail('');
          setInviteRole('member');
        },
        onError: (err) => toast.error(errMsg(err, 'Could not send the invite.')),
      },
    );
  }

  if (isLoading) {
    return <div className="py-8 text-[14px] text-[color:var(--ink-3)]">Loading team…</div>;
  }

  return (
    <div className="flex flex-col gap-5">
      {/* Members */}
      <div className="bg-white border border-[color:var(--rule)] rounded-xl overflow-hidden">
        <div className="px-4 sm:px-6 py-5 border-b border-[color:var(--rule)]">
          <h2 className="text-[16px] font-bold text-[color:var(--ink)]">Team members</h2>
          <p className="text-[13px] text-[color:var(--ink-3)] mt-0.5">
            {members.length} {members.length === 1 ? 'seat' : 'seats'} on this workspace.
          </p>
        </div>

        <div className="divide-y divide-[color:var(--rule)]">
          {members.map((m) => {
            const isSelf = m.userId === currentUserId;
            const badge = roleBadge(m.role);
            const editable = canManage && !m.isOwner;
            return (
              <div key={m.userId} className="px-4 sm:px-6 py-4 flex items-center gap-3 sm:gap-4 flex-wrap">
                <div className="w-9 h-9 rounded-full bg-[color:var(--ink)] text-white flex items-center justify-center shrink-0 text-[13px] font-semibold overflow-hidden">
                  {m.avatarUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={m.avatarUrl} alt="" className="w-full h-full object-cover" />
                  ) : (
                    initials(m.name)
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="text-[13.5px] font-semibold text-[color:var(--ink)] truncate">{m.name}</span>
                    {isSelf && (
                      <span className="text-[11px] font-medium text-[color:var(--ember)] bg-[color:var(--ember)]/10 px-1.5 py-0.5 rounded">You</span>
                    )}
                  </div>
                  <div className="text-[12.5px] text-[color:var(--ink-3)] truncate">{m.email}</div>
                </div>

                {editable ? (
                  <div className="w-[120px]">
                    <HairlineSelect
                      value={m.role}
                      onChange={(role) =>
                        updateRole.mutate(
                          { userId: m.userId, role: role as 'admin' | 'member' },
                          {
                            onSuccess: () => toast.success(`${m.name} is now ${role}.`),
                            onError: (err) => toast.error(errMsg(err, 'Could not change role.')),
                          },
                        )
                      }
                    >
                      <option value="admin">Admin</option>
                      <option value="member">Member</option>
                    </HairlineSelect>
                  </div>
                ) : (
                  <span className={`inline-flex items-center text-[11px] font-semibold px-2.5 py-1 rounded-md border ${badge.cls}`}>
                    {badge.label}
                  </span>
                )}

                {editable && !isSelf ? (
                  <button
                    type="button"
                    onClick={() => setPendingRemove(m)}
                    className="text-[12.5px] font-medium text-[color:var(--ink-3)] hover:text-red-600 transition-colors"
                  >
                    Remove
                  </button>
                ) : (
                  <span className="text-[12px] text-[color:var(--ink-3)] hidden md:inline whitespace-nowrap">
                    Joined {new Date(m.joinedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                  </span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Invite + pending invitations */}
      <div className="bg-white border border-[color:var(--rule)] rounded-xl overflow-hidden">
        <div className="px-4 sm:px-6 py-5 border-b border-[color:var(--rule)]">
          <h2 className="text-[16px] font-bold text-[color:var(--ink)]">Invitations</h2>
          <p className="text-[13px] text-[color:var(--ink-3)] mt-0.5">Invite colleagues to join this workspace.</p>
        </div>

        <div className="p-4 sm:p-6 flex flex-col gap-5">
          {canManage ? (
            <form onSubmit={submitInvite} className="flex flex-col sm:flex-row gap-3 sm:items-end">
              <div className="flex-1">
                <Label>Email address</Label>
                <HairlineInput
                  type="email"
                  required
                  placeholder="colleague@company.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="w-full sm:w-[140px]">
                <Label>Role</Label>
                <HairlineSelect value={inviteRole} onChange={(v) => setInviteRole(v as 'admin' | 'member')}>
                  <option value="member">Member</option>
                  <option value="admin">Admin</option>
                </HairlineSelect>
              </div>
              <PrimaryButton type="submit" disabled={invite.isPending || !email.trim()}>
                {invite.isPending ? 'Sending…' : 'Send invite'}
              </PrimaryButton>
            </form>
          ) : (
            <p className="text-[13px] text-[color:var(--ink-3)]">
              Only workspace owners and admins can invite or manage members.
            </p>
          )}

          {canManage && invites.length > 0 && (
            <div className="border-t border-[color:var(--rule)] pt-4">
              <div className="text-[12.5px] font-semibold text-[color:var(--ink-2)] mb-2">
                Pending invitations ({invites.length})
              </div>
              <div className="divide-y divide-[color:var(--rule)] border border-[color:var(--rule)] rounded-lg">
                {invites.map((inv) => (
                  <div key={inv._id} className="px-3.5 py-3 flex items-center gap-3 flex-wrap">
                    <div className="flex-1 min-w-0">
                      <div className="text-[13.5px] font-medium text-[color:var(--ink)] truncate">{inv.email}</div>
                      <div className="text-[12px] text-[color:var(--ink-3)]">
                        {inv.role} · invited by {inv.invitedByName} · expires{' '}
                        {new Date(inv.expiresAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}
                      </div>
                    </div>
                    <button
                      type="button"
                      disabled={revokeInvite.isPending}
                      onClick={() =>
                        revokeInvite.mutate(inv._id, {
                          onSuccess: () => toast.success(`Invitation to ${inv.email} revoked.`),
                          onError: (err) => toast.error(errMsg(err, 'Could not revoke invite.')),
                        })
                      }
                      className="text-[12.5px] font-medium text-[color:var(--ink-3)] hover:text-red-600 transition-colors disabled:opacity-50"
                    >
                      Revoke
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <ConfirmDialog
        open={!!pendingRemove}
        onOpenChange={(o) => !o && setPendingRemove(null)}
        title="Remove team member"
        description="They'll immediately lose access to this workspace. This doesn't delete their account."
        itemName={pendingRemove ? `${pendingRemove.name} (${pendingRemove.email})` : undefined}
        confirmLabel="Remove member"
        loading={removeMember.isPending}
        onConfirm={() => {
          if (!pendingRemove) return;
          const target = pendingRemove;
          removeMember.mutate(target.userId, {
            onSuccess: () => {
              toast.success(`${target.name} removed.`);
              setPendingRemove(null);
            },
            onError: (err) => toast.error(errMsg(err, 'Could not remove member.')),
          });
        }}
      />
    </div>
  );
}
