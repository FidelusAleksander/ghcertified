# Phase 3 Functionality Inventory

Purpose: define gamified learning capabilities planned after Phase 2.

## Scope

Phase 3 adds gamified learning with persisted results:
1. Survival Mode
2. GitHub login
3. Score storage
4. Results dashboard

## Functionality Inventory

| ID | Functionality | Expected Behavior | Minimum Acceptance Criteria |
|---|---|---|---|
| P3-01 | Survival Mode | User starts a survival run with exactly 1 life. Correct answers continue the run. Wrong answer ends the run. Remaining questions are treated as unanswered when the run ends. | User can start a Survival Mode run from the games section. UI always shows current lives and current score. Wrong answer ends the run immediately. Run ends automatically at zero lives and shows final results. Results include at least: total correct, total wrong, total unanswered, and final score. |
| P3-02 | GitHub authentication | Users can sign in with GitHub using Supabase Auth. | User can click "Sign in with GitHub" and complete login. Session is available to the app after successful login. User can also sign out. |
| P3-03 | Save results with login fallback | At the end of a run, logged-in users can save their result. Logged-out users are prompted to log in with GitHub to save that run result. | End-of-run screen shows "Save result" for logged-in users. For logged-out users, end-of-run screen shows "Log in with GitHub to save". After successful login, user can save the result from that completed run. |
| P3-04 | Public global leaderboard per test type | Users can view public rankings grouped by certification type. Leaderboard defaults to total rankings and supports filtering by last X days. | Leaderboard is publicly accessible and does not require login to view. Leaderboard is shown per certification type only (no combined leaderboard). Default view is total rankings. Users can apply a "last X days" filter to rankings. |

## User Flow Expectations

1. User opens the games section and starts Survival Mode.
2. User answers questions one-by-one.
3. A wrong answer removes the only life and ends the run.
4. When lives reach zero, the run ends immediately.
5. User sees a results screen and can start a new run.
6. If user is logged in, they can save the run result.
7. If user is logged out, they can log in with GitHub and then save the completed run result.

## Rules

1. Survival Mode starts with exactly 1 life.
2. A correct answer does not add lives.
3. A wrong answer always ends the run.
4. A run cannot continue after life reaches zero.
5. Any not-seen or not-answered questions at run end are counted as unanswered.
6. Saving scores requires authentication.
7. Leaderboards are global and public only.
8. Leaderboards are shown per certification type only.
9. Leaderboard default period is total, with a user-selectable "last X days" filter.

## Out of Scope for Phase 3

1. Additional game modes beyond Survival Mode.
2. Multiplayer or head-to-head modes.
3. Rewards economy (coins, unlockables, store).
4. Non-GitHub authentication providers.
5. Personal/private leaderboards.
6. Combined cross-certification leaderboard.
