-- =============================================================================
-- Migration: 001_game_results
-- Description: Create game_results table for persisting Gauntlet & Time Trial scores
-- =============================================================================

-- TABLE: game_results
--
-- Stores one row per completed game run. Both Gauntlet and Time Trial produce
-- the same data shape (correct/wrong/unanswered/total), so a single table with
-- a game_type discriminator is used instead of separate tables per mode.
--
-- PK: bigint identity (NOT uuid v4)
--   → uuid v4 is random, causing B-tree index fragmentation on large tables.
--   → bigint identity is sequential, 8 bytes, SQL-standard, best for single-DB.
--   → Per Supabase Postgres best practices: "Avoid random UUIDs (v4) as primary
--     keys on large tables (causes index fragmentation)."
--
-- game_type: text with CHECK constraint
--   → Acts like an enum but without the DDL overhead of CREATE TYPE.
--   → Easily extended by altering the CHECK constraint when new game modes ship.
--   → Matches the TypeScript union: GameType = "gauntlet" | "time-trial"
--
-- created_at: timestamptz (NOT timestamp)
--   → Always store timezone-aware timestamps per Postgres best practices.

create table game_results (
  id              bigint generated always as identity primary key,
  user_id         uuid not null references auth.users(id) on delete cascade,
  game_type       text not null check (game_type in ('gauntlet', 'time-trial')),
  correct         int not null,
  wrong           int not null,
  unanswered      int not null,
  total_questions int not null,
  created_at      timestamptz default now()
);


-- INDEX: game_results_user_id_idx
--
-- Postgres does NOT auto-index foreign key columns. Without this index:
--   → JOINs on user_id require a sequential scan
--   → ON DELETE CASCADE from auth.users scans all rows
-- Per Supabase best practices: "Always index the FK column."

create index game_results_user_id_idx on game_results (user_id);


-- INDEX: game_results_leaderboard_idx
--
-- Composite index for the leaderboard query pattern:
--   SELECT * FROM game_results WHERE game_type = $1 ORDER BY correct DESC LIMIT N
-- Leading column = game_type (equality filter), trailing = correct DESC (sort).

create index game_results_leaderboard_idx on game_results (game_type, correct desc);


-- ROW LEVEL SECURITY
--
-- RLS is the security boundary for client-side Supabase access.
-- The app is a static site (output: "export") — no server runtime.
-- All inserts come from the browser using the publishable key.
-- RLS ensures:
--   → Anyone can read (needed for public leaderboard)
--   → Only authenticated users can insert their own results

alter table game_results enable row level security;

-- SELECT: public read access (leaderboard is public)
create policy "Anyone can read game results"
  on game_results for select
  using (true);

-- INSERT: authenticated users can only insert rows where user_id = their own uid
--
-- IMPORTANT: auth.uid() is wrapped in a subquery `(select auth.uid())`.
-- Without the subquery, Postgres calls auth.uid() for EVERY row being checked.
-- With the subquery, it's evaluated once and cached.
-- Per Supabase best practices: "100x+ faster on large tables."
create policy "Users can insert own results"
  on game_results for insert
  with check ((select auth.uid()) = user_id);
