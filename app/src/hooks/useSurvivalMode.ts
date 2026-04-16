"use client";

/**
 * useSurvivalMode — game engine hook for Survival Mode.
 *
 * Rules:
 * - Start with 1 life
 * - Correct answer → increment score (caller advances via nextQuestion)
 * - Wrong answer → lose life, run ends immediately
 * - All questions answered → run completed
 * - Remaining unseen questions count as unanswered
 *
 * Shuffles questions in useEffect (client-only) to avoid hydration mismatch.
 */

import { useState, useCallback, useEffect } from "react";
import { shuffle } from "@/lib/utils";
import type { Question } from "@/types/quiz";

export interface GameResult {
  correct: number;
  wrong: number;
  timedOut: number;
  unanswered: number;
  total: number;
  scorePercent: number;
}

export type RunState = "playing" | "game_over" | "completed";

export interface UseSurvivalModeReturn {
  /** Current run state */
  state: RunState;
  /** Current question being shown (null while loading) */
  currentQuestion: Question | null;
  /** 0-based index of current question */
  currentIndex: number;
  /** Remaining lives (starts at 1) */
  lives: number;
  /** Running correct-answer count */
  score: number;
  /** Total questions in the pool */
  totalQuestions: number;
  /** Final result (non-null when state !== 'playing') */
  result: GameResult | null;
  /** Submit selected answers — returns true if correct. Does NOT advance. */
  submitAnswer: (answerIds: Set<string>) => boolean;
  /** Called when the per-question timer expires — ends the run. */
  timeUp: () => void;
  /** Advance to the next question (call after showing feedback) */
  nextQuestion: () => void;
  /** Restart with a fresh shuffle */
  restart: () => void;
  /** True until first shuffle is ready */
  isLoading: boolean;
}

export function useSurvivalMode(questions: Question[]): UseSurvivalModeReturn {
  const [pool, setPool] = useState<Question[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [lives, setLives] = useState(1);
  const [score, setScore] = useState(0);
  const [wrongCount, setWrongCount] = useState(0);
  const [timedOutCount, setTimedOutCount] = useState(0);
  const [state, setState] = useState<RunState>("playing");

  // Shuffle on mount (client-only for hydration safety)
  useEffect(() => {
    const shuffled = questions.map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
    setPool(shuffle(shuffled));
  }, [questions]);

  const restart = useCallback(() => {
    const shuffled = questions.map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
    setPool(shuffle(shuffled));
    setCurrentIndex(0);
    setLives(1);
    setScore(0);
    setWrongCount(0);
    setTimedOutCount(0);
    setState("playing");
  }, [questions]);

  const submitAnswer = useCallback(
    (answerIds: Set<string>): boolean => {
      if (state !== "playing" || pool.length === 0) return false;

      const question = pool[currentIndex];
      if (!question) return false;

      const correctIds = new Set(
        question.answers.filter((a) => a.isCorrect).map((a) => a.id),
      );

      const isCorrect =
        answerIds.size === correctIds.size &&
        [...answerIds].every((id) => correctIds.has(id));

      if (isCorrect) {
        const newScore = score + 1;
        setScore(newScore);

        // If this was the last question, run is completed
        if (currentIndex + 1 >= pool.length) {
          setState("completed");
        }
        return true;
      } else {
        setLives(0);
        setWrongCount(1);
        setState("game_over");
        return false;
      }
    },
    [state, pool, currentIndex, score],
  );

  const nextQuestion = useCallback(() => {
    if (state !== "playing") return;
    if (currentIndex + 1 < pool.length) {
      setCurrentIndex((i) => i + 1);
    }
  }, [state, currentIndex, pool.length]);

  const timeUp = useCallback(() => {
    if (state !== "playing") return;
    setLives(0);
    setTimedOutCount(1);
    setState("game_over");
  }, [state]);

  const isLoading = pool.length === 0;
  const currentQuestion = pool[currentIndex] ?? null;

  const result: GameResult | null =
    state === "playing"
      ? null
      : {
          correct: score,
          wrong: wrongCount,
          timedOut: timedOutCount,
          unanswered: pool.length - score - wrongCount - timedOutCount,
          total: pool.length,
          scorePercent:
            pool.length > 0
              ? Math.round((score / pool.length) * 100)
              : 0,
        };

  return {
    state,
    currentQuestion,
    currentIndex,
    lives,
    score,
    totalQuestions: pool.length,
    result,
    submitAnswer,
    timeUp,
    nextQuestion,
    restart,
    isLoading,
  };
}
