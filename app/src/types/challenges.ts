/**
 * Shared types for challenge modes.
 *
 * Domain types consumed by challenge components and route pages.
 * Kept separate from quiz types since challenge modes have different semantics.
 */

export interface ChallengeResult {
  correct: number;
  wrong: number;
}

/** Single row in a challenge leaderboard. */
export interface LeaderboardEntry {
  rank: number;
  githubUsername: string;
  avatarUrl?: string;
  score: number;
  achievedAt?: string;
}

/** Identifies a challenge type for leaderboard queries. */
export type ChallengeType = "gauntlet" | "time-trial";
