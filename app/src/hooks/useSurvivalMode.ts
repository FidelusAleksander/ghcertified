"use client";

/**
 * useSurvivalMode — game engine hook for Survival Mode.
 *
 * Manages shuffled question queue, lives, scoring, run state,
 * per-question countdown timer, and pause-between-questions.
 * Questions come from all certifications combined.
 * Shuffles in useEffect to avoid hydration mismatch.
 */

import { useState, useCallback, useEffect, useRef } from "react";
import type { Question } from "@/types/quiz";
import type { GameResult } from "@/types/games";
import { shuffle } from "@/lib/utils";

type Phase = "loading" | "playing" | "feedback" | "paused" | "game_over" | "completed";

interface SurvivalState {
  questions: Question[];
  currentIndex: number;
  lives: number;
  correct: number;
  wrong: number;
  phase: Phase;
  lastAnswerCorrect: boolean | null;
}

const INITIAL_STATE: SurvivalState = {
  questions: [],
  currentIndex: 0,
  lives: 1,
  correct: 0,
  wrong: 0,
  phase: "loading",
  lastAnswerCorrect: null,
};

const CORRECT_ADVANCE_DELAY = 1200;
const DEFAULT_TIME_LIMIT = 60;

export interface SurvivalModeOptions {
  timeLimitSeconds?: number;
}

export function useSurvivalMode(allQuestions: Question[], options: SurvivalModeOptions = {}) {
  const timeLimitSeconds = options.timeLimitSeconds ?? DEFAULT_TIME_LIMIT;

  const [state, setState] = useState<SurvivalState>(INITIAL_STATE);
  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(timeLimitSeconds);
  const [pauseRequested, setPauseRequested] = useState(false);

  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRemainingRef = useRef(timeLimitSeconds);

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

  const startCountdown = useCallback(() => {
    stopCountdown();
    timeRemainingRef.current = timeLimitSeconds;
    setTimeRemaining(timeLimitSeconds);

    countdownRef.current = setInterval(() => {
      timeRemainingRef.current -= 1;
      setTimeRemaining(timeRemainingRef.current);

      if (timeRemainingRef.current <= 0) {
        stopCountdown();
        // Time's up — game over
        setState((prev) => ({
          ...prev,
          wrong: prev.wrong + 1,
          lives: 0,
          lastAnswerCorrect: false,
          phase: "game_over",
        }));
      }
    }, 1000);
  }, [timeLimitSeconds, stopCountdown]);

  // Shuffle on mount and on restart
  const initRun = useCallback(() => {
    clearAdvanceTimer();
    stopCountdown();
    setPauseRequested(false);
    const shuffled = shuffle(allQuestions).map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
    setState({
      ...INITIAL_STATE,
      questions: shuffled,
      phase: "playing",
    });
    setSelectedAnswers(new Set());
    // Countdown starts via the phase effect below
  }, [allQuestions, clearAdvanceTimer, stopCountdown]);

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
      // Wrong answer — game over
      setState((prev) => ({
        ...prev,
        wrong: 1,
        lives: 0,
        lastAnswerCorrect: false,
        phase: "game_over",
      }));
    }
  }, [state.phase, currentQuestion, selectedAnswers, isAnswerComplete, clearAdvanceTimer, stopCountdown, pauseRequested, advanceToNext]);

  // Pause toggle — takes effect between questions
  const togglePause = useCallback(() => {
    if (state.phase === "paused") {
      // Unpause — advance to next question
      setPauseRequested(false);
      advanceToNext();
    } else if (state.phase === "playing" || state.phase === "feedback") {
      setPauseRequested((prev) => !prev);
    }
  }, [state.phase, advanceToNext]);

  const result: GameResult | null =
    state.phase === "game_over" || state.phase === "completed"
      ? {
          correct: state.correct,
          wrong: state.wrong,
          unanswered: state.questions.length - state.correct - state.wrong,
          totalQuestions: state.questions.length,
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
  };
}
