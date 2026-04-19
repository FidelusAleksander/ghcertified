"use client";

import { Pause, CircleAlert, ExternalLink } from "lucide-react";

interface WrongReviewCalloutProps {
  pausedLabel: string;
  reportLabel: string;
  reportHref: string;
}

export function WrongReviewCallout({
  pausedLabel,
  reportLabel,
  reportHref,
}: WrongReviewCalloutProps) {
  return (
    <div className="mt-4 flex items-center justify-between rounded-lg border border-dashed border-muted-foreground/20 bg-muted/25 px-3.5 py-2.5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-300 motion-safe:delay-200">
      <div className="flex items-center gap-2 text-[12px] text-muted-foreground">
        <Pause className="size-3 text-primary" />
        <span className="font-medium">{pausedLabel}</span>
      </div>

      <span className="text-muted-foreground/30">·</span>

      <a
        href={reportHref}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 rounded-md bg-foreground/5 border border-foreground/10 px-2 py-1 text-[11px] font-semibold text-foreground/60 transition-all hover:bg-foreground/10 hover:text-foreground hover:border-foreground/20"
      >
        <CircleAlert className="size-3" />
        {reportLabel}
        <ExternalLink className="size-2.5" />
      </a>
    </div>
  );
}
