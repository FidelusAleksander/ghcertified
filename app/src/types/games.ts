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
