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
import { shuffle } from "@/lib/utils";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
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
    return <div className="py-12 text-center text-muted-foreground">Loading questions…</div>;
  }

  // Complete
  if (isComplete) {
    return <QuizResults questions={quizQuestions} selectedAnswers={selectedAnswers} cert={cert} />;
  }

  return (
    <div className="max-w-[1200px] mx-auto px-8 py-12">
      {/* Top bar with breadcrumb + progress */}
      <div className="flex items-center justify-between mb-9 flex-wrap gap-4">
        <div>
          <div className="flex items-center gap-2 text-[13px] text-muted-foreground mb-1">
            <Link href="/practice-tests" className="text-primary no-underline hover:underline">Practice Tests</Link>
            <span>›</span>
            <span>{certName}</span>
          </div>
          <h1 className="font-display text-[30px] font-extrabold text-foreground tracking-tight">{certName}</h1>
        </div>
        <div className="flex-1 max-w-[360px]">
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
          <CardHeader className="bg-foreground px-7 py-5 flex flex-row items-center justify-between gap-3 space-y-0">
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
                <svg width="14" height="14" viewBox="0 0 24 24" fill={isFlagged ? "hsl(var(--warning))" : "none"} stroke={isFlagged ? "hsl(var(--warning))" : "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={isFlagged ? "text-warning" : "text-card/50"}>
                  <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                  <line x1="4" y1="22" x2="4" y2="15" />
                </svg>
                <span className={isFlagged ? "text-warning" : "text-card/50"}>{isFlagged ? "Flagged" : "Flag"}</span>
              </button>
              <Badge variant="secondary" className="bg-card/10 text-card/70 hover:bg-card/10 text-[11px] font-semibold tracking-wide uppercase">
                {currentQuestion.isMultiSelect ? "Multi-select" : "Single choice"}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="p-7 text-left">
            {/* Question text */}
            <div className="text-[17px] font-medium text-foreground leading-relaxed mb-6 text-left">
              {renderCodeSpans(currentQuestion.question)}
              {currentQuestion.codeBlock && renderCodeSpans(currentQuestion.codeBlock)}
            </div>
            {currentQuestion.isMultiSelect && (
              <div className="flex items-center gap-1.5 text-[12.5px] text-muted-foreground mb-4 italic">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10" /><path d="M12 16v-4M12 8h.01" /></svg>
                Select all that apply
              </div>
            )}

            {/* Answer options */}
            <div className="flex flex-col gap-2.5">
              {currentQuestion.answers.map((answer) => {
                const isSelected = currentSelected.has(answer.id);
                const isCorrectOpt = answer.isCorrect;

                // Option styling
                let optionClass = "flex items-start gap-3.5 p-3.5 border-[1.5px] rounded-xl cursor-pointer transition-all text-[14.5px] leading-relaxed text-left";
                if (isRevealed) {
                  if (isCorrectOpt) optionClass += " border-success bg-success-soft";
                  else if (isSelected && !isCorrectOpt) optionClass += " border-destructive bg-destructive-soft";
                  else optionClass += " border-border bg-card";
                } else if (isSelected) {
                  optionClass += " border-primary bg-primary-soft";
                } else {
                  optionClass += " border-border bg-card hover:border-primary hover:bg-primary-soft";
                }

                // Selector dot/check styling
                const shape = currentQuestion.isMultiSelect ? "rounded-[5px]" : "rounded-full";
                let selectorClass = `w-5 h-5 border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${shape}`;
                if (isRevealed) {
                  if (isCorrectOpt) selectorClass += " border-success bg-success";
                  else if (isSelected) selectorClass += " border-destructive bg-destructive";
                  else selectorClass += " border-border-dark";
                } else if (isSelected) {
                  selectorClass += " border-primary bg-primary";
                } else {
                  selectorClass += " border-border-dark";
                }

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
                        <div className="w-2 h-2 rounded-full bg-card" />
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
          <div className="px-7 py-5 flex items-center justify-between gap-3 flex-wrap">
            <div>
              {!isRevealed && currentSelected.size > 0 && (
                <button
                  onClick={handleCheck}
                  className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-[13.5px] font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Check Answer
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-[13.5px] font-semibold text-foreground transition-colors hover:bg-secondary disabled:opacity-40 disabled:cursor-not-allowed"
              >
                ← Previous
              </button>
              <button
                onClick={handleNext}
                className="inline-flex items-center rounded-lg bg-foreground px-4 py-2 text-[13.5px] font-semibold text-card transition-colors hover:bg-foreground/90"
              >
                {currentIndex < quizQuestions.length - 1 ? "Next question →" : "See Results →"}
              </button>
            </div>
          </div>
        </Card>

        {/* Sidebar */}
        <div className="flex flex-col gap-4">
          {/* Session Score */}
          <Card className="shadow-sm border-[1.5px]">
            <CardContent className="p-5">
              <div className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground mb-3.5">Session Score</div>
              <div className="flex items-center gap-3 mb-3.5">
                <div
                  className="w-[60px] h-[60px] rounded-full flex items-center justify-center flex-shrink-0 relative"
                  style={{ background: `conic-gradient(hsl(var(--success)) 0% ${scorePercent}%, hsl(var(--border)) ${scorePercent}% 100%)` }}
                >
                  <div className="absolute w-11 h-11 bg-card rounded-full" />
                  <span className="font-display text-[15px] font-bold text-foreground relative z-10">{scorePercent}%</span>
                </div>
                <div className="text-[13px] text-muted-foreground leading-[1.8] flex-1">
                  <div className="flex justify-between"><span><span className="inline-block w-2 h-2 rounded-full bg-success mr-1.5" />Correct</span><span className="font-semibold text-foreground">{correctCount}</span></div>
                  <div className="flex justify-between"><span><span className="inline-block w-2 h-2 rounded-full bg-destructive mr-1.5" />Incorrect</span><span className="font-semibold text-foreground">{wrongCount}</span></div>
                  <div className="flex justify-between"><span><span className="inline-block w-2 h-2 rounded-full bg-border-dark mr-1.5" />Remaining</span><span className="font-semibold text-foreground">{quizQuestions.length - answeredCount}</span></div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Question Map */}
          <Card className="shadow-sm border-[1.5px]">
            <CardContent className="p-5">
              <div className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground mb-3.5">Question Map</div>
              <div className="flex flex-wrap gap-1.5">
                {quizQuestions.map((q, i) => {
                  const isQuestionFlagged = flaggedSet.has(i);
                  let btnClass = "w-[30px] h-[30px] rounded-[7px] text-[11px] font-bold border flex items-center justify-center cursor-pointer transition-colors relative";
                  if (i === currentIndex) {
                    btnClass += " bg-primary text-primary-foreground border-primary";
                  } else if (revealedMap[i]) {
                    const sel = selectedAnswers[q.id] ?? new Set<string>();
                    const correctIds = new Set(q.answers.filter((a) => a.isCorrect).map((a) => a.id));
                    const correct = correctIds.size === sel.size && [...correctIds].every((id) => sel.has(id));
                    btnClass += correct
                      ? " border-success bg-success-soft text-success"
                      : " border-destructive bg-destructive-soft text-destructive";
                  } else {
                    btnClass += " border-border bg-card text-muted-foreground hover:border-primary hover:text-primary";
                  }
                  return (
                    <button key={i} onClick={() => setCurrentIndex(i)} className={btnClass}>
                      {i + 1}
                      {isQuestionFlagged && (
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="hsl(var(--warning))" stroke="none" className="absolute -top-1 -right-1">
                          <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                          <line x1="4" y1="22" x2="4" y2="15" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
              {flaggedSet.size > 0 && (
                <div className="mt-3 flex items-center gap-1.5 text-[12px] text-warning">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="hsl(var(--warning))" stroke="none">
                    <path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z" />
                    <line x1="4" y1="22" x2="4" y2="15" />
                  </svg>
                  <span className="font-medium">{flaggedSet.size} flagged for review</span>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Contribute CTA */}
          <Card className="bg-foreground text-card border-foreground">
            <CardContent className="p-5">
              <div className="font-display text-[15px] font-bold mb-2">Found this useful?</div>
              <div className="text-[13px] text-card/65 leading-relaxed mb-3.5">
                Give back to the community by contributing a question — it only takes a few minutes.
              </div>
              <a
                href="https://github.com/FidelusAleksander/ghcertified/blob/master/CONTRIBUTING.md"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-lg bg-card px-4 py-2 text-sm font-bold text-foreground transition-colors hover:bg-card/90"
              >
                ✍️ Contribute a question
              </a>
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
