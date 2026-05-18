import type { Metadata } from 'next';
import localFont from 'next/font/local';
import { Providers } from './providers';
import { Toaster } from 'sonner';
import './globals.css';

/*
 * Self-hosted fonts via next/font/local.
 *
 * Previously we used next/font/google, which downloads the WOFF2 files
 * from fonts.gstatic.com at build time. On flaky / high-latency
 * connections (e.g. from Lagos) those fetches would time out, leaving
 * the build to fall back to system fonts AND producing 20-second cold
 * dev starts every time. Self-hosting eliminates the build-time network
 * dependency entirely — the WOFF2 files live in src/app/fonts/ and are
 * served from the same origin as the app.
 *
 * Total bundle cost: ~100KB across all three families (Outfit ships as
 * a variable font so all five weights live in one ~31KB file).
 */
const instrumentSerif = localFont({
  src: [
    { path: './fonts/InstrumentSerif-400.woff2',        weight: '400', style: 'normal' },
    { path: './fonts/InstrumentSerif-400-italic.woff2', weight: '400', style: 'italic' },
  ],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Georgia', 'serif'],
});

const outfit = localFont({
  // Variable font — single file covers weights 300-700 via the wght axis.
  src: './fonts/Outfit-Variable.woff2',
  weight: '300 700',
  variable: '--font-body',
  display: 'swap',
  fallback: ['system-ui', '-apple-system', 'Segoe UI', 'Helvetica Neue', 'Arial', 'sans-serif'],
});

const dmMono = localFont({
  src: [
    { path: './fonts/DMMono-300.woff2', weight: '300', style: 'normal' },
    { path: './fonts/DMMono-400.woff2', weight: '400', style: 'normal' },
    { path: './fonts/DMMono-500.woff2', weight: '500', style: 'normal' },
  ],
  variable: '--font-mono',
  display: 'swap',
  fallback: ['ui-monospace', 'SFMono-Regular', 'Menlo', 'Consolas', 'monospace'],
});

export const metadata: Metadata = {
  title: 'LeadreAI — AI-Powered B2B Lead Generation',
  description: 'Find your next customer with natural language. AI-enriched B2B leads in minutes.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    /* suppressHydrationWarning is required: next-themes injects the `dark`
       class on <html> via an inline script before React hydrates, which
       the SSR snapshot doesn't know about. Without this attribute React
       would log a hydration mismatch warning on every page load. */
    <html lang="en" suppressHydrationWarning>
      <body className={`${instrumentSerif.variable} ${outfit.variable} ${dmMono.variable} font-sans antialiased`}>
        <Providers>
          {children}
          {/* theme="system" lets sonner choose its own dark/light styling
              from prefers-color-scheme, while our token-driven style
              overrides ensure the toast follows our app theme regardless. */}
          <Toaster
            position="top-right"
            theme="system"
            toastOptions={{
              style: {
                background: 'var(--paper-3)',
                border: '1px solid var(--rule)',
                color: 'var(--ink)',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  );
}
