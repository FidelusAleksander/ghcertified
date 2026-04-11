"use client";

/**
 * QuizResults — final score screen with card layout.
 */

import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Question } from "@/types/quiz";

interface QuizResultsProps {
  questions: Question[];
  selectedAnswers: Record<string, Set<string>>;
  cert: string;
}

export function QuizResults({ questions, selectedAnswers, cert }: QuizResultsProps) {
  let correct = 0;
  let partial = 0;
  for (const q of questions) {
    const selected = selectedAnswers[q.id] ?? new Set<string>();
    const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
    const isCorrect =
      correctIds.size === selected.size &&
      [...correctIds].every((id) => selected.has(id));
    if (isCorrect) {
      correct++;
    } else if (q.isMultiSelect && [...selected].some((id) => correctIds.has(id))) {
      partial++;
    }
  }

  const total = questions.length;
  const wrong = total - correct - partial;
  const pct = Math.round((correct / total) * 100);
  const passed = pct >= 70;

  return (
    <div className="max-w-[600px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      <Card className="shadow-sm border-[1.5px]">
        <CardContent className="p-8 text-center flex flex-col gap-6">
          {/* Score circle */}
          <div
            className="mx-auto size-32 rounded-full flex items-center justify-center relative"
            style={{ background: `conic-gradient(${passed ? "hsl(var(--success))" : "hsl(var(--destructive))"} 0% ${pct}%, hsl(var(--border)) ${pct}% 100%)` }}
          >
            <div className="absolute size-24 bg-card rounded-full" />
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
            {partial > 0 && (
              <div className="text-center">
                <div className="text-2xl font-bold tabular-nums" style={{ color: "hsl(38 92% 50%)" }}>{partial}</div>
                <div className="text-sm text-muted-foreground">Partial</div>
              </div>
            )}
            <div className="text-center">
              <div className="text-2xl font-bold text-destructive tabular-nums">{wrong}</div>
              <div className="text-sm text-muted-foreground">Incorrect</div>
            </div>
          </div>

          <Separator />

          {/* Actions */}
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Button
              render={<Link href={`/practice-tests/${cert}?questions=${total}`} />}
              nativeButton={false}
              className="rounded-[10px] px-7 py-3 h-auto text-sm font-semibold"
            >
              Try Again
            </Button>
            <Button
              variant="outline"
              render={<Link href="/practice-tests" />}
              nativeButton={false}
              className="rounded-[10px] px-7 py-3 h-auto text-sm font-medium"
            >
              Back to Tests
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
