"use client";

/**
 * useTimeTrialMode — game engine hook for Time Trial.
 *
 * A single global countdown starts at INITIAL_TIME seconds.
 * Correct answers add CORRECT_BONUS seconds, wrong answers subtract
 * WRONG_PENALTY seconds. Timer reaches 0 → game over.
 * Score = total correct answers.
 *
 * Timer pauses during feedback and pause phases, resumes on next question.
 * Queued pause between questions (same UX as Survival).
 */

import { useState, useCallback, useEffect, useRef } from "react";
import type { Question } from "@/types/quiz";
import type { ChallengeResult } from "@/types/challenges";
import { shuffle } from "@/lib/utils";

type Phase = "loading" | "playing" | "feedback" | "wrong_review" | "paused" | "game_over";

interface TimeTrialState {
  questions: Question[];
  currentIndex: number;
  correct: number;
  wrong: number;
  phase: Phase;
  lastAnswerCorrect: boolean | null;
}

const FEEDBACK_ADVANCE_DELAY = 1200;

/** Starting time in seconds. */
export const INITIAL_TIME = 60;
/** Seconds added for a correct answer. */
export const CORRECT_BONUS = 15;
/** Seconds subtracted for a wrong answer. */
export const WRONG_PENALTY = 10;

export function useTimeTrialMode(allQuestions: Question[]) {
  const makeInitialState = useCallback((): TimeTrialState => ({
    questions: [],
    currentIndex: 0,
    correct: 0,
    wrong: 0,
    phase: "loading",
    lastAnswerCorrect: null,
  }), []);

  const [state, setState] = useState<TimeTrialState>(makeInitialState);
  const [selectedAnswers, setSelectedAnswers] = useState<Set<string>>(new Set());
  const [timeRemaining, setTimeRemaining] = useState(INITIAL_TIME);
  const [pauseRequested, setPauseRequested] = useState(false);
  const [failedQuestion, setFailedQuestion] = useState<Question | null>(null);
  const [failedAnswers, setFailedAnswers] = useState<Set<string>>(new Set());
  const [totalGained, setTotalGained] = useState(0);
  const [totalLost, setTotalLost] = useState(0);
  const [lastDelta, setLastDelta] = useState<number | null>(null);
  const [deltaKey, setDeltaKey] = useState(0);

  const advanceTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const countdownRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeRemainingRef = useRef(INITIAL_TIME);
  const stateRef = useRef(state);
  useEffect(() => { stateRef.current = state; });

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

  // Start/resume the global countdown from current timeRemaining
  const startCountdown = useCallback(() => {
    stopCountdown();
    countdownRef.current = setInterval(() => {
      timeRemainingRef.current -= 1;
      setTimeRemaining(timeRemainingRef.current);

      if (timeRemainingRef.current <= 0) {
        stopCountdown();
        setState((prev) => ({ ...prev, phase: "game_over" }));
      }
    }, 1000);
  }, [stopCountdown]);

  // Advance to next question (or complete if pool exhausted)
  const advanceToNext = useCallback(() => {
    setFailedQuestion(null);
    setFailedAnswers(new Set());
    setState((prev) => {
      const nextIndex = prev.currentIndex + 1;
      if (nextIndex >= prev.questions.length) {
        return { ...prev, phase: "game_over" };
      }
      return { ...prev, currentIndex: nextIndex, phase: "playing", lastAnswerCorrect: null };
    });
    setSelectedAnswers(new Set());
  }, []);

  // Adjust timer by delta (positive = add, negative = subtract)
  const adjustTime = useCallback((delta: number) => {
    const newTime = Math.max(0, timeRemainingRef.current + delta);
    timeRemainingRef.current = newTime;
    setTimeRemaining(newTime);
    if (newTime <= 0) {
      stopCountdown();
      setState((prev) => ({ ...prev, phase: "game_over" }));
    }
  }, [stopCountdown]);

  // Initialize / restart
  const initRun = useCallback(() => {
    clearAdvanceTimer();
    stopCountdown();
    setPauseRequested(false);
    setFailedQuestion(null);
    setFailedAnswers(new Set());
    setTotalGained(0);
    setTotalLost(0);
    setLastDelta(null);
    setDeltaKey(0);
    timeRemainingRef.current = INITIAL_TIME;
    setTimeRemaining(INITIAL_TIME);
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

  // Initialize on mount
  const initialized = useRef(false);
  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true;
      // eslint-disable-next-line react-hooks/set-state-in-effect -- shuffle must run client-side only to avoid hydration mismatch
      initRun();
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  // Start/stop countdown based on phase (timer only ticks during "playing")
  useEffect(() => {
    if (state.phase === "playing") {
      startCountdown();
    } else {
      stopCountdown();
    }
    return stopCountdown;
  }, [state.phase, state.currentIndex, startCountdown, stopCountdown]);

  // Cleanup on unmount
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

  const confirmAnswer = useCallback(() => {
    if (state.phase !== "playing" || !currentQuestion || !isAnswerComplete()) return;

    // Pause timer during feedback
    stopCountdown();

    const correctIds = new Set(
      currentQuestion.answers.filter((a) => a.isCorrect).map((a) => a.id),
    );
    const isCorrect =
      selectedAnswers.size === correctIds.size &&
      [...selectedAnswers].every((id) => correctIds.has(id));

    if (isCorrect) {
      adjustTime(CORRECT_BONUS);
      setTotalGained((prev) => prev + CORRECT_BONUS);
      setLastDelta(CORRECT_BONUS);
      setDeltaKey((prev) => prev + 1);
      setState((prev) => ({
        ...prev,
        correct: prev.correct + 1,
        lastAnswerCorrect: true,
        phase: "feedback",
      }));

      clearAdvanceTimer();
      advanceTimerRef.current = setTimeout(() => {
        if (pauseRequested) {
          setState((prev) => ({ ...prev, phase: "paused", lastAnswerCorrect: null }));
        } else {
          advanceToNext();
        }
      }, FEEDBACK_ADVANCE_DELAY);
    } else {
      // Wrong answer — subtract penalty, show review
      adjustTime(-WRONG_PENALTY);
      setTotalLost((prev) => prev + WRONG_PENALTY);
      setLastDelta(-WRONG_PENALTY);
      setDeltaKey((prev) => prev + 1);
      setFailedQuestion(currentQuestion);
      setFailedAnswers(new Set(selectedAnswers));
      setState((prev) => ({
        ...prev,
        wrong: prev.wrong + 1,
        lastAnswerCorrect: false,
        phase: "wrong_review",
      }));
    }
  }, [state.phase, currentQuestion, selectedAnswers, isAnswerComplete, stopCountdown, clearAdvanceTimer, adjustTime, pauseRequested, advanceToNext]);

  // Continue after wrong answer review
  const continueAfterWrong = useCallback(() => {
    if (state.phase !== "wrong_review") return;
    // If time already hit 0 from the penalty, go to game over
    if (timeRemainingRef.current <= 0) {
      setState((prev) => ({ ...prev, phase: "game_over" }));
      return;
    }
    if (pauseRequested) {
      setState((prev) => ({ ...prev, phase: "paused", lastAnswerCorrect: null }));
    } else {
      advanceToNext();
    }
  }, [state.phase, pauseRequested, advanceToNext]);

  // Pause toggle
  const togglePause = useCallback(() => {
    if (state.phase === "paused") {
      setPauseRequested(false);
      advanceToNext();
    } else if (state.phase === "playing" || state.phase === "feedback") {
      setPauseRequested((prev) => !prev);
    }
  }, [state.phase, advanceToNext]);

  const result: ChallengeResult | null =
    state.phase === "game_over"
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
    pauseRequested,
    togglePause,
    failedQuestion,
    failedAnswers,
    continueAfterWrong,
    totalGained,
    totalLost,
    lastDelta,
    deltaKey,
  };
}
