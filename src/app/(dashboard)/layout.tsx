'use client';

import { useState } from 'react';
import { Sidebar } from '../../components/layout/Sidebar';
import { Topbar } from '../../components/layout/Topbar';
import { ImpersonationBanner } from '../../components/layout/ImpersonationBanner';
import { TopUpModal } from '../../components/credits/TopUpModal';
import { ChangePlanModal } from '../../components/credits/ChangePlanModal';
import { CommandPalette } from '../../components/search/CommandPalette';
import { PatraChat } from '../../components/chat/PatraChat';
import { OnboardingWizard } from '../../components/onboarding/OnboardingWizard';
import { useAuth } from '../../hooks/useAuth';
import { LoadingSpinner } from '../../components/shared/LoadingSpinner';

/* ─────────────────────────────────────────────────────────────────
 * Dashboard shell — editorial broadsheet.
 * The palette lives in globals.css (:root + html.dark), so this
 * shell only composes the Sidebar/Topbar and chrome.
 *
 * Mobile: sidebar is a drawer overlay toggled by the Topbar
 * hamburger. Desktop (≥ md): sidebar renders inline as before
 * and supports Cmd+\ collapse.
 * ───────────────────────────────────────────────────────────────── */

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
 const { isLoading } = useAuth(true);
 const [mobileOpen, setMobileOpen] = useState(false);

 if (isLoading) {
  return (
   <div className="h-screen flex items-center justify-center bg-[color:var(--paper)]">
    <LoadingSpinner size={28} />
   </div>
  );
 }

 /*
  * Scroll-containment architecture.
  *
  * Outer shell is locked to viewport height (h-screen) with overflow
  * hidden — the document NEVER grows past the viewport. The sidebar
  * and topbar sit at fixed positions inside that locked box. The only
  * thing that scrolls is the content area (overflow-y-auto on the inner
  * div) — which means long pages scroll in place without dragging the
  * sidebar or topbar with them.
  *
  * Before this change, the shell used min-h-screen which lets the
  * document grow with content. On long pages, that produced two bugs:
  *   1. the sidebar (h-screen sticky) stuck to viewport top but visually
  *      "felt tall" because the document underneath was tall
  *   2. the browser scrollbar appeared on the document, scrolling the
  *      whole app instead of just the content area.
  */
 return (
  <div className="h-screen flex flex-col w-full bg-[color:var(--paper)] text-[color:var(--ink)] selection:bg-[color:var(--ember)] selection:text-white overflow-hidden">
   <ImpersonationBanner />
   <div className="flex flex-1 min-h-0 w-full">
   <Sidebar mobileOpen={mobileOpen} onMobileClose={() => setMobileOpen(false)} />
   <main className="flex-1 min-w-0 flex flex-col overflow-hidden">
    <div className="shrink-0 bg-[color:var(--paper)]/95 backdrop-blur-sm border-b border-[color:var(--rule)]">
     <Topbar onOpenMobileSidebar={() => setMobileOpen(true)} />
    </div>
    <div className="flex-1 relative bg-[color:var(--paper-2)] min-w-0 overflow-y-auto overflow-x-hidden">{children}</div>
   </main>
   </div>
   <TopUpModal />
   <ChangePlanModal />
   <CommandPalette />
   <PatraChat />
   <OnboardingWizard />
  </div>
 );
}
