import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright E2E config. Tests live in `e2e/`. By default Playwright boots
 * the production build locally (`pnpm build && pnpm start`) and runs the
 * suite against it; point at a deployed environment with
 * `E2E_BASE_URL=https://… pnpm test:e2e` (the webServer is skipped then).
 */
const BASE_URL = process.env['E2E_BASE_URL'] || 'http://localhost:3000';
const useExternal = Boolean(process.env['E2E_BASE_URL']);

export default defineConfig({
  testDir: './e2e',
  fullyParallel: true,
  forbidOnly: !!process.env['CI'],
  retries: process.env['CI'] ? 2 : 0,
  reporter: process.env['CI'] ? [['github'], ['html', { open: 'never' }]] : 'list',
  use: {
    baseURL: BASE_URL,
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
  webServer: useExternal
    ? undefined
    : {
        command: 'pnpm start',
        url: BASE_URL,
        timeout: 120_000,
        reuseExistingServer: !process.env['CI'],
      },
});
