/**
 * Client-side game result persistence.
 *
 * Inserts a game result into Supabase directly from the browser.
 * RLS ensures only the authenticated user's own results are accepted.
 */

import type { GameResult, GameType } from "@/types/games";
import { getSupabase, hasSupabaseConfig } from "@/lib/supabase";

interface SaveResultResponse {
  success: boolean;
  error?: string;
}

export async function saveGameResult(
  gameType: GameType,
  result: GameResult,
): Promise<SaveResultResponse> {
  if (!hasSupabaseConfig()) {
    return {
      success: false,
      error: "Saving is unavailable until Supabase is configured.",
    };
  }

  const supabase = getSupabase();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return { success: false, error: "Not authenticated" };
  }

  const { error } = await supabase.from("game_results").insert({
    user_id: user.id,
    game_type: gameType,
    correct: result.correct,
    wrong: result.wrong,
    unanswered: result.unanswered,
    total_questions: result.totalQuestions,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  return { success: true };
}
