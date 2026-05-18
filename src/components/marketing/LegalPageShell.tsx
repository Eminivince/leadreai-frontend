import Link from 'next/link';
import SiteNav from './SiteNav';

/**
 * Shell for static legal/policy pages (Terms, Privacy, Security).
 *
 * Shares the public SiteNav + a compact footer so /terms, /privacy,
 * etc. all sit inside the same site chrome instead of looking like
 * orphan documents.
 *
 * Content is passed as children. Recommended to wrap in <article>
 * with the .legal-prose class (defined in the page itself for now —
 * if we add more we can promote to globals.css).
 */
export function LegalPageShell({
  eyebrow,
  title,
  effective,
  children,
}: {
  eyebrow: string;
  title: string;
  effective: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-[color:var(--paper)] text-[color:var(--ink)]">
      <SiteNav />

      <header className="px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 pb-8 border-b border-[color:var(--rule)]">
        <div className="max-w-[760px] mx-auto">
          <div className="font-mono text-[9.5px] tracking-[0.18em] uppercase text-[color:var(--ember)] mb-4">
            {eyebrow}
          </div>
          <h1 className="font-display font-normal text-[clamp(32px,5.5vw,56px)] tracking-[-0.01em] leading-[1.05] text-[color:var(--ink)]">
            {title}
          </h1>
          <p className="mt-4 font-mono text-[10px] tracking-[0.18em] uppercase text-[color:var(--ink-4)]">
            Effective {effective}
          </p>
        </div>
      </header>

      <article className="px-4 sm:px-6 md:px-12 py-12 sm:py-16">
        <div className="max-w-[760px] mx-auto legal-prose">{children}</div>
      </article>

      <footer className="px-4 sm:px-6 md:px-12 py-10 flex items-center justify-between gap-6 flex-wrap border-t border-[color:var(--rule)]">
        <div className="flex items-center gap-2.5">
          <div className="w-6 h-6 rounded-md bg-[color:var(--ink)] flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 16 16" fill="none" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M3 13 L3 3 L6 3 L6 10 L13 10 L13 13 Z" fill="white" />
              <circle cx="12" cy="4" r="1.8" fill="rgba(255,255,255,0.5)" />
            </svg>
          </div>
          <span className="font-sans font-bold text-[13px] text-[color:var(--ink)] tracking-[-0.02em]">
            LeadreAI
          </span>
          <span className="font-mono text-[9.5px] text-[color:var(--ink-4)] tracking-[0.18em] uppercase ml-3">
            © {new Date().getFullYear()}
          </span>
        </div>
        <div className="flex items-center gap-6 flex-wrap">
          <Link href="/pricing" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
            Pricing
          </Link>
          <Link href="/docs" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
            Docs
          </Link>
          <Link href="/terms" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
            Terms
          </Link>
          <Link href="/privacy" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
            Privacy
          </Link>
          <Link href="/login" className="font-sans text-[12.5px] text-[color:var(--ink-3)] hover:text-[color:var(--ink)] transition-colors">
            Sign in
          </Link>
        </div>
      </footer>

      <style>{`
        .legal-prose {
          font-family: var(--font-body), system-ui, sans-serif;
          color: var(--ink-2);
          font-size: 15px;
          line-height: 1.7;
        }
        .legal-prose h2 {
          font-family: var(--font-body), system-ui, sans-serif;
          font-weight: 600;
          font-size: 17px;
          color: var(--ink);
          margin: 2.5rem 0 0.75rem;
          letter-spacing: -0.01em;
        }
        .legal-prose h2:first-of-type {
          margin-top: 0;
        }
        .legal-prose h3 {
          font-family: var(--font-body), system-ui, sans-serif;
          font-weight: 600;
          font-size: 14.5px;
          color: var(--ink);
          margin: 1.75rem 0 0.5rem;
        }
        .legal-prose p {
          margin: 0 0 1.1rem;
        }
        .legal-prose ul,
        .legal-prose ol {
          margin: 0 0 1.1rem 1.25rem;
        }
        .legal-prose li {
          margin: 0.35rem 0;
        }
        .legal-prose strong {
          color: var(--ink);
          font-weight: 600;
        }
        .legal-prose a {
          color: var(--ember);
          text-decoration: underline;
          text-underline-offset: 2px;
        }
        .legal-prose a:hover {
          color: var(--ember-2);
        }
        .legal-prose code {
          font-family: var(--font-mono), ui-monospace, monospace;
          font-size: 13px;
          background: var(--paper-2);
          padding: 0.1em 0.35em;
          border-radius: 3px;
        }
      `}</style>
    </main>
  );
}
