"use client";

/**
 * Navbar — top navigation for the site.
 *
 * "use client" because we need usePathname() to highlight the active link.
 * In Next.js App Router, hooks that read browser state require client components.
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
    <header className="border-b border-border/50 bg-background/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-6">
        <Link
          href="/"
          className="font-heading text-xl font-bold tracking-tight text-foreground transition-colors hover:text-primary"
        >
          GitHub Certified
        </Link>

        <ul className="flex items-center gap-1">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);

            return (
              <li key={href}>
                <Link
                  href={href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-secondary text-foreground"
                      : "text-muted-foreground hover:bg-secondary/50 hover:text-foreground"
                  )}
                >
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
