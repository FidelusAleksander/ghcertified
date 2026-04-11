"use client";

/**
 * Navbar — top navigation bar.
 *
 * "use client" because usePathname() and mobile menu state.
 * Sticky top with white background, logo, nav links, and action buttons.
 * Collapses to hamburger menu on mobile.
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { CheckCircle, Menu, X } from "lucide-react";
import { GitHubStarButton } from "@/components/GitHubStarButton";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/practice-tests", label: "Practice Tests" },
  { href: "/questions", label: "Questions" },
] as const;

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex items-center h-14 sm:h-16 gap-4 sm:gap-10">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div className="size-[34px] bg-foreground rounded-[9px] flex items-center justify-center text-card">
            <CheckCircle />
          </div>
          <span className="font-display font-bold text-[17px] text-foreground tracking-tight">
            gh<span className="text-primary">certified</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-1 flex-1">
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

        {/* Desktop right-side actions */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <GitHubStarButton />
          <Button
            size="lg"
            render={<Link href="/practice-tests" />}
            nativeButton={false}
          >
            Start Practicing →
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden ml-auto p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border bg-card px-4 pb-4 pt-2">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                href === "/" ? pathname === "/" : pathname.startsWith(href);

              return (
                <Link
                  key={href}
                  href={href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "rounded-md px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "text-foreground bg-muted"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  )}
                >
                  {label}
                </Link>
              );
            })}
          </div>
          <div className="flex flex-col gap-3 mt-3 pt-3 border-t border-border">
            <GitHubStarButton className="self-start" />
            <Button
              render={<Link href="/practice-tests" onClick={() => setMobileOpen(false)} />}
              nativeButton={false}
              className="w-full"
            >
              Start Practicing →
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
