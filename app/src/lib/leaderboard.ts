/**
 * Leaderboard data layer.
 *
 * Reads public best-score rows from Supabase. This module is client-safe: the
 * app is statically exported, so leaderboard data must be fetched after
 * hydration in the browser.
 */

import { getSupabase, hasSupabaseConfig } from "@/lib/supabase";
import type { ChallengeType, LeaderboardEntry } from "@/types/challenges";

interface LeaderboardRow {
  github_username: string;
  avatar_url: string | null;
  score: number;
  achieved_at: string;
}

/**
 * Fetch top-N leaderboard entries for a challenge type.
 */
export async function getLeaderboard(
  challengeType: ChallengeType,
  limit = 5,
): Promise<LeaderboardEntry[]> {
  if (!hasSupabaseConfig()) {
    return [];
  }

  const { data, error } = await getSupabase()
    .from("challenge_leaderboard")
    .select("github_username, avatar_url, score, achieved_at")
    .eq("challenge", challengeType)
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
 * Fetch a page of leaderboard entries using offset-based pagination.
 *
 * Uses Supabase `.range()` for simple page navigation. The leaderboard table
 * is small, so offset pagination performs well.
 *
 * @param startRank – 1-based rank to start from (e.g. 4 to skip podium top 3)
 * @param pageSize  – number of entries per page
 */
export async function getLeaderboardPageByOffset(
  challengeType: ChallengeType,
  startRank: number,
  pageSize: number,
): Promise<LeaderboardPage> {
  if (!hasSupabaseConfig()) {
    return { entries: [], totalCount: 0 };
  }

  const supabase = getSupabase();
  const offset = startRank - 1; // convert 1-based rank to 0-based offset

  const { count } = await supabase
    .from("challenge_leaderboard")
    .select("*", { count: "exact", head: true })
    .eq("challenge", challengeType);

  const { data, error } = await supabase
    .from("challenge_leaderboard")
    .select("github_username, avatar_url, score, achieved_at")
    .eq("challenge", challengeType)
    .order("score", { ascending: false })
    .order("achieved_at", { ascending: true })
    .order("github_username", { ascending: true })
    .range(offset, offset + pageSize - 1)
    .returns<LeaderboardRow[]>();

  if (error) {
    throw new Error(error.message);
  }

  const entries = (data ?? []).map((entry, index) => ({
    rank: offset + index + 1,
    githubUsername: entry.github_username,
    avatarUrl: entry.avatar_url ?? undefined,
    score: entry.score,
    achievedAt: entry.achieved_at,
  }));

  return { entries, totalCount: count ?? 0 };
}
