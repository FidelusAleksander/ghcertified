"use client";

/**
 * Navbar — top navigation bar.
 *
 * "use client" because usePathname() reads browser state.
 * Sticky top with white background, logo, nav links, and action buttons.
 */

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/practice-tests", label: "Practice Tests" },
  { href: "/questions", label: "Questions" },
] as const;

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-8 flex items-center h-16 gap-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div className="w-[34px] h-[34px] bg-foreground rounded-[9px] flex items-center justify-center">
            <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z" />
              <path d="M9 12l2 2 4-4" />
            </svg>
          </div>
          <span className="font-display font-bold text-[17px] text-foreground tracking-tight">
            gh<span className="text-primary">certified</span>
          </span>
        </Link>

        {/* Nav links */}
        <div className="flex gap-1 flex-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        {/* Right-side actions */}
        <div className="flex items-center gap-3 ml-auto">
          <a
            href="https://github.com/FidelusAleksander/ghcertified"
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-9 items-center rounded-lg border border-border px-4 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            ⭐ Star on GitHub
          </a>
          <Link
            href="/practice-tests"
            className="inline-flex h-9 items-center rounded-lg bg-primary px-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Start Practicing →
          </Link>
        </div>
      </div>
    </nav>
  );
}
