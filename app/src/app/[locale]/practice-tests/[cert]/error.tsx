"use client";

import Link from "next/link";
import { useLocale } from "next-intl";
import { Button } from "@/components/ui/button";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const locale = useLocale();

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h2 className="font-display text-[clamp(24px,3vw,32px)] font-extrabold tracking-tight text-foreground mb-3">
          Something went wrong
        </h2>
        <p className="text-[15px] text-muted-foreground mb-6">
          {error.message || "An error occurred while loading this page."}
        </p>
        <div className="flex justify-center gap-3">
          <Button
            variant="outline"
            onClick={reset}
            className="h-auto rounded-[10px] px-5 py-3 text-[14px] font-semibold"
          >
            Try again
          </Button>
          <Button
            render={<Link href={`/${locale}/practice-tests`} />}
            nativeButton={false}
            className="h-auto rounded-[10px] px-5 py-3 text-[14px] font-semibold"
          >
            Back to practice tests
          </Button>
        </div>
      </div>
    </div>
  );
}
