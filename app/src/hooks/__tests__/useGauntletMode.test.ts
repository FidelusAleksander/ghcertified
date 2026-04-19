// @vitest-environment jsdom
import { renderHook, act, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { useGauntletMode } from "@/hooks/useGauntletMode";
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

const questions = [
  makeQuestion("q1", "a1", "b1"),
  makeQuestion("q2", "a2", "b2"),
  makeQuestion("q3", "a3", "b3"),
  makeQuestion("q4", "a4", "b4"),
  makeQuestion("q5", "a5", "b5"),
];

const CORRECT_ADVANCE_DELAY = 1200;

describe("useGauntletMode", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  /** Helper: render hook and wait for mount effect (loading → playing). */
  async function setup(opts = {}) {
    const hook = renderHook(() => useGauntletMode(questions, opts));
    // Let the mount useEffect fire (shuffles questions, sets phase to "playing")
    await act(async () => {});
    return hook;
  }

  /** Get correct/wrong answer IDs for current question. */
  function answerIds(hook: ReturnType<typeof renderHook<ReturnType<typeof useGauntletMode>, unknown>>) {
    const q = hook.result.current.currentQuestion!;
    return {
      correctId: q.answers.find((a) => a.isCorrect)!.id,
      wrongId: q.answers.find((a) => !a.isCorrect)!.id,
    };
  }

  it("transitions to playing after mount with correct initial state", async () => {
    const { result } = await setup();

    expect(result.current.state.phase).toBe("playing");
    expect(result.current.state.lives).toBe(3);
    expect(result.current.state.initialLives).toBe(3);
    expect(result.current.state.correct).toBe(0);
    expect(result.current.state.wrong).toBe(0);
    expect(result.current.currentQuestion).not.toBeNull();
    expect(result.current.state.questions).toHaveLength(questions.length);
  });

  it("correct answer increments score and advances after delay", async () => {
    const hook = await setup();
    const { correctId } = answerIds(hook);

    act(() => { hook.result.current.toggleAnswer(correctId); });
    act(() => { hook.result.current.confirmAnswer(); });

    expect(hook.result.current.state.phase).toBe("feedback");
    expect(hook.result.current.state.correct).toBe(1);
    expect(hook.result.current.state.lastAnswerCorrect).toBe(true);

    // Advance past CORRECT_ADVANCE_DELAY to auto-advance
    act(() => { vi.advanceTimersByTime(CORRECT_ADVANCE_DELAY + 50); });

    expect(hook.result.current.state.phase).toBe("playing");
    expect(hook.result.current.state.currentIndex).toBe(1);
  });

  it("wrong answer decrements lives and enters wrong_review", async () => {
    const hook = await setup();
    const { wrongId } = answerIds(hook);

    act(() => { hook.result.current.toggleAnswer(wrongId); });
    act(() => { hook.result.current.confirmAnswer(); });

    expect(hook.result.current.state.phase).toBe("wrong_review");
    expect(hook.result.current.state.lives).toBe(2);
    expect(hook.result.current.state.wrong).toBe(1);
    expect(hook.result.current.state.lastAnswerCorrect).toBe(false);

    // Continue to next question
    act(() => { hook.result.current.continueAfterWrong(); });

    expect(hook.result.current.state.phase).toBe("playing");
    expect(hook.result.current.state.currentIndex).toBe(1);
  });

  it("game over after all lives lost", async () => {
    const hook = await setup();

    // Lose life 1
    let ids = answerIds(hook);
    act(() => { hook.result.current.toggleAnswer(ids.wrongId); });
    act(() => { hook.result.current.confirmAnswer(); });
    expect(hook.result.current.state.phase).toBe("wrong_review");
    expect(hook.result.current.state.lives).toBe(2);
    act(() => { hook.result.current.continueAfterWrong(); });

    // Lose life 2
    ids = answerIds(hook);
    act(() => { hook.result.current.toggleAnswer(ids.wrongId); });
    act(() => { hook.result.current.confirmAnswer(); });
    expect(hook.result.current.state.phase).toBe("wrong_review");
    expect(hook.result.current.state.lives).toBe(1);
    act(() => { hook.result.current.continueAfterWrong(); });

    // Lose life 3 — last life
    ids = answerIds(hook);
    act(() => { hook.result.current.toggleAnswer(ids.wrongId); });
    act(() => { hook.result.current.confirmAnswer(); });
    expect(hook.result.current.state.phase).toBe("game_over_review");
    expect(hook.result.current.state.lives).toBe(0);
    expect(hook.result.current.state.wrong).toBe(3);

    // Proceed to results
    act(() => { hook.result.current.proceedToResults(); });
    expect(hook.result.current.state.phase).toBe("game_over");
    expect(hook.result.current.result).not.toBeNull();
    expect(hook.result.current.result!.wrong).toBe(3);
  });

  it("timeout counts as wrong answer", async () => {
    const hook = await setup();

    expect(hook.result.current.state.phase).toBe("playing");
    const livesBefore = hook.result.current.state.lives;

    // Advance 60 seconds (default timeLimitSeconds)
    act(() => { vi.advanceTimersByTime(60 * 1000); });

    expect(hook.result.current.state.lives).toBe(livesBefore - 1);
    expect(hook.result.current.state.wrong).toBe(1);
    expect(hook.result.current.failedByTimeout).toBe(true);
  });

  it("restart resets state to initial values", async () => {
    const hook = await setup();

    // Answer one correct
    let ids = answerIds(hook);
    act(() => { hook.result.current.toggleAnswer(ids.correctId); });
    act(() => { hook.result.current.confirmAnswer(); });
    act(() => { vi.advanceTimersByTime(CORRECT_ADVANCE_DELAY + 50); });

    // Answer one wrong
    ids = answerIds(hook);
    act(() => { hook.result.current.toggleAnswer(ids.wrongId); });
    act(() => { hook.result.current.confirmAnswer(); });
    act(() => { hook.result.current.continueAfterWrong(); });

    expect(hook.result.current.state.correct).toBe(1);
    expect(hook.result.current.state.wrong).toBe(1);
    expect(hook.result.current.state.lives).toBe(2);

    // Restart
    act(() => { hook.result.current.restart(); });

    expect(hook.result.current.state.phase).toBe("playing");
    expect(hook.result.current.state.correct).toBe(0);
    expect(hook.result.current.state.wrong).toBe(0);
    expect(hook.result.current.state.lives).toBe(3);
    expect(hook.result.current.state.currentIndex).toBe(0);
  });

  it("multi-select: partial selection treated as wrong", async () => {
    // Only pass multi-select questions so shuffle doesn't matter
    const multiQs: Question[] = [{
      id: "mq1",
      cert: "foundations",
      question: "Pick two",
      answers: [
        { id: "ma1", text: "A", isCorrect: true },
        { id: "ma2", text: "B", isCorrect: true },
        { id: "ma3", text: "C", isCorrect: false },
      ],
      isMultiSelect: true,
    }];

    const hook = renderHook(() => useGauntletMode(multiQs, {}));
    await act(async () => {});

    const q = hook.result.current.currentQuestion!;
    expect(q.isMultiSelect).toBe(true);
    const oneCorrectId = q.answers.find((a) => a.isCorrect)!.id;

    // Select only 1 of 2 correct — should not be complete
    act(() => { hook.result.current.toggleAnswer(oneCorrectId); });
    expect(hook.result.current.isAnswerComplete()).toBe(false);

    // Confirm should be a no-op since answer is incomplete
    act(() => { hook.result.current.confirmAnswer(); });
    expect(hook.result.current.state.phase).toBe("playing");
  });

  it("pause queues between questions", async () => {
    const hook = await setup();
    const { correctId } = answerIds(hook);

    // Request pause during playing
    act(() => { hook.result.current.togglePause(); });
    expect(hook.result.current.pauseRequested).toBe(true);

    // Answer correctly — after feedback delay should pause instead of advance
    act(() => { hook.result.current.toggleAnswer(correctId); });
    act(() => { hook.result.current.confirmAnswer(); });
    expect(hook.result.current.state.phase).toBe("feedback");

    act(() => { vi.advanceTimersByTime(CORRECT_ADVANCE_DELAY + 50); });
    expect(hook.result.current.state.phase).toBe("paused");

    // Resume from pause
    act(() => { hook.result.current.togglePause(); });
    expect(hook.result.current.state.phase).toBe("playing");
    expect(hook.result.current.pauseRequested).toBe(false);
  });

  it("answering all questions correctly reaches completed phase with result", async () => {
    // Use only 3 questions so we can exhaust the pool
    const shortPool = questions.slice(0, 3);
    const hook = renderHook(() => useGauntletMode(shortPool, {}));
    await act(async () => {});

    for (let i = 0; i < 3; i++) {
      const { correctId } = answerIds(hook);
      act(() => { hook.result.current.toggleAnswer(correctId); });
      act(() => { hook.result.current.confirmAnswer(); });
      expect(hook.result.current.state.phase).toBe("feedback");
      act(() => { vi.advanceTimersByTime(CORRECT_ADVANCE_DELAY + 50); });
    }

    expect(hook.result.current.state.phase).toBe("completed");
    expect(hook.result.current.state.correct).toBe(3);
    expect(hook.result.current.state.wrong).toBe(0);
    expect(hook.result.current.result).not.toBeNull();
    expect(hook.result.current.result!.correct).toBe(3);
  });

  it("pause during wrong_review pauses on continue", async () => {
    const hook = await setup();
    const { wrongId } = answerIds(hook);

    act(() => { hook.result.current.toggleAnswer(wrongId); });
    act(() => { hook.result.current.confirmAnswer(); });
    expect(hook.result.current.state.phase).toBe("wrong_review");

    // Request pause while in wrong_review (togglePause only works in playing/feedback,
    // so request it before answering wrong — but we need to test the continueAfterWrong path)
    // Actually togglePause guards: playing | feedback. So we request pause before answering.
    // Let's redo: start fresh, request pause during playing, then answer wrong.
    const hook2 = await setup();
    act(() => { hook2.result.current.togglePause(); });
    expect(hook2.result.current.pauseRequested).toBe(true);

    const ids2 = answerIds(hook2);
    act(() => { hook2.result.current.toggleAnswer(ids2.wrongId); });
    act(() => { hook2.result.current.confirmAnswer(); });
    expect(hook2.result.current.state.phase).toBe("wrong_review");

    // Continue should go to paused (not playing) since pause was requested
    act(() => { hook2.result.current.continueAfterWrong(); });
    expect(hook2.result.current.state.phase).toBe("paused");

    // Resume
    act(() => { hook2.result.current.togglePause(); });
    expect(hook2.result.current.state.phase).toBe("playing");
  });

  it("timeout on last life leads to game_over_review", async () => {
    const hook = await setup({ lives: 1 });

    expect(hook.result.current.state.lives).toBe(1);

    // Let timeout fire
    act(() => { vi.advanceTimersByTime(60 * 1000); });

    expect(hook.result.current.state.phase).toBe("game_over_review");
    expect(hook.result.current.state.lives).toBe(0);
    expect(hook.result.current.failedByTimeout).toBe(true);

    act(() => { hook.result.current.proceedToResults(); });
    expect(hook.result.current.state.phase).toBe("game_over");
    expect(hook.result.current.result).not.toBeNull();
  });
});
