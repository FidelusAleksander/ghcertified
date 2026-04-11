"use client";

/**
 * QuizResults — final score screen with question-by-question review.
 */

import { useState } from "react";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { Question } from "@/types/quiz";
import { cn } from "@/lib/utils";
import { ChevronDown, ChevronUp } from "lucide-react";

interface QuizResultsProps {
  questions: Question[];
  selectedAnswers: Record<string, Set<string>>;
  cert: string;
}

export function QuizResults({ questions, selectedAnswers, cert }: QuizResultsProps) {
  const [showReview, setShowReview] = useState(true);

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
    <div className="max-w-[800px] mx-auto px-4 sm:px-8 py-12 sm:py-20">
      {/* Score card */}
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

      {/* Question review toggle */}
      <div className="mt-8">
        <button
          onClick={() => setShowReview(!showReview)}
          className="flex items-center gap-2 text-[15px] font-semibold text-foreground mb-4 hover:text-primary transition-colors"
        >
          {showReview ? <ChevronUp className="size-5" /> : <ChevronDown className="size-5" />}
          Review All Questions
        </button>

        {showReview && (
          <div className="flex flex-col gap-4">
            {questions.map((q, qIdx) => {
              const selected = selectedAnswers[q.id] ?? new Set<string>();
              const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
              const isFullyCorrect = correctIds.size === selected.size && [...correctIds].every((id) => selected.has(id));
              const isPartial = !isFullyCorrect && q.isMultiSelect && [...selected].some((id) => correctIds.has(id));

              return (
                <Card key={q.id} className={cn(
                  "overflow-hidden shadow-sm border-[1.5px]",
                  isFullyCorrect && "border-success/40",
                  isPartial && "border-amber-500/40",
                  !isFullyCorrect && !isPartial && "border-destructive/40",
                )}>
                  <CardHeader className="px-5 py-3.5 flex flex-row items-center justify-between gap-3 space-y-0 bg-muted/30">
                    <span className="text-[13px] font-bold text-muted-foreground">
                      Q{qIdx + 1}
                      {isFullyCorrect && <span className="ml-2 text-success">✅ Correct</span>}
                      {isPartial && <span className="ml-2" style={{ color: "hsl(38 92% 50%)" }}>⚠️ Partial</span>}
                      {!isFullyCorrect && !isPartial && <span className="ml-2 text-destructive">❌ Incorrect</span>}
                    </span>
                    <Badge variant="secondary" className="text-[11px] font-semibold tracking-wide uppercase">
                      {q.isMultiSelect ? "Multi-select" : "Single choice"}
                    </Badge>
                  </CardHeader>
                  <CardContent className="px-5 py-4">
                    <div className="text-[15px] font-medium text-foreground leading-relaxed mb-4">
                      {renderCodeSpans(q.question)}
                      {q.codeBlock && renderCodeSpans(q.codeBlock)}
                    </div>

                    <div className="flex flex-col gap-2">
                      {q.answers.map((answer) => {
                        const isSelected = selected.has(answer.id);
                        const isCorrectOpt = answer.isCorrect;

                        const optionClass = cn(
                          "flex items-start gap-3 p-3 border-[1.5px] rounded-lg text-[13.5px] leading-relaxed text-left",
                          isCorrectOpt && "border-success bg-success-soft",
                          isSelected && !isCorrectOpt && "border-destructive bg-destructive-soft",
                          !isCorrectOpt && !isSelected && "border-border bg-card",
                        );

                        const shape = q.isMultiSelect ? "rounded-[4px]" : "rounded-full";
                        const selectorClass = cn(
                          "size-4 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center",
                          shape,
                          isCorrectOpt && "border-success bg-success",
                          isSelected && !isCorrectOpt && "border-destructive bg-destructive",
                          !isCorrectOpt && !isSelected && "border-border-dark",
                        );

                        return (
                          <div key={answer.id} className={optionClass}>
                            <div className={selectorClass}>
                              {(isSelected || isCorrectOpt) && (
                                <div className="size-1.5 rounded-full bg-card" />
                              )}
                            </div>
                            <div className="text-foreground flex-1 min-w-0">
                              {renderCodeSpans(answer.text)}
                              {isSelected && !isCorrectOpt && (
                                <span className="ml-1.5 text-[11px] text-destructive font-semibold">← Your answer</span>
                              )}
                              {isSelected && isCorrectOpt && (
                                <span className="ml-1.5 text-[11px] text-success font-semibold">← Your answer</span>
                              )}
                              {!isSelected && isCorrectOpt && (
                                <span className="ml-1.5 text-[11px] text-success font-semibold">← Correct answer</span>
                              )}
                            </div>
                          </div>
                        );
                      })}
                    </div>

                    {q.hint && (
                      <div className="mt-3">
                        <a
                          href={q.hint}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12.5px] text-primary underline underline-offset-4 hover:opacity-80"
                        >
                          📖 Learn more in the docs
                        </a>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}

/** Turns `backtick` text into <code> spans and fenced blocks into <pre>. */
function renderCodeSpans(text: string): React.ReactNode[] {
  const fencedRe = /(```\w*\n[\s\S]*?```)/g;
  const segments = text.split(fencedRe);

  return segments.flatMap((segment, i) => {
    if (segment.startsWith("```")) {
      const firstNewline = segment.indexOf("\n");
      const code = segment.slice(firstNewline + 1, segment.lastIndexOf("```")).trimEnd();
      return [
        <pre key={`fence-${i}`} className="font-mono text-xs bg-muted/80 border border-border rounded-lg p-3 my-2 overflow-x-auto whitespace-pre">
          <code>{code}</code>
        </pre>,
      ];
    }

    const parts = segment.split(/(`[^`]+`)/g);
    return parts.map((part, j) => {
      if (part.startsWith("`") && part.endsWith("`")) {
        return (
          <code key={`${i}-${j}`} className="font-mono text-sm bg-muted px-1.5 py-0.5 rounded text-foreground">
            {part.slice(1, -1)}
          </code>
        );
      }
      return <span key={`${i}-${j}`}>{part}</span>;
    });
  });
}
