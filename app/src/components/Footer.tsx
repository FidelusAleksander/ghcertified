"use client";

/**
 * Footer — simple site footer with links and disclaimer.
 * Client component because it renders in the root layout (outside [locale]),
 * where setRequestLocale hasn't been called yet.
 */

import { useTranslations } from "next-intl";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("Footer");
  return (
    <footer className="mt-12">
      <Separator />
      <div className="py-6 sm:py-8 px-4 sm:px-8 text-center text-[13px] text-muted-foreground">
        <p>
          {t.rich("tagline", {
            link: (chunks) => (
              <a
                href="https://learn.github.com/certifications"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary no-underline hover:underline"
              >
                {chunks}
              </a>
            ),
          })}{" "}
          ·{" "}
          <a
            href="https://github.com/FidelusAleksander/ghcertified"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary no-underline hover:underline"
          >
            {t("starOnGitHub")}
          </a>{" "}
          ·{" "}
          {t.rich("madeBy", {
            link: (chunks) => (
              <a
                href="https://aleksanderfidelus.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary no-underline hover:underline"
              >
                {chunks}
              </a>
            ),
          })}
        </p>
      </div>
    </footer>
  );
}
