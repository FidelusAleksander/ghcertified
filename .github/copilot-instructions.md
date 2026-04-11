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

This repository contains a quiz application for GitHub certification exam preparation built with **Next.js** (App Router).

## Repository Structure
- **`app/`** — Next.js application (all app code lives here)
  - `app/src/app/` — App Router pages and layouts
  - `app/src/components/` — Custom components (Quiz, Navbar, Footer)
  - `app/src/components/ui/` — shadcn/ui primitives
  - `app/src/lib/` — Data loading, utilities, quizdown parser
  - `app/src/types/` — TypeScript type definitions
- **`questions/en/`** — Question markdown files organized by certification (actions, admin, advanced_security, copilot, foundations)
- Questions are organized into multiple language directories, but we **only edit questions in the `questions/en/` directory**. Other language directories are maintained by an external process and should never be modified directly.

## How Questions Work
- Questions are authored as Markdown files in `questions/en/<cert>/`
- At build time, `app/src/lib/questions.ts` reads these files using a custom quizdown parser (`app/src/lib/quizdown/`)
- The parsed questions feed into the Quiz React component at `app/src/components/quiz/`

## Key Routes
- `/` — Landing page with certification exam cards
- `/practice-tests/<cert>` — Interactive practice test for a given certification
- `/questions/<cert>/<question-id>` — Individual question view

## Running Locally
```bash
cd app && npm run dev
```
Access at `http://localhost:3000`. The dev server provides hot reload.

## Build & Lint
```bash
cd app && npm run build   # production build
cd app && npm run lint     # ESLint
```

## Browser Testing
Use the **agent-browser** skill for any tasks that involve browser interaction — such as testing the website, verifying UI changes, taking screenshots, checking page behavior, or any form of exploratory/automated browser testing.
