/**
 * Footer — simple site footer with links and disclaimer.
 * Server component — no client state needed.
 */

import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="mt-20">
      <Separator />
      <div className="py-6 sm:py-8 px-4 sm:px-8 text-center text-[13px] text-muted-foreground">
        <p>
          ghcertified.com · Community-contributed questions for{" "}
          <a
            href="https://learn.github.com/certifications"
            target="_blank"
            rel="noreferrer"
            className="text-primary no-underline hover:underline"
          >
            official GitHub Certifications
          </a>{" "}
          ·{" "}
          <a
            href="https://github.com/FidelusAleksander/ghcertified"
            target="_blank"
            rel="noreferrer"
            className="text-primary no-underline hover:underline"
          >
            ⭐ Star on GitHub
          </a>
        </p>
        <p className="mt-1.5 text-xs text-muted-foreground/60">
          Not affiliated with GitHub. All questions are original, community-created
          content. We do not condone copying from real certification exams.
        </p>
      </div>
    </footer>
  );
}
