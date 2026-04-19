"use client";

import { Pause, CircleAlert, ExternalLink } from "lucide-react";

interface WrongReviewCalloutProps {
  pausedLabel: string;
  encouragement: string;
  reportLabel: string;
  reportHref: string;
}

export function WrongReviewCallout({
  pausedLabel,
  encouragement,
  reportLabel,
  reportHref,
}: WrongReviewCalloutProps) {
  return (
    <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2.5 sm:gap-4 rounded-lg border border-dashed border-muted-foreground/20 bg-muted/25 px-3.5 py-2.5 motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-1 motion-safe:duration-300 motion-safe:delay-200">
      <div className="flex items-center gap-2 text-[12px] text-muted-foreground shrink-0">
        <Pause className="size-3 text-primary" />
        <span className="font-medium">{pausedLabel}</span>
      </div>

      <span className="hidden sm:block text-muted-foreground/30">·</span>

      <div className="flex items-center gap-2 min-w-0">
        <span className="text-[12px] text-muted-foreground/70 truncate hidden sm:inline">{encouragement}</span>
        <a
          href={reportHref}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 shrink-0 rounded-md bg-foreground/5 border border-foreground/10 px-2 py-1 text-[11px] font-semibold text-foreground/60 transition-all hover:bg-foreground/10 hover:text-foreground hover:border-foreground/20"
        >
          <CircleAlert className="size-3" />
          {reportLabel}
          <ExternalLink className="size-2.5" />
        </a>
      </div>
    </div>
  );
}
