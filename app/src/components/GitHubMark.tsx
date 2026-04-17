"use client";

import { cn } from "@/lib/utils";

export function GitHubMark({ className }: { className?: string }) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src="/images/github_invertocat_black.svg"
      alt=""
      aria-hidden="true"
      className={cn("size-4", className)}
    />
  );
}
