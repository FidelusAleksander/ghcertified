import type { ChallengeResult, ChallengeType } from "@/types/challenges";

export const GAME_RESULT_MINIMUM_CORRECT_TO_SAVE = {
  gauntlet: 5,
  "time-trial": 5,
} satisfies Record<ChallengeType, number>;

export function getMinimumCorrectToSave(gameType: ChallengeType): number {
  return GAME_RESULT_MINIMUM_CORRECT_TO_SAVE[gameType];
}

export function isResultEligibleToSave(
  gameType: ChallengeType,
  result: ChallengeResult,
): boolean {
  return result.correct >= getMinimumCorrectToSave(gameType);
}
