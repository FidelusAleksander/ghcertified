"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Send, TriangleAlert } from "lucide-react";

interface SubmitDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onConfirm: () => void;
  fullyAnsweredCount: number;
  partialCount: number;
  unansweredCount: number;
  flaggedCount: number;
  labels: {
    title: string;
    description: string;
    answered: string;
    partiallyAnswered: string;
    unanswered: string;
    flagged: string;
    warningBoth: string;
    warningUnanswered: string;
    warningPartial: string;
    cancel: string;
    submitExam: string;
  };
}

export function SubmitDialog({
  open,
  onOpenChange,
  onConfirm,
  fullyAnsweredCount,
  partialCount,
  unansweredCount,
  flaggedCount,
  labels,
}: SubmitDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle className="font-display text-xl font-extrabold">{labels.title}</DialogTitle>
          <DialogDescription className="text-muted-foreground">
            {labels.description}
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <div className="flex flex-col gap-2.5 text-[14px]">
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="inline-block size-2.5 rounded-full bg-foreground/30" />
                {labels.answered}
              </span>
              <span className="font-semibold text-foreground tabular-nums">{fullyAnsweredCount}</span>
            </div>
            {partialCount > 0 && (
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="inline-block size-2.5 rounded-full bg-amber-500" />
                  {labels.partiallyAnswered}
                </span>
                <span className="font-semibold text-foreground tabular-nums">{partialCount}</span>
              </div>
            )}
            <div className="flex justify-between items-center">
              <span className="flex items-center gap-2">
                <span className="inline-block size-2.5 rounded-full bg-border-dark" />
                {labels.unanswered}
              </span>
              <span className="font-semibold text-foreground tabular-nums">{unansweredCount}</span>
            </div>
            {flaggedCount > 0 && (
              <div className="flex justify-between items-center">
                <span className="flex items-center gap-2">
                  <span className="text-sm">🚩</span>
                  {labels.flagged}
                </span>
                <span className="font-semibold text-foreground tabular-nums">{flaggedCount}</span>
              </div>
            )}
          </div>
          {(unansweredCount > 0 || partialCount > 0) && (
            <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-amber-500/30 bg-amber-500/10 px-3.5 py-2.5 text-[13.5px] text-amber-700 dark:text-amber-400">
              <TriangleAlert className="size-4 mt-0.5 flex-shrink-0" />
              <span>
                {unansweredCount > 0 && partialCount > 0
                  ? labels.warningBoth
                  : unansweredCount > 0
                    ? labels.warningUnanswered
                    : labels.warningPartial
                }
              </span>
            </div>
          )}
        </div>
        <DialogFooter className="gap-2 sm:gap-0">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            {labels.cancel}
          </Button>
          <Button onClick={onConfirm} className="bg-foreground text-card hover:bg-foreground/90">
            <Send className="size-4" />
            {labels.submitExam}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
