/**
 * Leaderboard data layer.
 *
 * Reads public best-score rows from Supabase. This module is client-safe: the
 * app is statically exported, so leaderboard data must be fetched after
 * hydration in the browser.
 */

import { getSupabase, hasSupabaseConfig } from "@/lib/supabase";
import type { GameType, LeaderboardEntry } from "@/types/games";

interface LeaderboardRow {
  github_username: string;
  avatar_url: string | null;
  score: number;
}

/**
 * Fetch top-N leaderboard entries for a game type.
 */
export async function getLeaderboard(
  gameType: GameType,
  limit = 5,
): Promise<LeaderboardEntry[]> {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const { data, error } = await getSupabase()
    .from("game_leaderboard_entries")
    .select("github_username, avatar_url, score")
    .eq("game_type", gameType)
    .order("score", { ascending: false })
    .order("achieved_at", { ascending: true })
    .order("github_username", { ascending: true })
    .limit(limit)
    .returns<LeaderboardRow[]>();

  if (error) {
    throw new Error(error.message);
  }

  return (data ?? []).map((entry, index) => ({
    rank: index + 1,
    githubUsername: entry.github_username,
    avatarUrl: entry.avatar_url ?? undefined,
    score: entry.score,
  }));
}
