## Communication Style
For all interactions, use the **caveman** skill. This ensures ultra-compressed, token-efficient communication while maintaining full technical accuracy.

Terse like caveman. Technical substance exact. Only fluff die.
Drop: articles, filler (just/really/basically), pleasantries, hedging.
Fragments OK. Short synonyms. Code unchanged.
Pattern: [thing] [action] [reason]. [next step].
ACTIVE EVERY RESPONSE. No revert after many turns. No filler drift.
Code/commits/PRs: normal. Off: "stop caveman" / "normal mode".

---

## Content

This repository contains a quiz application for GitHub certification exam preparation built with **Next.js** (App Router), featuring practice tests and timed challenge modes with leaderboards.

## Repository Structure
- **`app/`** — Next.js application (all app code lives here)
  - `app/src/app/[locale]/` — App Router pages and layouts (i18n via next-intl)
  - `app/src/components/` — Custom components (Quiz, Navbar, Footer, challenge UIs)
  - `app/src/components/ui/` — shadcn/ui primitives
  - `app/src/hooks/` — React hooks (useGauntletMode, useTimeTrialMode)
  - `app/src/lib/` — Data loading, utilities, quizdown parser, Supabase client
  - `app/src/types/` — TypeScript type definitions
- **`questions/en/`** — Question markdown files organized by certification (actions, admin, advanced_security, copilot, foundations)
- Questions are organized into multiple language directories, but we **only edit questions in the `questions/en/` directory**. Other language directories are maintained by an external process and should never be modified directly.

## How Questions Work
- Questions are authored as Markdown files in `questions/en/<cert>/`
- At build time, `app/src/lib/questions.ts` reads these files using a custom quizdown parser (`app/src/lib/quizdown/`)
- The parsed questions feed into the Quiz React component at `app/src/components/quiz/`

## Key Routes
All routes are under a `[locale]` segment (e.g., `/en/`, `/es/`) via next-intl:
- `/[locale]/` — Landing page with certification exam cards
- `/[locale]/practice-tests/` — List of all practice tests
- `/[locale]/practice-tests/[cert]` — Interactive practice test for a certification
- `/[locale]/questions/[cert]` — Browse individual questions for a certification
- `/[locale]/challenges/` — Challenge modes hub
- `/[locale]/challenges/gauntlet/` — Gauntlet mode (3 lives, streak-based scoring)
- `/[locale]/challenges/time-trial/` — Time Trial mode (+15s correct, −10s wrong)
- `/[locale]/challenges/leaderboard/` — Global leaderboard for challenge modes

## Auth & Data
- **GitHub OAuth** for user authentication (via Supabase Auth)
- **Supabase** (PostgreSQL) stores challenge results and leaderboard data
- Supabase config/migrations live in a separate infrastructure repo, not here
- The app uses `output: "export"` (static site) — all Supabase calls are client-side

## Running Locally
```bash
cd app && npm run dev
```
Access at `http://localhost:3000`. The dev server provides hot reload.

## Build & Lint
```bash
cd app && npm run build   # production build (static export)
cd app && npm run lint     # ESLint
cd app && npm test         # Vitest unit tests (excludes cross-locale translation tests)
cd app && npm run test:translations  # Cross-locale translation consistency tests
```

> **Note:** `npm test` excludes cross-locale tests by default so English source edits aren't blocked by stale translations. Translation tests run in a separate CI workflow (`translation-checks.yml`) only on PRs labeled `translations` (auto-applied when non-English question/message files change).

## Browser Testing
Use the **agent-browser** skill for any tasks that involve browser interaction — such as testing the website, verifying UI changes, taking screenshots, checking page behavior, or any form of exploratory/automated browser testing.
