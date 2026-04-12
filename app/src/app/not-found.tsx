"use client";

import Link from "next/link";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOCALE, localePath } from "@/lib/locales";

const HOME_HREF = localePath(DEFAULT_LOCALE, "/");

export default function NotFound() {
  useEffect(() => {
    window.location.replace(HOME_HREF);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      {/* Meta refresh fallback for raw 404.html before JS hydrates */}
      <meta httpEquiv="refresh" content={`0;url=${HOME_HREF}`} />
      <div className="max-w-md text-center">
        <div className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-[1.2px] uppercase text-muted-foreground mb-4">
          Page not found
        </div>
        <h1 className="font-display text-[clamp(28px,4vw,40px)] font-extrabold tracking-tight text-foreground">
          Redirecting to homepage
        </h1>
        <p className="mt-3 text-[15px] text-muted-foreground">
          This page does not exist. If redirect does not happen automatically, use the button below.
        </p>
        <div className="mt-6 flex justify-center">
          <Button
            render={<Link href={HOME_HREF} />}
            nativeButton={false}
            className="h-auto rounded-[10px] px-5 py-3 text-[14px] font-semibold"
          >
            Go to homepage
          </Button>
        </div>
      </div>
    </div>
  );
}
