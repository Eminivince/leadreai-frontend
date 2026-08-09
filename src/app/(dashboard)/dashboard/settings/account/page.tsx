'use client';

import { useEffect, useState } from 'react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { toast } from 'sonner';
import { apiFetch, ApiError } from '@/lib/api';
import { setAccessToken } from '@/lib/auth';
import { useAppStore } from '@/store/useAppStore';
import type { ApiResponse, User } from '@leadreai/shared';
import {
  Label,
  HairlineInput,
  SectionHead,
  PrimaryButton,
} from '@/components/settings/primitives';

/**
 * Account — your byline.
 * Profile edit via PATCH /auth/me. Password + 2FA forthcoming.
 */
export default function AccountSettingsPage() {
  const { user, setUser } = useAppStore();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [dirty, setDirty] = useState(false);

  useEffect(() => {
    if (user && !dirty) {
      setFirstName(user.firstName ?? '');
      setLastName(user.lastName ?? '');
      setAvatarUrl(user.avatarUrl ?? '');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  const saveMutation = useMutation({
    mutationFn: async (payload: { firstName: string; lastName: string; avatarUrl?: string }) => {
      const res = await apiFetch<ApiResponse<User>>('/api/v1/auth/me', {
        method: 'PATCH',
        body: JSON.stringify(payload),
      });
      return res.data;
    },
    onSuccess: (u) => {
      setUser(u);
      setDirty(false);
      toast.success('Profile saved.');
    },
    onError: (err) => toast.error(err instanceof Error ? err.message : 'Failed to save.'),
  });

  if (!user) {
    return (
      <div className="py-8  text-[14px] text-[color:var(--ink-2)]">
        Loading account…
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-14">
      {/* Your byline */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          saveMutation.mutate({
            firstName: firstName.trim(),
            lastName: lastName.trim(),
            avatarUrl: avatarUrl.trim() || undefined,
          });
        }}
      >
        <section>
          <SectionHead n="01" title="Your profile" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
            <div>
              <Label>First name</Label>
              <HairlineInput
                value={firstName}
                onChange={(e) => { setDirty(true); setFirstName(e.target.value); }}
                maxLength={80}
                required
              />
            </div>
            <div>
              <Label>Last name</Label>
              <HairlineInput
                value={lastName}
                onChange={(e) => { setDirty(true); setLastName(e.target.value); }}
                maxLength={80}
                required
              />
            </div>
            <div className="md:col-span-2">
              <Label>Avatar URL (optional)</Label>
              <HairlineInput
                type="url"
                placeholder="https://…/avatar.jpg"
                value={avatarUrl}
                onChange={(e) => { setDirty(true); setAvatarUrl(e.target.value); }}
              />
            </div>
            <div className="md:col-span-2 flex items-center justify-end pt-2">
              <PrimaryButton type="submit" disabled={saveMutation.isPending || !dirty}>
                {saveMutation.isPending ? 'Saving…' : 'Save profile'}
              </PrimaryButton>
            </div>
          </div>
        </section>
      </form>

      {/* Contact (read-only) */}
      <section>
        <SectionHead n="02" title="Contact" />
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <Label>Email</Label>
            <div className="flex items-baseline gap-3 border-b border-[color:var(--rule)] py-2">
              <span className="font-mono text-[13px] text-[color:var(--ink)] flex-1 truncate">
                {user.email}
              </span>
              {user.isEmailVerified ? (
                <span className="font-mono text-[9.5px] tracking-[0.06em] text-[color:var(--success)]">
                  Verified
                </span>
              ) : (
                <span className="font-mono text-[9.5px] tracking-[0.06em] text-[color:var(--ink-3)]">
                  Unverified
                </span>
              )}
            </div>
            <p className="mt-2  text-[12px] text-[color:var(--ink-2)]">
              Email changes are forthcoming. Reach out if you need one moved today.
            </p>
          </div>
          <div>
            <Label>Last signed in</Label>
            <div className="border-b border-[color:var(--rule)] py-2 font-mono text-[13px] text-[color:var(--ink)]">
              {user.lastLoginAt ? new Date(user.lastLoginAt).toLocaleString() : '—'}
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section>
        <SectionHead n="03" title="Security" />
        <SecuritySection />
      </section>
    </div>
  );
}

/**
 * Password change (or first-time set, for social sign-ups). On success the
 * backend rotates the session and returns a fresh access token, which we
 * store so the current device stays signed in while every other session is
 * invalidated.
 */
function SecuritySection() {
  const meQuery = useQuery({
    queryKey: ['auth-me-haspassword'],
    queryFn: () => apiFetch<ApiResponse<User & { hasPassword: boolean }>>('/api/v1/auth/me'),
  });
  const hasPassword = meQuery.data?.data.hasPassword ?? true;

  const [current, setCurrent] = useState('');
  const [next, setNext] = useState('');
  const [confirm, setConfirm] = useState('');

  const mutation = useMutation({
    mutationFn: (body: { currentPassword?: string; newPassword: string }) =>
      apiFetch<ApiResponse<{ accessToken: string; wasSet: boolean }>>('/api/v1/auth/me/password', {
        method: 'POST',
        body: JSON.stringify(body),
      }),
    onSuccess: ({ data }) => {
      setAccessToken(data.accessToken); // keep this device signed in
      setCurrent(''); setNext(''); setConfirm('');
      void meQuery.refetch();
      toast.success(data.wasSet ? 'Password set. Other sessions were signed out.' : 'Password changed. Other sessions were signed out.');
    },
    onError: (err) => toast.error(err instanceof ApiError || err instanceof Error ? err.message : 'Could not update password.'),
  });

  function submit(e: React.FormEvent) {
    e.preventDefault();
    if (next.length < 8) { toast.error('New password must be at least 8 characters.'); return; }
    if (next !== confirm) { toast.error('New passwords do not match.'); return; }
    mutation.mutate({ ...(hasPassword ? { currentPassword: current } : {}), newPassword: next });
  }

  return (
    <form onSubmit={submit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {!hasPassword && (
        <p className="md:col-span-2 text-[12.5px] leading-[1.6] text-[color:var(--ink-2)] bg-[color:var(--paper-2)] rounded-lg px-4 py-3">
          You signed up with a social provider. Set a password to also be able to sign in with email.
        </p>
      )}
      {hasPassword && (
        <div className="md:col-span-2">
          <Label>Current password</Label>
          <HairlineInput type="password" autoComplete="current-password" value={current} onChange={(e) => setCurrent(e.target.value)} required />
        </div>
      )}
      <div>
        <Label>{hasPassword ? 'New password' : 'Password'}</Label>
        <HairlineInput type="password" autoComplete="new-password" value={next} onChange={(e) => setNext(e.target.value)} minLength={8} required />
      </div>
      <div>
        <Label>Confirm password</Label>
        <HairlineInput type="password" autoComplete="new-password" value={confirm} onChange={(e) => setConfirm(e.target.value)} minLength={8} required />
      </div>
      <div className="md:col-span-2 flex items-center justify-between pt-1">
        <span className="text-[12px] text-[color:var(--ink-3)]">Changing your password signs out all other devices.</span>
        <PrimaryButton type="submit" disabled={mutation.isPending || !next || !confirm}>
          {mutation.isPending ? 'Saving…' : hasPassword ? 'Change password' : 'Set password'}
        </PrimaryButton>
      </div>
    </form>
  );
}
