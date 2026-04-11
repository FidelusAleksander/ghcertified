"use client";

/**
 * QuizResults — final score screen with card layout.
 */

import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Question } from "@/types/quiz";

interface QuizResultsProps {
  questions: Question[];
  selectedAnswers: Record<string, Set<string>>;
  cert: string;
}

export function QuizResults({ questions, selectedAnswers, cert }: QuizResultsProps) {
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
    <div className="max-w-[600px] mx-auto px-8 py-20">
      <Card className="shadow-sm border-[1.5px]">
        <CardContent className="p-8 text-center space-y-6">
          {/* Score circle */}
          <div
            className="mx-auto w-32 h-32 rounded-full flex items-center justify-center relative"
            style={{ background: `conic-gradient(${passed ? "hsl(var(--success))" : "hsl(var(--destructive))"} 0% ${pct}%, hsl(var(--border)) ${pct}% 100%)` }}
          >
            <div className="absolute w-24 h-24 bg-card rounded-full" />
            <span className="font-display text-3xl font-bold text-foreground relative z-10 tabular-nums">{pct}%</span>
          </div>

          <div>
            <h2 className="font-display text-2xl font-extrabold tracking-tight text-foreground">
              {passed ? "Great job! 🎉" : "Keep practicing! 💪"}
            </h2>
            <p className="mt-2 text-muted-foreground">
              You got{" "}
              <span className="font-semibold text-foreground">{correct} out of {total}</span>{" "}
              questions correct.
            </p>
          </div>

          {/* Breakdown */}
          <div className="flex justify-center gap-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-success tabular-nums">{correct}</div>
              <div className="text-sm text-muted-foreground">Correct</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive tabular-nums">{total - correct}</div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href={`/practice-tests/${cert}?questions=${total}`}
              className="inline-flex items-center rounded-[10px] bg-foreground px-7 py-3 text-sm font-semibold text-card transition-colors hover:bg-foreground/90"
            >
              Try Again
            </Link>
            <Link
              href="/practice-tests"
              className="inline-flex items-center rounded-[10px] border border-border px-7 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              Back to Tests
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
