"use client";

/**
 * TestCatalogCard — one card per certification on the practice tests page.
 * Shows badge, title, question count, number input, and start button.
 * Covers F01 (catalog), F02 (adjustable length), F11 (availability control).
 */

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { CertInfo } from "@/types/quiz";
import { cn } from "@/lib/utils";

export function TestCatalogCard({ cert: info }: { cert: CertInfo }) {
  const router = useRouter();
  const [count, setCount] = useState(info.questionCount);

  function handleStart(e: React.FormEvent) {
    e.preventDefault();
    router.push(`/practice-tests/${info.cert}?questions=${count}`);
  }

  return (
    <form
      onSubmit={handleStart}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-colors",
        info.disabled && "opacity-50"
      )}
    >
      {/* Badge + info */}
      <div className="flex items-start gap-5 p-6">
        <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-secondary">
          <Image
            src={info.badge}
            alt={`${info.title} badge`}
            fill
            className="object-contain p-1"
            sizes="64px"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="font-heading text-lg font-bold tracking-tight">
            {info.title}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {info.questionCount} questions available
          </p>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground/80">
            {info.description}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="mt-auto border-t border-border/50 bg-secondary/30 px-6 py-4">
        {info.disabled ? (
          <span className="inline-flex h-10 items-center rounded-lg bg-muted px-5 text-sm font-medium text-muted-foreground">
            Unavailable
          </span>
        ) : (
          <div className="flex items-center gap-4">
            <label
              htmlFor={`count-${info.cert}`}
              className="text-sm text-muted-foreground"
            >
              Practice with
            </label>
            <div className="flex items-center gap-2">
              <input
                id={`count-${info.cert}`}
                type="number"
                min={1}
                max={info.questionCount}
                value={count}
                onChange={(e) => setCount(Number(e.target.value))}
                className="h-9 w-20 rounded-md border border-border bg-background px-3 text-sm tabular-nums focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                required
              />
              <span className="text-sm text-muted-foreground">questions</span>
            </div>
            <button
              type="submit"
              className="ml-auto inline-flex h-10 items-center rounded-lg bg-primary px-5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Start
            </button>
          </div>
        )}
      </div>
    </form>
  );
}
