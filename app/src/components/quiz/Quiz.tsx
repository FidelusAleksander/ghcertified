"use client";

/**
 * Quiz — main orchestrator with two-column layout.
 *
 * Left: question card with dark header, styled answer options, feedback, nav.
 * Right: sidebar with session score, question map, contribute CTA.
 *
 * "use client" because it uses React state for quiz progress.
 * Shuffles questions in useEffect (client-only) to avoid hydration mismatch.
 */

import { useState, useCallback, useEffect } from "react";
import { Question } from "@/types/quiz";
import { shuffle, cn } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Flag, Info, ChevronLeft, ChevronRight } from "lucide-react";
import { QuizResults } from "./QuizResults";

interface QuizProps {
  questions: Question[];
  questionCount: number;
  cert: string;
  certName: string;
}

export function Quiz({ questions, questionCount, cert, certName }: QuizProps) {
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
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, Set<string>>>({});
  const [revealedMap, setRevealedMap] = useState<Record<number, boolean>>({});
  const [flaggedSet, setFlaggedSet] = useState<Set<number>>(new Set());
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = quizQuestions[currentIndex];
  const currentSelected = selectedAnswers[currentQuestion?.id] ?? new Set<string>();
  const isRevealed = revealedMap[currentIndex] || false;
  const isFlagged = flaggedSet.has(currentIndex);

  const handleToggleFlag = useCallback(() => {
    setFlaggedSet((prev) => {
      const next = new Set(prev);
      if (next.has(currentIndex)) next.delete(currentIndex);
      else next.add(currentIndex);
      return next;
    });
  }, [currentIndex]);

  const handleToggleAnswer = useCallback(
    (answerId: string) => {
      if (isRevealed || !currentQuestion) return;

      setSelectedAnswers((prev) => {
        const qId = currentQuestion.id;
        const current = new Set(prev[qId] ?? []);

        if (currentQuestion.isMultiSelect) {
          if (current.has(answerId)) current.delete(answerId);
          else current.add(answerId);
        } else {
          current.clear();
          current.add(answerId);
        }

        return { ...prev, [qId]: current };
      });
    },
    [currentQuestion, isRevealed]
  );

  const handleCheck = () => {
    if (currentSelected.size === 0) return;
    setRevealedMap((prev) => ({ ...prev, [currentIndex]: true }));
  };

  const handleNext = () => {
    if (currentIndex < quizQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) setCurrentIndex((i) => i - 1);
  };

  // Check if current answer correct
  const isCurrentCorrect = () => {
    if (!currentQuestion) return false;
    const correctIds = new Set(currentQuestion.answers.filter((a) => a.isCorrect).map((a) => a.id));
    return correctIds.size === currentSelected.size && [...correctIds].every((id) => currentSelected.has(id));
  };

  // Score calculations for sidebar
  const answeredCount = Object.keys(revealedMap).length;
  const correctCount = Object.entries(revealedMap).filter(([qIdx]) => {
    const q = quizQuestions[Number(qIdx)];
    if (!q) return false;
    const sel = selectedAnswers[q.id] ?? new Set<string>();
    const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
    return correctIds.size === sel.size && [...correctIds].every((id) => sel.has(id));
  }).length;
  const wrongCount = answeredCount - correctCount;
  const scorePercent = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;

  // Loading
  if (quizQuestions.length === 0) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
        <div className="flex items-center justify-between mb-9">
          <div>
            <Skeleton className="h-4 w-40 mb-2" />
            <Skeleton className="h-8 w-64" />
          </div>
          <Skeleton className="h-2 w-60 hidden sm:block" />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
          <Skeleton className="h-[400px] rounded-xl" />
          <div className="flex flex-col gap-4">
            <Skeleton className="h-32 rounded-xl" />
            <Skeleton className="h-48 rounded-xl" />
          </div>
        </div>
      </div>
    );
  }

  // Complete
  if (isComplete) {
    return <QuizResults questions={quizQuestions} selectedAnswers={selectedAnswers} cert={cert} />;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-4 sm:px-8 py-6 sm:py-12">
      {/* Top bar with breadcrumb + progress */}
      <div className="flex items-center justify-between mb-6 sm:mb-9 flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1">
            <Link href="/practice-tests" className="text-primary no-underline hover:underline">Practice Tests</Link>
            <span>›</span>
            <span>{certName}</span>
          </div>
          <h1 className="font-display text-[24px] sm:text-[30px] font-extrabold text-foreground tracking-tight">{certName}</h1>
        </div>
        <div className="flex-1 max-w-[360px] hidden sm:block">
          <div className="flex items-center gap-4">
            <Progress value={((currentIndex + 1) / quizQuestions.length) * 100} className="flex-1 h-2" />
            <span className="text-[13px] font-semibold text-muted-foreground whitespace-nowrap">
              {currentIndex + 1} of {quizQuestions.length}
            </span>
          </div>
        </div>
      </div>

      {/* Two-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-start">
        {/* Question card */}
        <Card className="overflow-hidden shadow-sm border-[1.5px]">
          <CardHeader className="bg-foreground px-4 sm:px-7 py-4 sm:py-5 flex flex-row items-center justify-between gap-3 space-y-0">
            <span className="font-display text-[13px] font-bold text-card/50 tracking-wide">
              QUESTION {currentIndex + 1} OF {quizQuestions.length}
            </span>
            <div className="flex items-center gap-2.5">
              <button
                type="button"
                onClick={handleToggleFlag}
                className="inline-flex items-center gap-1.5 rounded-md px-2.5 py-1 text-[11px] font-semibold tracking-wide uppercase transition-colors hover:bg-card/10"
                title={isFlagged ? "Unflag this question" : "Flag for review"}
              >
                <Flag className={isFlagged ? "text-warning fill-warning" : "text-card/50"} />
                <span className={isFlagged ? "text-warning" : "text-card/50"}>{isFlagged ? "Flagged" : "Flag"}</span>
              </button>
              <Badge variant="secondary" className="bg-card/10 text-card/70 hover:bg-card/10 text-[11px] font-semibold tracking-wide uppercase">
                {currentQuestion.isMultiSelect ? "Multi-select" : "Single choice"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-4 sm:p-7 text-left">
            {/* Question text */}
            <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
              {renderCodeSpans(currentQuestion.question)}
              {currentQuestion.codeBlock && renderCodeSpans(currentQuestion.codeBlock)}
            </div>
            {currentQuestion.isMultiSelect && (
              <div className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground mb-4 italic">
                <Info />
                Select all that apply
              </div>
            )}

            {/* Answer options */}
            <div className="flex flex-col gap-2.5">
              {currentQuestion.answers.map((answer) => {
                const isSelected = currentSelected.has(answer.id);
                const isCorrectOpt = answer.isCorrect;

                const optionClass = cn(
                  "flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl cursor-pointer transition-all text-[14.5px] leading-relaxed text-left",
                  isRevealed && isCorrectOpt && "border-success bg-success-soft",
                  isRevealed && isSelected && !isCorrectOpt && "border-destructive bg-destructive-soft",
                  isRevealed && !isCorrectOpt && !isSelected && "border-border bg-card",
                  !isRevealed && isSelected && "border-primary bg-primary-soft",
                  !isRevealed && !isSelected && "border-border bg-card hover:border-primary hover:bg-primary-soft",
                );

                // Selector dot/check styling
                const shape = currentQuestion.isMultiSelect ? "rounded-[5px]" : "rounded-full";
                const selectorClass = cn(
                  "size-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center",
                  shape,
                  isRevealed && isCorrectOpt && "border-success bg-success",
                  isRevealed && isSelected && !isCorrectOpt && "border-destructive bg-destructive",
                  isRevealed && !isCorrectOpt && !isSelected && "border-border-dark",
                  !isRevealed && isSelected && "border-primary bg-primary",
                  !isRevealed && !isSelected && "border-border-dark",
                );

                return (
                  <button
                    key={answer.id}
                    type="button"
                    onClick={() => handleToggleAnswer(answer.id)}
                    disabled={isRevealed}
                    className={optionClass}
                  >
                    <div className={selectorClass}>
                      {(isSelected || (isRevealed && isCorrectOpt)) && (
                        <div className="size-2 rounded-full bg-card" />
                      )}
                    </div>
                    <div className="text-foreground flex-1 min-w-0">{renderCodeSpans(answer.text)}</div>
                  </button>
                );
              })}
            </div>

            {/* Feedback alert */}
            {isRevealed && (
              <Alert className={`mt-5 ${isCurrentCorrect() ? "bg-success-soft border-success/40 text-success" : "bg-destructive-soft border-destructive/40 text-destructive"}`}>
                <AlertTitle className="flex items-center gap-2">
                  <span className="text-lg">{isCurrentCorrect() ? "✅" : "❌"}</span>
                  {isCurrentCorrect() ? "Correct!" : "Not quite!"}
                </AlertTitle>
                <AlertDescription className="text-sm leading-relaxed">
                  {currentQuestion.hint && (
                    <a
                      href={currentQuestion.hint}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline underline-offset-4 hover:opacity-80"
                    >
                      📖 Learn more in the docs
                    </a>
                  )}
                </AlertDescription>
              </Alert>
            )}
          </CardContent>

          <Separator />

          {/* Navigation footer */}
          <div className="px-4 sm:px-7 py-4 sm:py-5 flex items-center justify-between gap-3 flex-wrap">
            <div>
              {!isRevealed && currentSelected.size > 0 && (
                <Button onClick={handleCheck}>
                  Check Answer
                </Button>
              )}
            </div>
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={handlePrev}
                disabled={currentIndex === 0}
              >
                <ChevronLeft data-icon="inline-start" />
                Previous
              </Button>
              <Button
                onClick={handleNext}
                className="bg-foreground text-card hover:bg-foreground/90"
              >
                {currentIndex < quizQuestions.length - 1 ? "Next question" : "See Results"}
                <ChevronRight data-icon="inline-end" />
              </Button>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Session Score */}
          <Card className="shadow-sm border-[1.5px]">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">Session Score</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-3.5">
              <div className="flex items-center gap-3 mb-3.5">
                <div
                  className="size-[60px] rounded-full flex items-center justify-center flex-shrink-0 relative"
                  style={{ background: `conic-gradient(hsl(var(--success)) 0% ${scorePercent}%, hsl(var(--border)) ${scorePercent}% 100%)` }}
                >
                  <div className="absolute size-11 bg-card rounded-full" />
                  <span className="font-display text-[15px] font-bold text-foreground relative z-10">{scorePercent}%</span>
                </div>
                <div className="text-[13px] text-muted-foreground leading-[1.8] flex-1">
                  <div className="flex justify-between"><span><span className="inline-block size-2 rounded-full bg-success mr-1.5" />Correct</span><span className="font-semibold text-foreground">{correctCount}</span></div>
                  <div className="flex justify-between"><span><span className="inline-block size-2 rounded-full bg-destructive mr-1.5" />Incorrect</span><span className="font-semibold text-foreground">{wrongCount}</span></div>
                  <div className="flex justify-between"><span><span className="inline-block size-2 rounded-full bg-border-dark mr-1.5" />Remaining</span><span className="font-semibold text-foreground">{quizQuestions.length - answeredCount}</span></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question Map */}
          <Card className="shadow-sm border-[1.5px]">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">Question Map</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-3.5">
              <div className="flex flex-wrap gap-x-1.5 gap-y-3.5 pt-2">
                {quizQuestions.map((q, i) => {
                  const isQuestionFlagged = flaggedSet.has(i);
                  const btnClass = cn(
                    "size-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors relative",
                    i === currentIndex && "bg-primary text-primary-foreground border-primary",
                    i !== currentIndex && revealedMap[i] && (() => {
                      const sel = selectedAnswers[q.id] ?? new Set<string>();
                      const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
                      const correct = correctIds.size === sel.size && [...correctIds].every((id) => sel.has(id));
                      return correct
                        ? "border-success bg-success-soft text-success"
                        : "border-destructive bg-destructive-soft text-destructive";
                    })(),
                    i !== currentIndex && !revealedMap[i] && "border-border bg-card text-muted-foreground hover:border-primary hover:text-primary",
                  );
                  return (
                    <button key={i} onClick={() => setCurrentIndex(i)} className={btnClass}>
                      {i + 1}
                      {isQuestionFlagged && (
                        <span className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[14px] leading-none drop-shadow-sm">🚩</span>
                      )}
                    </button>
                  );
                })}
              </div>
              {flaggedSet.size > 0 && (
                <div className="mt-3 flex items-center gap-1.5 text-[12px] text-warning">
                  <Flag className="fill-warning" />
                  <span className="font-medium">{flaggedSet.size} flagged for review</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contribute CTA */}
          <Card className="bg-foreground text-card border-foreground">
            <CardHeader className="p-5 pb-0">
              <CardTitle className="font-display text-[15px] font-bold">Found this useful?</CardTitle>
            </CardHeader>
            <CardContent className="p-5 pt-2">
              <div className="text-[13px] text-card/65 leading-relaxed mb-3.5">
                Give back to the community by contributing a question — it only takes a few minutes.
              </div>
              <Button
                render={<a href="https://github.com/FidelusAleksander/ghcertified/blob/master/CONTRIBUTING.md" target="_blank" rel="noreferrer" />}
                nativeButton={false}
                className="bg-card text-foreground hover:bg-card/90 font-bold"
              >
                ✍️ Contribute a question
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

/** Simple parser: turns `backtick` text into <code> spans for technical content. */
function renderCodeSpans(text: string): React.ReactNode[] {
  // Split on fenced code blocks first (```lang\n...\n```), then inline backticks
  const fencedRe = /(```\w*\n[\s\S]*?```)/g;
  const segments = text.split(fencedRe);

  return segments.flatMap((segment, i) => {
    // Fenced code block
    if (segment.startsWith("```")) {
      const firstNewline = segment.indexOf("\n");
      const code = segment.slice(firstNewline + 1, segment.lastIndexOf("```")).trimEnd();
      return [
        <pre key={`fence-${i}`} className="font-mono text-xs bg-muted/80 border border-border rounded-lg p-3 my-2 overflow-x-auto whitespace-pre">
          <code>{code}</code>
        </pre>,
      ];
    }

    // Inline backticks within non-fenced text
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
