"use client";

/**
 * Quiz — the main quiz orchestrator component.
 *
 * Manages all quiz state: which question is shown, what the user selected,
 * whether they've submitted, and when the quiz is complete.
 *
 * "use client" because it uses React state (useState) to track quiz progress.
 * In Next.js App Router, any component that uses hooks must be a client component.
 *
 * IMPORTANT: We use useEffect to shuffle questions on the client only.
 * Math.random() produces different results on server vs client, which causes
 * a "hydration mismatch" error. By shuffling in useEffect (which only runs
 * on the client), the server renders nothing and the client renders the
 * shuffled quiz — no mismatch.
 */

import { useState, useCallback, useEffect } from "react";
import { Question } from "@/types/quiz";
import { shuffle } from "@/lib/utils";
import { QuestionCard } from "./QuestionCard";
import { QuizProgress } from "./QuizProgress";
import { QuizResults } from "./QuizResults";

interface QuizProps {
  /** All questions for this cert (will be shuffled + sliced) */
  questions: Question[];
  /** How many questions the user wants */
  questionCount: number;
  /** Which cert this quiz is for (used in results links) */
  cert: string;
}

export function Quiz({ questions, questionCount, cert }: QuizProps) {
  // Shuffle on client only to avoid hydration mismatch (Math.random differs server/client).
  const [quizQuestions, setQuizQuestions] = useState<Question[]>([]);

  useEffect(() => {
    const shuffled = shuffle(questions).slice(0, questionCount);
    const withShuffledAnswers = shuffled.map((q) => ({
      ...q,
      answers: shuffle(q.answers),
    }));
    setQuizQuestions(withShuffledAnswers);
  }, [questions, questionCount]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<
    Record<string, Set<string>>
  >({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const currentSelected = selectedAnswers[currentQuestion?.id] ?? new Set<string>();

  // Toggle an answer selection (F06 interactive answering)
  const handleToggleAnswer = useCallback(
    (answerId: string) => {
      if (isSubmitted || !currentQuestion) return;

      setSelectedAnswers((prev) => {
        const qId = currentQuestion.id;
        const current = new Set(prev[qId] ?? []);

        if (currentQuestion.isMultiSelect) {
          // Multi-select: toggle the answer
          if (current.has(answerId)) {
            current.delete(answerId);
          } else {
            current.add(answerId);
          }
        } else {
          // Single-select: replace selection
          current.clear();
          current.add(answerId);
        }

        return { ...prev, [qId]: current };
      });
    },
    [currentQuestion, isSubmitted]
  );

  // Submit current answer and show feedback
  const handleSubmit = () => {
    if (currentSelected.size === 0) return;
    setIsSubmitted(true);
  };

  // Move to next question or finish quiz
  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsSubmitted(false);
    } else {
      setIsComplete(true);
    }
  };

  // Loading state while shuffling on client
  if (quizQuestions.length === 0) {
    return (
      <div className="py-12 text-center text-muted-foreground">
        Loading questions…
      </div>
    );
  }

  // Quiz complete — show results
  if (isComplete) {
    return (
      <QuizResults
        questions={quizQuestions}
        selectedAnswers={selectedAnswers}
        cert={cert}
      />
    );
  }

  return (
    <div className="space-y-8">
      <QuizProgress current={currentIndex} total={quizQuestions.length} />

      <QuestionCard
        question={currentQuestion}
        selectedAnswerIds={currentSelected}
        isSubmitted={isSubmitted}
        onToggleAnswer={handleToggleAnswer}
      />

      {/* Action button */}
      <div className="flex justify-end">
        {!isSubmitted ? (
          <button
            onClick={handleSubmit}
            disabled={currentSelected.size === 0}
            className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-40 disabled:cursor-not-allowed"
          >
            Check Answer
          </button>
        ) : (
          <button
            onClick={handleNext}
            className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {currentIndex < quizQuestions.length - 1
              ? "Next Question"
              : "See Results"}
          </button>
        )}
      </div>
    </div>
  );
}
