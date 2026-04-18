"use client";

/**
 * useGauntletMode — game engine hook for Gauntlet mode.
 *
 * Manages shuffled question queue, configurable lives, scoring,
 * per-question countdown timer, and pause-between-questions.
 * Questions come from all certifications combined.
 * Shuffles in useEffect to avoid hydration mismatch.
 */

import { useState, useCallback, useEffect, useRef } from "react";
import type { Question } from "@/types/quiz";
import type { ChallengeResult } from "@/types/challenges";
import { shuffle } from "@/lib/utils";

type Phase = "loading" | "playing" | "feedback" | "wrong_review" | "paused" | "game_over_review" | "game_over" | "completed";

interface GauntletState {
  questions: Question[];
  currentIndex: number;
  lives: number;
  initialLives: number;
  correct: number;
  wrong: number;
  phase: Phase;
  lastAnswerCorrect: boolean | null;
}

const CORRECT_ADVANCE_DELAY = 1200;
/** Default time limit per question (seconds). Exported for reuse in UI. */
export const DEFAULT_TIME_LIMIT = 60;
/** Default number of lives. Exported for reuse in UI. */
export const DEFAULT_LIVES = 3;

export interface GauntletModeOptions {
  timeLimitSeconds?: number;
  lives?: number;
}

export function useGauntletMode(allQuestions: Question[], options: GauntletModeOptions = {}) {
  const timeLimitSeconds = options.timeLimitSeconds ?? DEFAULT_TIME_LIMIT;
  const initialLives = options.lives ?? DEFAULT_LIVES;

  const makeInitialState = useCallback((): GauntletState => ({
    questions: [],
    currentIndex: 0,
    lives: initialLives,
    initialLives,
    correct: 0,
    wrong: 0,
    phase: "loading",
    lastAnswerCorrect: null,
  }), [initialLives]);

  const [state, setState] = useState<GauntletState>(makeInitialState);
  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(timeLimitSeconds);
  const [pauseRequested, setPauseRequested] = useState(false);
  const [failedQuestion, setFailedQuestion] = useState<Question | null>(null);
  const [failedAnswers, setFailedAnswers] = useState<Set<string>>(new Set());
  const [failedByTimeout, setFailedByTimeout] = useState(false);

  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRemainingRef = useRef(timeLimitSeconds);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  });

  const clearAdvanceTimer = useCallback(() => {
    if (advanceTimerRef.current !== null) {
      clearTimeout(advanceTimerRef.current);
      advanceTimerRef.current = null;
    }
  }, []);

  const stopCountdown = useCallback(() => {
    if (countdownRef.current !== null) {
      clearInterval(countdownRef.current);
      countdownRef.current = null;
    }
  }, []);

  // Handle wrong answer — routes to wrong_review (lives remaining) or game_over_review (last life)
  const handleWrong = useCallback((question: Question, answers: Set<string>, byTimeout: boolean) => {
    setFailedQuestion(question);
    setFailedAnswers(new Set(answers));
    setFailedByTimeout(byTimeout);
    setState((prev) => {
      const newLives = prev.lives - 1;
      const isLastLife = newLives <= 0;
      return {
        ...prev,
        wrong: prev.wrong + 1,
        lives: newLives,
        lastAnswerCorrect: false,
        phase: isLastLife ? "game_over_review" : "wrong_review",
      };
    });
  }, []);

  const startCountdown = useCallback(() => {
    stopCountdown();
    timeRemainingRef.current = timeLimitSeconds;
    setTimeRemaining(timeLimitSeconds);

    countdownRef.current = setInterval(() => {
      timeRemainingRef.current -= 1;
      setTimeRemaining(timeRemainingRef.current);

      if (timeRemainingRef.current <= 0) {
        stopCountdown();
        const prev = stateRef.current;
        const q = prev.questions[prev.currentIndex] ?? null;
        if (q) {
          handleWrong(q, new Set(), true);
        }
      }
    }, 1000);
  }, [timeLimitSeconds, stopCountdown, handleWrong]);

  // Shuffle on mount and on restart
  const initRun = useCallback(() => {
    clearAdvanceTimer();
    stopCountdown();
    setPauseRequested(false);
    setFailedQuestion(null);
    setFailedAnswers(new Set());
    setFailedByTimeout(false);
    const shuffled = shuffle(allQuestions).map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
    setState({
      ...makeInitialState(),
      questions: shuffled,
      phase: "playing",
    });
    setSelectedAnswers(new Set());
  }, [allQuestions, clearAdvanceTimer, stopCountdown, makeInitialState]);

  // Initialize on mount — defers shuffle to client to avoid hydration mismatch
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- shuffle must run client-side only to avoid hydration mismatch
      initRun();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Start/stop countdown based on phase
  useEffect(() => {
    if (state.phase === "playing") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- countdown interval must update state from effect
      startCountdown();
    } else {
      stopCountdown();
    }
    return stopCountdown;
  }, [state.phase, state.currentIndex, startCountdown, stopCountdown]);

  // Cleanup timers on unmount
  useEffect(() => {
    return () => {
      clearAdvanceTimer();
      stopCountdown();
    };
  }, [clearAdvanceTimer, stopCountdown]);

  const currentQuestion = state.questions[state.currentIndex] ?? null;

  const toggleAnswer = useCallback(
    (answerId: string) => {
      if (state.phase !== "playing" || !currentQuestion) return;

      setSelectedAnswers((prev) => {
        const next = new Set(prev);
        if (currentQuestion.isMultiSelect) {
          const correctCount = currentQuestion.answers.filter((a) => a.isCorrect).length;
          if (next.has(answerId)) {
            next.delete(answerId);
          } else if (next.size < correctCount) {
            next.add(answerId);
          }
        } else {
          next.clear();
          next.add(answerId);
        }
        return next;
      });
    },
    [state.phase, currentQuestion],
  );

  const isAnswerComplete = useCallback(() => {
    if (!currentQuestion) return false;
    if (currentQuestion.isMultiSelect) {
      const correctCount = currentQuestion.answers.filter((a) => a.isCorrect).length;
      return selectedAnswers.size === correctCount;
    }
    return selectedAnswers.size === 1;
  }, [currentQuestion, selectedAnswers]);

  // Advance to next question (or pause/complete)
  const advanceToNext = useCallback(() => {
    setFailedQuestion(null);
    setFailedAnswers(new Set());
    setFailedByTimeout(false);
    setState((prev) => {
      const nextIndex = prev.currentIndex + 1;
      if (nextIndex >= prev.questions.length) {
        return { ...prev, phase: "completed" };
      }
      return { ...prev, currentIndex: nextIndex, phase: "playing", lastAnswerCorrect: null };
    });
    setSelectedAnswers(new Set());
  }, []);

  const confirmAnswer = useCallback(() => {
    if (state.phase !== "playing" || !currentQuestion || !isAnswerComplete()) return;

    stopCountdown();

    const correctIds = new Set(
      currentQuestion.answers.filter((a) => a.isCorrect).map((a) => a.id),
    );
    const isCorrect =
      selectedAnswers.size === correctIds.size &&
      [...selectedAnswers].every((id) => correctIds.has(id));

    if (isCorrect) {
      setState((prev) => ({
        ...prev,
        correct: prev.correct + 1,
        lastAnswerCorrect: true,
        phase: "feedback",
      }));

      // Auto-advance after delay — check pause
      clearAdvanceTimer();
      advanceTimerRef.current = setTimeout(() => {
        if (pauseRequested) {
          setState((prev) => ({ ...prev, phase: "paused", lastAnswerCorrect: null }));
        } else {
          advanceToNext();
        }
      }, CORRECT_ADVANCE_DELAY);
    } else {
      handleWrong(currentQuestion, selectedAnswers, false);
    }
  }, [state.phase, currentQuestion, selectedAnswers, isAnswerComplete, clearAdvanceTimer, stopCountdown, pauseRequested, advanceToNext, handleWrong]);

  // Continue after wrong answer (lives remaining) — advance to next question
  const continueAfterWrong = useCallback(() => {
    if (state.phase !== "wrong_review") return;
    if (pauseRequested) {
      setState((prev) => ({ ...prev, phase: "paused", lastAnswerCorrect: null }));
    } else {
      advanceToNext();
    }
  }, [state.phase, pauseRequested, advanceToNext]);

  // Pause toggle — takes effect between questions
  const togglePause = useCallback(() => {
    if (state.phase === "paused") {
      setPauseRequested(false);
      advanceToNext();
    } else if (state.phase === "playing" || state.phase === "feedback") {
      setPauseRequested((prev) => !prev);
    }
  }, [state.phase, advanceToNext]);

  // Transition from final review to results
  const proceedToResults = useCallback(() => {
    if (state.phase === "game_over_review") {
      setState((prev) => ({ ...prev, phase: "game_over" }));
    }
  }, [state.phase]);

  const result: ChallengeResult | null =
    state.phase === "game_over" || state.phase === "completed"
      ? {
          correct: state.correct,
          wrong: state.wrong,
        }
      : null;

  return {
    state,
    currentQuestion,
    selectedAnswers,
    toggleAnswer,
    confirmAnswer,
    isAnswerComplete,
    restart: initRun,
    result,
    timeRemaining,
    timeLimitSeconds,
    pauseRequested,
    togglePause,
    failedQuestion,
    failedAnswers,
    failedByTimeout,
    proceedToResults,
    continueAfterWrong,
  };
}
