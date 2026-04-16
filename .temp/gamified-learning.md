# Gamified Learning

A new way to interact with certification questions — competitive, high-stakes game modes that turn study sessions into engaging challenges.

## Overview

Gamified Learning introduces a dedicated **Games** section to the website, offering alternative experiences beyond standard practice tests. Game modes pull from **all certification questions combined** — there is no per-certification split. The first game mode is **Survival Mode**, with the architecture designed to support future game modes, leaderboards, and GitHub login.

## Survival Mode

The flagship game mode. One life. Every question matters.

### How It Works

- User opens Survival Mode and starts a run.
- Questions are drawn from **all certifications** combined into a single pool.
- Questions are presented one at a time.
- A correct answer advances to the next question. A wrong answer **ends the run immediately**.
- When the run ends, all remaining unseen questions count as unanswered.
- A results screen shows: total correct, total wrong, total unanswered, and final score.
- User can start a new run from the results screen.

### UI Requirements

- The in-game UI always displays current lives (1) and running score.
- Wrong answer triggers a clear "run over" state — no ambiguity.
- Results screen is the single exit point from a completed run.

### Rules

1. A run starts with exactly 1 life.
2. Correct answers do not restore or add lives.
3. A wrong answer always removes the life and ends the run.
4. A run cannot continue after the life is lost.
5. Unseen or unanswered questions at run end count as unanswered in the results.

## Planned: GitHub Login & Score Persistence

> Not included in the initial release, but the architecture should accommodate these additions cleanly.

### GitHub Authentication

- Users sign in with GitHub (via Supabase Auth).
- Session available app-wide after login. Sign-out supported.

### Saving Results

- Logged-in users see a "Save result" action on the results screen.
- Logged-out users see "Log in with GitHub to save" — after login, the completed run result can still be saved.

## Planned: Leaderboard

> Not included in the initial release. Designed as a future layer on top of saved results.

### Design

- Public and global — no login required to **view**.
- Single combined leaderboard (no per-certification split).
- Default view: all-time rankings.
- Supports a "last X days" filter for recency-based competition.

## Out of Scope

1. Game modes beyond Survival Mode (future consideration).
2. Multiplayer or head-to-head modes.
3. Rewards economy (coins, unlockables, store).
4. Non-GitHub authentication providers.
5. Personal/private leaderboards.