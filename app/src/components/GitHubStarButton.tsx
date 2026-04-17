"use client";

import * as React from "react";
import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { GitHubMark } from "@/components/GitHubMark";

const OWNER = "FidelusAleksander";
const REPO = "ghcertified";

function formatNumber(num: number): string {
  if (num >= 1000000) {
    return `${(num / 1000000).toFixed(1).replace(/\.0$/, "")}M`;
  }
  if (num >= 1000) {
    return `${(num / 1000).toFixed(1).replace(/\.0$/, "")}k`;
  }
  return num.toLocaleString();
}

function useGitHubStars() {
  const [stars, setStars] = React.useState<number | null>(null);

  React.useEffect(() => {
    fetch(`https://api.github.com/repos/${OWNER}/${REPO}`)
      .then((r) => r.json())
      .then((data: { stargazers_count?: number }) => {
        if (typeof data.stargazers_count === "number") {
          setStars(data.stargazers_count);
        }
      })
      .catch(() => {
        setStars(null);
      });
  }, []);

  return stars;
}

export function GitHubStarButton({ className = "" }: { className?: string }) {
  const stars = useGitHubStars();

  return (
    <Button
      render={
        <a
          href={`https://github.com/${OWNER}/${REPO}`}
          target="_blank"
          rel="noopener noreferrer"
        />
      }
      nativeButton={false}
      variant="outline"
      size="sm"
      className={cn(
        "h-9 rounded-[9px] border-border bg-card px-2.5 text-[13px] font-semibold text-foreground shadow-none hover:bg-muted",
        "focus-visible:ring-2 focus-visible:ring-ring/50",
        className,
      )}
    >
      <span className="flex items-center gap-1.5">
        <GitHubMark className="size-3.5" />
        <span>Star</span>
      </span>
      {stars !== null && (
        <span className="ml-1 inline-flex items-center gap-1 rounded-md bg-muted px-1.5 py-0.5 text-[12px] font-semibold text-muted-foreground">
          <Star className="size-3 text-star fill-star stroke-star" />
          {formatNumber(stars)}
        </span>
      )}
    </Button>
  );
}
