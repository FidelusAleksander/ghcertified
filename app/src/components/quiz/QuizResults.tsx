"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle2, XCircle } from "lucide-react";

interface QuizResultsProps {
  animatedPercent: number;
  score: number;
  total: number;
  labels: {
    results: string;
    scoreOf: string;
    correctCount: string;
    incorrectCount: string;
  };
}

export function QuizResults({ animatedPercent, score, total, labels }: QuizResultsProps) {
  return (
    <Card className="shadow-sm border-[1.5px] motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300">
      <CardHeader className="p-5 pb-0">
        <CardTitle className="font-display text-[11px] font-bold tracking-[1px] uppercase text-muted-foreground">
          {labels.results}
        </CardTitle>
      </CardHeader>
      <CardContent className="p-5 pt-3">
        <div className="text-center mb-3">
          <span className="font-display text-[36px] font-extrabold text-foreground leading-none tabular-nums">
            {animatedPercent}%
          </span>
          <div className="text-[13px] text-muted-foreground mt-1">
            {labels.scoreOf}
          </div>
        </div>
        <Progress value={(score / total) * 100} className="h-2.5" />
        <div className="mt-3 flex justify-between text-[12px] text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="size-3.5 text-success" />
            {labels.correctCount}
          </span>
          <span className="flex items-center gap-1.5">
            <XCircle className="size-3.5 text-destructive" />
            {labels.incorrectCount}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
