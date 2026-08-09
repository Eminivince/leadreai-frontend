import { test, expect } from '@playwright/test';

/**
 * Smoke E2E — the always-on safety net that runs against a real built app
 * (locally via the Playwright webServer, or a deployed env via E2E_BASE_URL).
 * It asserts the public shell renders and the auth entry points are reachable
 * — the cheapest signal that a deploy isn't a white screen. Deeper journeys
 * (auth → job → leads → outreach) layer on top of this file as the suite grows.
 */

test('landing page renders', async ({ page }) => {
  const res = await page.goto('/');
  expect(res?.status() ?? 200).toBeLessThan(400);
  // The document has a non-empty title and visible body content.
  await expect(page).toHaveTitle(/.+/);
  await expect(page.locator('body')).toBeVisible();
});

test('login page shows email + password fields', async ({ page }) => {
  await page.goto('/login');
  await expect(page.locator('input[type="email"]').first()).toBeVisible();
  await expect(page.locator('input[type="password"]').first()).toBeVisible();
});

test('register page is reachable', async ({ page }) => {
  const res = await page.goto('/register');
  expect(res?.status() ?? 200).toBeLessThan(400);
  await expect(page.locator('input[type="email"]').first()).toBeVisible();
});

test('marketing legal pages render (static)', async ({ page }) => {
  for (const path of ['/privacy', '/terms', '/security', '/pricing']) {
    const res = await page.goto(path);
    expect(res?.status() ?? 200, `${path} should load`).toBeLessThan(400);
    await expect(page.locator('body')).toBeVisible();
  }
});
