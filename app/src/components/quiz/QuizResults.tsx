"use client";

/**
 * QuizResults — final score screen shown when the quiz is complete.
 *
 * Shows total score, breakdown of correct/incorrect, and a restart button.
 */

import Link from "next/link";
import { Question } from "@/types/quiz";

interface QuizResultsProps {
  questions: Question[];
  selectedAnswers: Record<string, Set<string>>;
  cert: string;
}

export function QuizResults({
  questions,
  selectedAnswers,
  cert,
}: QuizResultsProps) {
  // Calculate score: a question is correct only if ALL correct answers are
  // selected and NO incorrect answers are selected
  let correct = 0;
  for (const q of questions) {
    const selected = selectedAnswers[q.id] ?? new Set<string>();
    const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
    const isCorrect =
      correctIds.size === selected.size &&
      [...correctIds].every((id) => selected.has(id));
    if (isCorrect) correct++;
  }

  const total = questions.length;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 70;

  return (
    <div className="mx-auto max-w-lg space-y-8 text-center">
      {/* Score circle */}
      <div className="mx-auto flex h-32 w-32 items-center justify-center rounded-full border-4 border-primary">
        <span className="font-heading text-4xl font-bold tabular-nums">
          {pct}%
        </span>
      </div>

      <div>
        <h2 className="font-heading text-2xl font-bold tracking-tight">
          {passed ? "Great job! 🎉" : "Keep practicing! 💪"}
        </h2>
        <p className="mt-2 text-muted-foreground">
          You got{" "}
          <span className="font-semibold text-foreground">
            {correct} out of {total}
          </span>{" "}
          questions correct.
        </p>
      </div>

      {/* Breakdown */}
      <div className="flex justify-center gap-8">
        <div className="text-center">
          <div className="text-2xl font-bold text-success tabular-nums">
            {correct}
          </div>
          <div className="text-sm text-muted-foreground">Correct</div>
        </div>
        <div className="text-center">
          <div className="text-2xl font-bold text-destructive tabular-nums">
            {total - correct}
          </div>
          <div className="text-sm text-muted-foreground">Incorrect</div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
        <Link
          href={`/practice-tests/${cert}?questions=${total}`}
          className="inline-flex h-11 items-center rounded-lg bg-primary px-6 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Try Again
        </Link>
        <Link
          href="/practice-tests"
          className="inline-flex h-11 items-center rounded-lg border border-border px-6 text-sm font-medium transition-colors hover:bg-secondary"
        >
          Back to Tests
        </Link>
      </div>
    </div>
  );
}
