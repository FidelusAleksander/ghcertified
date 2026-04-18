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
  achieved_at: string;
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
    .select("github_username, avatar_url, score, achieved_at")
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
    achievedAt: entry.achieved_at,
  }));
}

/** Result of a paginated leaderboard query. */
export interface LeaderboardPage {
  entries: LeaderboardEntry[];
  totalCount: number;
}

/**
 * Fetch a page of leaderboard entries with total count.
 *
 * Uses offset-based pagination via Supabase `.range(from, to)`.
 * The existing composite index on `(game_type, score DESC, achieved_at ASC,
 * github_username ASC)` covers this query shape efficiently.
 */
export async function getLeaderboardPage(
  gameType: GameType,
  from: number,
  to: number,
): Promise<LeaderboardPage> {
  if (!hasSupabaseConfig()) {
    return { entries: [], totalCount: 0 };
  }

  const { data, error, count } = await getSupabase()
    .from("game_leaderboard_entries")
    .select("github_username, avatar_url, score, achieved_at", { count: "exact" })
    .eq("game_type", gameType)
    .order("score", { ascending: false })
    .order("achieved_at", { ascending: true })
    .order("github_username", { ascending: true })
    .range(from, to)
    .returns<LeaderboardRow[]>();

  if (error) {
    throw new Error(error.message);
  }

  const entries = (data ?? []).map((entry, index) => ({
    rank: from + index + 1,
    githubUsername: entry.github_username,
    avatarUrl: entry.avatar_url ?? undefined,
    score: entry.score,
    achievedAt: entry.achieved_at,
  }));

  return { entries, totalCount: count ?? 0 };
}
