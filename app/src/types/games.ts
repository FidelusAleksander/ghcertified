/**
 * Shared types for gamified learning modes.
 *
 * Domain types consumed by game components and route pages.
 * Kept separate from quiz types since game modes have different semantics.
 */

export interface GameResult {
  correct: number;
  wrong: number;
  unanswered: number;
  totalQuestions: number;
}

/** Single row in a game leaderboard. */
export interface LeaderboardEntry {
  rank: number;
  githubUsername: string;
  avatarUrl?: string;
  score: number;
}

/** Identifies a game type for leaderboard queries. */
export type GameType = "gauntlet" | "time-trial";
