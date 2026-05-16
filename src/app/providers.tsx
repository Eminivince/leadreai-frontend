'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { useState } from 'react';

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      {/* attribute="class" toggles `.dark` on <html>, matching tailwind's
          darkMode: 'class' + the .dark token block in globals.css.
          defaultTheme="light" — warm-cream design language is light-first;
          user can still flip to dark via the ThemeToggle, persisted via
          localStorage. enableSystem=false so we don't auto-follow OS prefs.
          disableTransitionOnChange prevents the brief paint-flicker that
          would otherwise happen when CSS transitions interpolate between
          background colors during a theme swap. */}
      <ThemeProvider
        attribute="class"
        defaultTheme="light"
        enableSystem={false}
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </QueryClientProvider>
  );
}
