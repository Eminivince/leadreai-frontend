import Link from 'next/link';

/**
 * Top navigation strip for every auth surface (sign in, sign up, magic
 * link callback, SSO callback).
 *
 * Without this, a user who lands on /login by mistake (or wants to leave
 * mid-flow) has no way back to the marketing site short of editing the
 * URL bar. Mirrors the public SiteNav at a glance — same wordmark, same
 * paper background, same Pricing / Docs links — so the brand reads as
 * continuous from public → auth.
 */
export function AuthNav() {
  return (
    <header className="flex items-center justify-between px-4 sm:px-6 md:px-12 h-14 border-b border-[color:var(--rule)] bg-[color:var(--paper)] shrink-0">
      <Link
        href="/"
        className="flex items-center gap-2.5 min-w-0 group"
        aria-label="LeadreAI — back to home"
      >
        <div className="w-7 h-7 rounded-[7px] bg-[color:var(--ink)] flex items-center justify-center flex-shrink-0 group-hover:opacity-90 transition-opacity">
          <svg viewBox="0 0 16 16" fill="none" className="w-4 h-4" aria-hidden="true">
            <path d="M3 13 L3 3 L6 3 L6 10 L13 10 L13 13 Z" fill="white" />
            <circle cx="12" cy="4" r="1.8" fill="rgba(255,255,255,0.5)" />
          </svg>
        </div>
        <span className="font-sans font-bold text-[15px] text-[color:var(--ink)] tracking-[-0.02em]">
          LeadreAI
        </span>
      </Link>

      <nav className="flex items-center gap-5 sm:gap-7" aria-label="Site navigation">
        <Link
          href="/"
          className="font-sans text-[13px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors tracking-[0.01em]"
        >
          Home
        </Link>
        <Link
          href="/pricing"
          className="font-sans text-[13px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors tracking-[0.01em]"
        >
          Pricing
        </Link>
        <Link
          href="/docs"
          className="hidden sm:inline font-sans text-[13px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors tracking-[0.01em]"
        >
          Docs
        </Link>
      </nav>
    </header>
  );
}
