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
import { Button } from "@/components/ui/button";
import { CheckCircle } from "lucide-react";

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
          <div className="size-[34px] bg-foreground rounded-[9px] flex items-center justify-center text-card">
            <CheckCircle />
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
          <Button
            variant="outline"
            size="lg"
            render={<a href="https://github.com/FidelusAleksander/ghcertified" target="_blank" rel="noreferrer" />}
            nativeButton={false}
          >
            ⭐ Star on GitHub
          </Button>
          <Button
            size="lg"
            render={<Link href="/practice-tests" />}
            nativeButton={false}
          >
            Start Practicing →
          </Button>
        </div>
      </div>
    </nav>
  );
}
