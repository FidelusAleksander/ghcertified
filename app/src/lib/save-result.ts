/**
 * Client-side game result persistence.
 *
 * Inserts an eligible game result into Supabase directly from the browser.
 * RLS ensures only the authenticated user's own results are accepted.
 */

import type { ChallengeResult, ChallengeType } from "@/types/challenges";
import { getSupabase, hasSupabaseConfig } from "@/lib/supabase";
import {
  getMinimumCorrectToSave,
  isResultEligibleToSave,
} from "@/lib/challenge-result-save-policy";

export type SaveResultStatus =
  | "saved"
  | "ineligible"
  | "requires-sign-in"
  | "unavailable"
  | "failed";

export interface SaveResultResponse {
  success: boolean;
  status: SaveResultStatus;
  minimumCorrectToSave: number;
  error?: string;
}

export async function saveChallengeResult(
  gameType: ChallengeType,
  result: ChallengeResult,
): Promise<SaveResultResponse> {
  const minimumCorrectToSave = getMinimumCorrectToSave(gameType);

  if (!isResultEligibleToSave(gameType, result)) {
    return {
      success: false,
      status: "ineligible",
      minimumCorrectToSave,
    };
  }

  if (!hasSupabaseConfig()) {
    return {
      success: false,
      status: "unavailable",
      minimumCorrectToSave,
      error: "Saving is unavailable until Supabase is configured.",
    };
  }

  const supabase = getSupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return {
      success: false,
      status: "requires-sign-in",
      minimumCorrectToSave,
      error: "Not authenticated",
    };
  }

  const { error } = await supabase.from("challenge_results").insert({
    user_id: user.id,
    challenge: gameType,
    correct: result.correct,
    wrong: result.wrong,
    score: result.correct,
  });

  if (error) {
    return {
      success: false,
      status: "failed",
      minimumCorrectToSave,
      error: error.message,
    };
  }

  return {
    success: true,
    status: "saved",
    minimumCorrectToSave,
  };
}
