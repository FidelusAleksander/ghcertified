"use client";

import { cn } from "@/lib/utils";
import { Alert, AlertTitle } from "@/components/ui/alert";

export interface FeedbackAlertProps {
  isCorrect: boolean;
  correctLabel: string;
  incorrectLabel: string;
  className?: string;
}

export function FeedbackAlert({ isCorrect, correctLabel, incorrectLabel, className }: FeedbackAlertProps) {
  return (
    <Alert className={cn(
      "mt-5",
      isCorrect ? "bg-success-soft border-success/40 text-success" : "bg-destructive-soft border-destructive/40 text-destructive",
      className,
    )}>
      <AlertTitle className="flex items-center gap-2">
        <span className="text-lg">{isCorrect ? "✅" : "❌"}</span>
        {isCorrect ? correctLabel : incorrectLabel}
      </AlertTitle>
    </Alert>
  );
}
