'use client';

import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { apiFetch } from '@/lib/api';
import type { ApiResponse } from '@leadreai/shared';

export interface TeamMember {
  userId: string;
  email: string;
  name: string;
  avatarUrl?: string;
  role: 'owner' | 'admin' | 'member';
  joinedAt: string;
  isOwner: boolean;
}

export interface TeamInvite {
  _id: string;
  email: string;
  role: 'admin' | 'member';
  invitedByName: string;
  createdAt: string;
  expiresAt: string;
}

/**
 * Team data + mutations for a workspace. `canManage` gates the mutating UI;
 * the backend enforces owner/admin regardless, this just hides controls a
 * member can't use.
 */
export function useTeam(workspaceId: string | null, canManage: boolean) {
  const qc = useQueryClient();
  const membersKey = ['workspace-members', workspaceId];
  const invitesKey = ['workspace-invites', workspaceId];

  const membersQuery = useQuery({
    queryKey: membersKey,
    queryFn: () => apiFetch<ApiResponse<TeamMember[]>>(`/api/v1/workspaces/${workspaceId}/members`),
    enabled: !!workspaceId,
  });

  const invitesQuery = useQuery({
    queryKey: invitesKey,
    queryFn: () => apiFetch<ApiResponse<TeamInvite[]>>(`/api/v1/workspaces/${workspaceId}/invites`),
    enabled: !!workspaceId && canManage,
  });

  const invalidate = () => {
    void qc.invalidateQueries({ queryKey: membersKey });
    void qc.invalidateQueries({ queryKey: invitesKey });
  };

  const invite = useMutation({
    mutationFn: (body: { email: string; role: 'admin' | 'member' }) =>
      apiFetch<ApiResponse<TeamInvite>>(`/api/v1/workspaces/${workspaceId}/members/invite`, {
        method: 'POST',
        body: JSON.stringify(body),
      }),
    onSuccess: invalidate,
  });

  const revokeInvite = useMutation({
    mutationFn: (inviteId: string) =>
      apiFetch<ApiResponse<null>>(`/api/v1/workspaces/${workspaceId}/invites/${inviteId}`, {
        method: 'DELETE',
      }),
    onSuccess: invalidate,
  });

  const updateRole = useMutation({
    mutationFn: (body: { userId: string; role: 'admin' | 'member' }) =>
      apiFetch<ApiResponse<TeamMember[]>>(`/api/v1/workspaces/${workspaceId}/members/${body.userId}`, {
        method: 'PATCH',
        body: JSON.stringify({ role: body.role }),
      }),
    onSuccess: invalidate,
  });

  const removeMember = useMutation({
    mutationFn: (userId: string) =>
      apiFetch<ApiResponse<null>>(`/api/v1/workspaces/${workspaceId}/members/${userId}`, {
        method: 'DELETE',
      }),
    onSuccess: invalidate,
  });

  return {
    members: membersQuery.data?.data ?? [],
    invites: invitesQuery.data?.data ?? [],
    isLoading: membersQuery.isLoading,
    invite,
    revokeInvite,
    updateRole,
    removeMember,
  };
}
