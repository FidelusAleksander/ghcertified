# Tech Stack Recommendation

Purpose: define a stable, well-known, and performant JavaScript stack to rebuild the website using Next.js with SSG.

## Recommended Stack

Use Next.js + TypeScript + Tailwind + shadcn/ui + Supabase + Cloudflare Pages.

1. Framework: Next.js (App Router) + TypeScript
2. Styling: Tailwind CSS
3. Components: shadcn/ui (built on Radix UI)
4. Auth + Database: Supabase (GitHub OAuth + Postgres)
5. Deployment: Cloudflare Pages
6. Validation: Zod
7. Testing: Playwright (E2E) + Vitest (unit)
8. Rendering strategy: SSG first (static generation by default)


## Hosting Notes (Cloudflare Pages)

1. Deploy static output to Cloudflare Pages for global CDN delivery.
2. Configure Next.js static export build for SSG deployment.
3. Keep Phase 1 and most content pages fully static.
4. Use Supabase directly from the client app for auth and score operations in Phase 3.




## Suggested Repository Conventions

1. Use TypeScript strict mode.
2. Keep all feature code in small domain folders (tests, games, leaderboard, auth).
3. Prefer static generation for content routes.
4. Use client-side Supabase calls for auth and score writes/reads.
5. Keep data access in a dedicated layer (for example `lib/db`).
6. Use clear migration scripts for database schema changes.
7. Avoid SSR-only dependencies unless explicitly needed later.

