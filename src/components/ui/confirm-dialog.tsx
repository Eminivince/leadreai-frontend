'use client';

import * as React from 'react';
import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from './dialog';

/**
 * Confirm-before-destroy modal. Wrap any irreversible mutation (revoke API
 * key, delete KB entry, remove suppression row) with this so a fat-fingered
 * icon click can't lose customer data.
 *
 * The component is fully controlled — parent owns `open` state. We pull the
 * Radix focus-trap by default (built into <Dialog>), so keyboard users land
 * on the cancel button first and can't tab into anything behind the modal.
 */
export interface ConfirmDialogProps {
  open: boolean;
  onOpenChange: (next: boolean) => void;
  title: string;
  description?: string;
  // Name of the thing being destroyed; rendered with extra emphasis to give
  // the user a chance to spot a wrong-row mis-click.
  itemName?: string;
  confirmLabel?: string;
  cancelLabel?: string;
  // Variant 'destructive' tints the confirm button red — the default. Use
  // 'default' for non-destructive confirms (e.g., publish, send, activate).
  variant?: 'destructive' | 'default';
  loading?: boolean;
  // When set, the user must type this exact string into a field before the
  // confirm button enables — the standard "type the name to delete" gate for
  // high-blast-radius actions (delete workspace, drop database).
  requireText?: string;
  onConfirm: () => void | Promise<void>;
}

export function ConfirmDialog({
  open,
  onOpenChange,
  title,
  description,
  itemName,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  variant = 'destructive',
  loading = false,
  requireText,
  onConfirm,
}: ConfirmDialogProps) {
  const [typed, setTyped] = useState('');
  // Reset the typed gate whenever the dialog (re)opens so a prior attempt
  // doesn't pre-satisfy it.
  useEffect(() => {
    if (open) setTyped('');
  }, [open]);

  const textGateOk = !requireText || typed.trim() === requireText;
  const confirmDisabled = loading || !textGateOk;

  const handleConfirm = async () => {
    if (!textGateOk) return;
    await onConfirm();
  };

  const confirmClass =
    variant === 'destructive'
      ? 'inline-flex items-center justify-center rounded-md bg-red-600 px-4 py-2 text-sm font-medium text-white hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-50'
      : 'inline-flex items-center justify-center rounded-md bg-amber-500 px-4 py-2 text-sm font-medium text-white hover:bg-amber-600 disabled:cursor-not-allowed disabled:opacity-50';

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          {description ? <DialogDescription>{description}</DialogDescription> : null}
        </DialogHeader>
        {itemName ? (
          <div className="mt-2 rounded-md border border-[color:var(--rule)] bg-[color:var(--paper-1)] px-3 py-2 text-sm">
            <span className="text-[color:var(--ink-2)]">Target: </span>
            <span className="font-medium text-[color:var(--ink)]">{itemName}</span>
          </div>
        ) : null}
        {requireText ? (
          <input
            type="text"
            value={typed}
            onChange={(e) => setTyped(e.target.value)}
            placeholder={requireText}
            autoComplete="off"
            aria-label={`Type ${requireText} to confirm`}
            className="mt-3 block w-full rounded-md border border-[color:var(--rule)] bg-white px-3 py-2 text-sm text-[color:var(--ink)] placeholder:text-[color:var(--ink-4)] focus:border-[color:var(--ink)] focus:outline-none"
          />
        ) : null}
        <DialogFooter className="mt-4">
          <button
            type="button"
            disabled={loading}
            onClick={() => onOpenChange(false)}
            className="inline-flex items-center justify-center rounded-md border border-[color:var(--rule)] bg-[color:var(--paper-1)] px-4 py-2 text-sm hover:bg-[color:var(--paper-3)]"
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            disabled={confirmDisabled}
            onClick={() => void handleConfirm()}
            className={confirmClass}
            autoFocus={false}
          >
            {loading ? 'Working…' : confirmLabel}
          </button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
