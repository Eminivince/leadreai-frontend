# LeadreAI — Frontend

Next.js 14 (App Router) frontend for LeadreAI. Warm-cream design system, Outfit + Instrument Serif + DM Mono typography, mobile-responsive across every surface.

## Stack

- **Next.js 14** with App Router and React Server Components
- **TypeScript 5**, strict mode
- **Tailwind CSS 3** with `next-themes` for dark mode
- **shadcn/ui** primitives (Radix UI under the hood)
- **TanStack Query + Zustand** for client state
- **Framer Motion** for animation
- **Sentry** for error tracking

## Local development

```bash
pnpm install
pnpm dev
```

App runs on http://localhost:3000.

## Environment

Create a `.env.local` at the repo root with at minimum:

```
NEXT_PUBLIC_API_URL=http://localhost:4000
```

## Project structure

```
leadreai-frontend/
├── src/
│   ├── app/             Next.js App Router routes
│   ├── components/      Shared UI components
│   ├── hooks/           React hooks
│   ├── lib/             API client, utils, auth
│   └── store/           Zustand stores
├── shared/              Inlined types & schemas (was @leadreai/shared)
└── public/              Static assets
```

Imports from `@leadreai/shared` are still supported via tsconfig `paths` alias pointing at `./shared/`.

## Deployment

This repo is a standalone Next.js app — no monorepo dependencies. Deploy to Vercel:

- Framework Preset: **Next.js**
- Root Directory: `./`
- Install Command: `pnpm install`
- Build Command: `pnpm build`
- Env vars: set `NEXT_PUBLIC_API_URL` to your backend URL
