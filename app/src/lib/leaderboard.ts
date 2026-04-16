/**
 * Leaderboard data layer.
 *
 * Returns mock data now — swap to Supabase query later.
 * Interface is async to match future DB calls.
 */

import type { GameType, LeaderboardEntry } from "@/types/games";

const MOCK_SCORES: Record<GameType, number[]> = {
  survival: [247, 189, 156, 134, 112, 98, 87, 73, 61, 52],
  "time-trial": [42, 38, 35, 31, 28, 25, 22, 19, 16, 14],
};

const MOCK_USERNAME = "FidelusAleksander";

/**
 * Fetch top-N leaderboard entries for a game type.
 * Currently returns mock data — will query Supabase later.
 */
export async function getLeaderboard(
  gameType: GameType,
  limit = 10,
): Promise<LeaderboardEntry[]> {
  const scores = MOCK_SCORES[gameType];
  return scores.slice(0, limit).map((score, i) => ({
    rank: i + 1,
    githubUsername: MOCK_USERNAME,
    score,
  }));
}
