import type { GameResult, GameType } from "@/types/games";

export const GAME_RESULT_MINIMUM_CORRECT_TO_SAVE = {
  gauntlet: 5,
  "time-trial": 5,
} satisfies Record<GameType, number>;

export function getMinimumCorrectToSave(gameType: GameType): number {
  return GAME_RESULT_MINIMUM_CORRECT_TO_SAVE[gameType];
}

export function isResultEligibleToSave(
  gameType: GameType,
  result: GameResult,
): boolean {
  return result.correct >= getMinimumCorrectToSave(gameType);
}
