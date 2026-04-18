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

/** Cursor for keyset pagination — tracks the last row's sort key. */
export interface LeaderboardCursor {
  score: number;
  achievedAt: string;
  githubUsername: string;
}

/** Result of a paginated leaderboard query. */
export interface LeaderboardPage {
  entries: LeaderboardEntry[];
  totalCount: number;
}

/**
 * Fetch a page of leaderboard entries with total count.
 *
 * Uses cursor-based (keyset) pagination for consistent performance on deep
 * pages. The composite index on `(challenge, score DESC, achieved_at ASC,
 * github_username ASC)` covers this query shape.
 *
 * First page: pass `cursor = undefined`.
 * Next pages: pass the last entry's sort key as the cursor.
 */
export async function getLeaderboardPage(
  challengeType: ChallengeType,
  pageSize: number,
  cursor?: LeaderboardCursor,
): Promise<LeaderboardPage> {
  if (!hasSupabaseConfig()) {
    return { entries: [], totalCount: 0 };
  }

  const supabase = getSupabase();

  // Total count (small table, fast)
  const { count } = await supabase
    .from("challenge_leaderboard")
    .select("*", { count: "exact", head: true })
    .eq("challenge", challengeType);

  // Build query
  let query = supabase
    .from("challenge_leaderboard")
    .select("github_username, avatar_url, score, achieved_at")
    .eq("challenge", challengeType)
    .order("score", { ascending: false })
    .order("achieved_at", { ascending: true })
    .order("github_username", { ascending: true })
    .limit(pageSize);

  // Cursor filter: skip rows at or before the cursor position.
  // PostgREST doesn't support tuple comparison, so we use the logical equivalent:
  //   score < cursor.score
  //   OR (score = cursor.score AND achieved_at > cursor.achievedAt)
  //   OR (score = cursor.score AND achieved_at = cursor.achievedAt AND github_username > cursor.githubUsername)
  if (cursor) {
    query = query.or(
      `score.lt.${cursor.score},` +
      `and(score.eq.${cursor.score},achieved_at.gt.${cursor.achievedAt}),` +
      `and(score.eq.${cursor.score},achieved_at.eq.${cursor.achievedAt},github_username.gt.${cursor.githubUsername})`
    );
  }

  const { data, error } = await query.returns<LeaderboardRow[]>();

  if (error) {
    throw new Error(error.message);
  }

  // Rank is not directly known with cursor pagination — caller must track offset.
  const entries = (data ?? []).map((entry, index) => ({
    rank: index + 1, // Placeholder — caller adjusts based on accumulated entries
    githubUsername: entry.github_username,
    avatarUrl: entry.avatar_url ?? undefined,
    score: entry.score,
    achievedAt: entry.achieved_at,
  }));

  return { entries, totalCount: count ?? 0 };
}
