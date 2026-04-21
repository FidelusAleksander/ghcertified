// @vitest-environment jsdom
import { renderHook, act } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import {
  useTimeTrialMode,
  INITIAL_TIME,
  MAX_TIME,
  CORRECT_BONUS,
  CORRECT_BONUS_MULTI,
  WRONG_PENALTY,
} from "@/hooks/useTimeTrialMode";
import type { Question } from "@/types/quiz";

const makeQuestion = (id: string, correctId: string, wrongId: string): Question => ({
  id,
  cert: "foundations",
  question: `Question ${id}`,
  answers: [
    { id: correctId, text: "Correct", isCorrect: true },
    { id: wrongId, text: "Wrong", isCorrect: false },
  ],
  isMultiSelect: false,
});

const makeMultiSelectQuestion = (id: string): Question => ({
  id,
  cert: "foundations",
  question: `Multi ${id}`,
  answers: [
    { id: `${id}-c1`, text: "Correct 1", isCorrect: true },
    { id: `${id}-c2`, text: "Correct 2", isCorrect: true },
    { id: `${id}-w1`, text: "Wrong 1", isCorrect: false },
  ],
  isMultiSelect: true,
});

const questions = [
  makeQuestion("q1", "a1", "b1"),
  makeQuestion("q2", "a2", "b2"),
  makeQuestion("q3", "a3", "b3"),
  makeQuestion("q4", "a4", "b4"),
  makeQuestion("q5", "a5", "b5"),
];

function getCorrectId(hook: ReturnType<typeof useTimeTrialMode>) {
  return hook.currentQuestion!.answers.find((a) => a.isCorrect)!.id;
}

function getWrongId(hook: ReturnType<typeof useTimeTrialMode>) {
  return hook.currentQuestion!.answers.find((a) => !a.isCorrect)!.id;
}

