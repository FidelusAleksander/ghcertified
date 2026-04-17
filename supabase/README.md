# Supabase Database Setup

This directory contains Supabase setup notes for the ghcertified app.

Project-specific SQL files are intentionally kept in a local gitignored directory so they do not get committed with the open-source repo.

## Prerequisites

1. Create a [Supabase project](https://supabase.com/dashboard)
2. In Supabase Dashboard, choose safe defaults during initial setup:
   - **Enable Data API**: ON
   - **Enable automatic RLS**: ON
3. Enable **GitHub** as an Auth provider:
   - Supabase Dashboard → Authentication → Sign In / Providers → GitHub
   - Create a [GitHub OAuth App](https://github.com/settings/developers)
   - Copy the Supabase callback URL from the GitHub provider settings and paste it into the GitHub OAuth App
4. Configure auth URLs:
   - Supabase Dashboard → Authentication → URL Configuration
   - Set **Site URL** to your deployed app URL
   - Add local/dev redirect URLs as needed
5. Note your project credentials (Settings → API):
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
   - **Publishable key** (`sb_publishable_*`) → `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`

> **No secret key needed.** The app is a static site — all Supabase calls happen client-side. Row Level Security (RLS) is the security boundary.

## Initial Supabase Settings

### Enable Data API

Turn this **ON**.

Reason: this app uses `@supabase/supabase-js` in the browser, which talks to Supabase's API layer. Leaving it on is the normal setup for a frontend app using Supabase directly.

### Enable automatic RLS

Turn this **ON**.

Reason: new tables in `public` should start locked down. This setting only enables RLS automatically — you still need to create policies for each table.

## GitHub Auth Setup

This app uses GitHub sign-in from the browser via `supabase.auth.signInWithOAuth({ provider: "github" })`.

### 1. Get values from Supabase

In Supabase Dashboard:

1. Go to **Authentication** → **Sign In / Providers** → **GitHub**
2. Copy the **Callback URL**

It will look like:

```text
https://<project-ref>.supabase.co/auth/v1/callback
```

### 2. Create the GitHub OAuth App

In GitHub:

1. Go to **Settings** → **Developer settings** → **OAuth Apps** → **New OAuth App**
2. Fill these fields:

| GitHub OAuth App field | Value |
|------------------------|-------|
| Application name | Any public name for the app, e.g. `ghcertified` |
| Homepage URL | Your app URL, e.g. `http://localhost:3000` for local dev or your production domain |
| Authorization callback URL | The **Supabase callback URL** copied above |
| Enable Device Flow | Leave OFF |

3. Click **Register application**
4. Copy:
   - **Client ID**
   - **Client Secret** (generate it after app creation)

> GitHub OAuth Apps only support a single callback URL. If you also test Supabase Auth locally with the Supabase CLI (`http://localhost:54321/auth/v1/callback`), use a separate GitHub OAuth App for that local callback or temporarily switch the callback while testing.

### 3. Paste GitHub values into Supabase

Back in Supabase Dashboard:

1. Go to **Authentication** → **Sign In / Providers** → **GitHub**
2. Turn **GitHub Enabled** ON
3. Paste:
   - **Client ID** ← from GitHub OAuth App
   - **Client Secret** ← from GitHub OAuth App
4. Click **Save**

### 4. Configure redirect URLs in Supabase

This app currently calls GitHub sign-in with:

```ts
redirectTo: window.location.href
```

That means Supabase must allow redirects back to the exact current page. Configure:

1. **Authentication** → **URL Configuration**
2. Set **Site URL** to your main deployed site URL
3. Add **Additional Redirect URLs** for environments you use

Recommended values:

| Setting | Value | Why |
|---------|-------|-----|
| **Site URL** | `https://ghcertified.com` | Primary production domain |
| **Redirect URL** | `http://localhost:3000/**` | Local development — wildcard allows any page path |
| **Redirect URL** | `https://ghcertified.com/**` | Production — wildcard needed because `redirectTo` uses `window.location.href` (any page) |
| **Redirect URL** | `https://*.pages.dev/**` | Cloudflare Pages preview deployments (optional) |

The `/**` wildcard is required because the app redirects back to the exact page the user was on when they clicked "Sign in" (e.g. `/en/games/gauntlet`). Without it, Supabase will reject the redirect.

## Applying Migrations

Run your local SQL files in order via the Supabase SQL Editor (Dashboard → SQL Editor) or using the Supabase CLI:

```bash
# Via SQL Editor: paste contents of your local files

# Via CLI (if using Supabase CLI locally):
supabase db push
```

Recommended local-only paths:

| File | Description |
|------|-------------|
| `.local/supabase/migrations/001_game_results.sql` | Game results table, indexes, and RLS policies |
| `.local/supabase/seed.sql` | Optional sample data for local development |

These files are gitignored on purpose. Keep your own local copy there if you want versioned SQL without committing it.

## Environment Variables

Add these to your `.env.local` in the `app/` directory:

```env
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=sb_publishable_your-key-here
```

If these values are missing, the site can still run locally for normal browsing and gameplay, but GitHub sign-in and result saving stay unavailable until Supabase is configured.

## Schema Overview

### `game_results`

Stores completed game runs for Gauntlet and Time Trial modes.

| Column | Type | Description |
|--------|------|-------------|
| `id` | `bigint identity` | Sequential PK (not uuid — avoids index fragmentation) |
| `user_id` | `uuid` | FK to `auth.users(id)`, cascades on delete |
| `game_type` | `text` | `'gauntlet'` or `'time-trial'` (CHECK constraint) |
| `correct` | `int` | Number of correct answers |
| `wrong` | `int` | Number of wrong answers |
| `unanswered` | `int` | Number of unanswered questions |
| `total_questions` | `int` | Total questions in the run |
| `created_at` | `timestamptz` | When the result was saved |

### RLS Policies

| Policy | Operation | Rule |
|--------|-----------|------|
| Anyone can read | SELECT | Public (for leaderboard) |
| Users insert own | INSERT | `user_id` must match authenticated user |

### Indexes

| Index | Columns | Purpose |
|-------|---------|---------|
| `game_results_user_id_idx` | `user_id` | FK lookups, cascade deletes |
| `game_results_leaderboard_idx` | `(game_type, correct DESC)` | Leaderboard queries |