describe("useTimeTrialMode", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("initializes with playing phase and correct defaults after mount", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {}); // flush mount effect

    expect(result.current.state.phase).toBe("playing");
    expect(result.current.timeRemaining).toBe(INITIAL_TIME);
    expect(result.current.state.correct).toBe(0);
    expect(result.current.state.wrong).toBe(0);
    expect(result.current.currentQuestion).not.toBeNull();
  });

  it("correct answer adds time bonus", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    const correctId = getCorrectId(result.current);

    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.state.phase).toBe("feedback");
    expect(result.current.state.correct).toBe(1);
    expect(result.current.timeRemaining).toBe(INITIAL_TIME + CORRECT_BONUS);
    expect(result.current.totalGained).toBe(CORRECT_BONUS);
    expect(result.current.lastDelta).toBe(CORRECT_BONUS);
  });

  it("correct multi-select answer adds higher time bonus", () => {
    const multiQuestions = [
      makeMultiSelectQuestion("mq1"),
      makeMultiSelectQuestion("mq2"),
      makeMultiSelectQuestion("mq3"),
    ];
    const { result } = renderHook(() => useTimeTrialMode(multiQuestions));
    act(() => {});

    // All questions are multi-select, so whichever comes first works
    const q = result.current.currentQuestion!;
    const correctIds = q.answers.filter((a) => a.isCorrect).map((a) => a.id);
    for (const id of correctIds) {
      act(() => { result.current.toggleAnswer(id); });
    }
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.state.phase).toBe("feedback");
    expect(result.current.state.correct).toBe(1);
    expect(result.current.timeRemaining).toBe(INITIAL_TIME + CORRECT_BONUS_MULTI);
    expect(result.current.totalGained).toBe(CORRECT_BONUS_MULTI);
    expect(result.current.lastDelta).toBe(CORRECT_BONUS_MULTI);
  });

  it("wrong answer subtracts time penalty", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    const wrongId = getWrongId(result.current);

    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.state.phase).toBe("wrong_review");
    expect(result.current.state.wrong).toBe(1);
    expect(result.current.timeRemaining).toBe(INITIAL_TIME - WRONG_PENALTY);
    expect(result.current.totalLost).toBe(WRONG_PENALTY);
    expect(result.current.lastDelta).toBe(-WRONG_PENALTY);
  });

  it("timer counts down each second", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    act(() => { vi.advanceTimersByTime(1000); });
    expect(result.current.timeRemaining).toBe(INITIAL_TIME - 1);

    act(() => { vi.advanceTimersByTime(2000); });
    expect(result.current.timeRemaining).toBe(INITIAL_TIME - 3);
  });

  it("timer reaching 0 triggers game over", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    act(() => { vi.advanceTimersByTime(INITIAL_TIME * 1000); });

    expect(result.current.state.phase).toBe("game_over");
    expect(result.current.result).not.toBeNull();
  });

  it("continueAfterWrong advances to next question", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    const wrongId = getWrongId(result.current);
    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.state.phase).toBe("wrong_review");

    const indexBefore = result.current.state.currentIndex;
    act(() => { result.current.continueAfterWrong(); });

    expect(result.current.state.phase).toBe("playing");
    expect(result.current.state.currentIndex).toBe(indexBefore + 1);
  });

  it("restart resets all state", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Play a bit: answer wrong then continue
    const wrongId = getWrongId(result.current);
    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });
    act(() => { result.current.continueAfterWrong(); });

    // Restart
    act(() => { result.current.restart(); });

    expect(result.current.state.phase).toBe("playing");
    expect(result.current.state.correct).toBe(0);
    expect(result.current.state.wrong).toBe(0);
    expect(result.current.state.currentIndex).toBe(0);
    expect(result.current.timeRemaining).toBe(INITIAL_TIME);
    expect(result.current.totalGained).toBe(0);
    expect(result.current.totalLost).toBe(0);
    expect(result.current.lastDelta).toBeNull();
  });

  it("timer stops during feedback phase", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    const correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.state.phase).toBe("feedback");
    const timeAtFeedback = result.current.timeRemaining;

    // Tick several seconds — timer should NOT change during feedback
    act(() => { vi.advanceTimersByTime(3000); });
    expect(result.current.timeRemaining).toBe(timeAtFeedback);
  });

  it("wrong penalty that drops time to 0 ends game on continue", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Drain time to just above penalty threshold
    const ticksNeeded = INITIAL_TIME - WRONG_PENALTY;
    act(() => { vi.advanceTimersByTime(ticksNeeded * 1000); });
    expect(result.current.timeRemaining).toBe(WRONG_PENALTY);

    // Wrong answer — penalty brings time to 0
    const wrongId = getWrongId(result.current);
    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.timeRemaining).toBe(0);
    expect(result.current.state.phase).toBe("wrong_review");

    // Continue should trigger game over since time is 0
    act(() => { result.current.continueAfterWrong(); });
    expect(result.current.state.phase).toBe("game_over");
    expect(result.current.result).not.toBeNull();
  });

  it("exhausting all questions triggers game over", () => {
    // Use only 2 questions
    const shortPool = questions.slice(0, 2);
    const { result } = renderHook(() => useTimeTrialMode(shortPool));
    act(() => {});

    // Answer question 1 correctly
    let correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    act(() => { vi.advanceTimersByTime(1800 + 50); }); // FEEDBACK_ADVANCE_DELAY

    // Answer question 2 correctly
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    act(() => { vi.advanceTimersByTime(1800 + 50); });

    expect(result.current.state.phase).toBe("game_over");
    expect(result.current.state.correct).toBe(2);
    expect(result.current.result).not.toBeNull();
  });

  it("pause after correct answer pauses instead of advancing", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Request pause during playing
    act(() => { result.current.togglePause(); });
    expect(result.current.pauseRequested).toBe(true);

    // Answer correctly — after feedback delay should pause
    const correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.state.phase).toBe("feedback");

    act(() => { vi.advanceTimersByTime(1800 + 50); });
    expect(result.current.state.phase).toBe("paused");

    // Resume
    act(() => { result.current.togglePause(); });
    expect(result.current.state.phase).toBe("playing");
    expect(result.current.pauseRequested).toBe(false);
  });

  it("timer stops during wrong_review phase", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    const wrongId = getWrongId(result.current);
    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.state.phase).toBe("wrong_review");
    const timeAtReview = result.current.timeRemaining;

    // Tick several seconds — timer should NOT change during wrong_review
    act(() => { vi.advanceTimersByTime(5000); });
    expect(result.current.timeRemaining).toBe(timeAtReview);
  });

  it("pause queues between questions", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Request pause
    act(() => { result.current.togglePause(); });
    expect(result.current.pauseRequested).toBe(true);

    // Answer wrong — continue should pause instead of advance
    const wrongId = getWrongId(result.current);
    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });
    act(() => { result.current.continueAfterWrong(); });

    expect(result.current.state.phase).toBe("paused");

    // Resume
    act(() => { result.current.togglePause(); });
    expect(result.current.state.phase).toBe("playing");
  });

  it("correct answer caps time at MAX_TIME", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Time starts at INITIAL_TIME (90). Answer multiple correct to approach cap.
    // First correct: 90 + 15 = 105
    let correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.timeRemaining).toBe(INITIAL_TIME + CORRECT_BONUS); // 105
    act(() => { vi.advanceTimersByTime(1800 + 50); }); // advance past feedback

    // Second correct: 105 + 15 = 120 (exactly MAX_TIME)
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.timeRemaining).toBe(MAX_TIME); // 120
    expect(result.current.lastDelta).toBe(CORRECT_BONUS); // full bonus applied
    act(() => { vi.advanceTimersByTime(1800 + 50); });

    // Third correct: 120 + 15 would be 135, but capped at 120
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.timeRemaining).toBe(MAX_TIME); // stays at 120
    expect(result.current.lastDelta).toBe(0); // no time actually gained
  });

  it("totalGained tracks actual capped amounts", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // At 90: correct → 105, gained = 15
    let correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.totalGained).toBe(15);
    act(() => { vi.advanceTimersByTime(1800 + 50); });

    // At 105: correct → 120 (capped), gained = 15
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.totalGained).toBe(30);
    act(() => { vi.advanceTimersByTime(1800 + 50); });

    // At 120: correct → 120 (capped), gained = 0
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.totalGained).toBe(30); // unchanged
    expect(result.current.lastDelta).toBe(0);
  });

  it("wrong answer near zero tracks actual loss", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Drain time to 3 seconds
    const ticksNeeded = INITIAL_TIME - 3;
    act(() => { vi.advanceTimersByTime(ticksNeeded * 1000); });
    expect(result.current.timeRemaining).toBe(3);

    // Wrong answer: penalty is 5 but only 3 available
    const wrongId = getWrongId(result.current);
    act(() => { result.current.toggleAnswer(wrongId); });
    act(() => { result.current.confirmAnswer(); });

    expect(result.current.timeRemaining).toBe(0);
    expect(result.current.lastDelta).toBe(-3); // actual loss, not -5
    expect(result.current.totalLost).toBe(3); // actual loss
  });

  it("correct answer near cap gives partial bonus", () => {
    const { result } = renderHook(() => useTimeTrialMode(questions));
    act(() => {});

    // Get to 113: answer one correct (90→105), then drain 105 down by waiting
    // but timer stops during feedback... Let's just use two corrects + drain.
    let correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    // At 105, in feedback (timer stopped)
    act(() => { vi.advanceTimersByTime(1800 + 50); }); // advance to next Q

    // Now playing at 105. Drain to 113 by... wait, 105 already. We need to get to near 120.
    // Answer another correct: 105→120
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.timeRemaining).toBe(MAX_TIME);
    act(() => { vi.advanceTimersByTime(1800 + 50); });

    // Now at 120, drain to 113 (7 seconds tick during playing)
    act(() => { vi.advanceTimersByTime(7000); });
    expect(result.current.timeRemaining).toBe(113);

    // Answer correct: 113 + 15 = 128, capped at 120. Actual gain = 7.
    correctId = getCorrectId(result.current);
    act(() => { result.current.toggleAnswer(correctId); });
    act(() => { result.current.confirmAnswer(); });
    expect(result.current.timeRemaining).toBe(MAX_TIME);
    expect(result.current.lastDelta).toBe(7); // partial bonus
  });
});
