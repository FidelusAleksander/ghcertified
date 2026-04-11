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
import { usePathname, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { CheckCircle, Menu, X, Globe } from "lucide-react";
import { GitHubStarButton } from "@/components/GitHubStarButton";
import { SUPPORTED_LOCALES, LOCALE_LABELS } from "@/lib/locales";

/** Extract locale from the current pathname (first segment). */
function extractLocale(pathname: string): string {
  const seg = pathname.split("/")[1] ?? "en";
  return (SUPPORTED_LOCALES as readonly string[]).includes(seg) ? seg : "en";
}

/** Strip locale prefix from a path. */
function stripLocale(pathname: string): string {
  const seg = pathname.split("/")[1] ?? "";
  if ((SUPPORTED_LOCALES as readonly string[]).includes(seg)) {
    return pathname.slice(seg.length + 1) || "/";
  }
  return pathname;
}

export function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  const locale = extractLocale(pathname);
  const pathWithoutLocale = stripLocale(pathname);

  const navLinks = [
    { href: `/${locale}`, label: "Home" },
    { href: `/${locale}/practice-tests`, label: "Practice Tests" },
    { href: `/${locale}/questions`, label: "Questions" },
  ] as const;

  function handleLocaleChange(newLocale: string) {
    router.push(`/${newLocale}${pathWithoutLocale === "/" ? "" : pathWithoutLocale}`);
  }

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-8 flex items-center h-14 sm:h-16 gap-4 sm:gap-10">
        {/* Logo */}
        <Link href={`/${locale}`} className="flex items-center gap-2.5 no-underline flex-shrink-0">
          <div className="size-[34px] bg-foreground rounded-[9px] flex items-center justify-center text-card">
            <CheckCircle />
          </div>
          <span className="font-display font-bold text-[17px] text-foreground tracking-tight">
            gh<span className="text-primary">certified</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden lg:flex gap-1 flex-1">
          {navLinks.map(({ href, label }) => {
            const isActive =
              href === `/${locale}` ? pathname === `/${locale}` || pathname === `/${locale}/` : pathname.startsWith(href);

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
          {/* Language switcher */}
          <div className="relative flex items-center gap-1.5 text-muted-foreground">
            <Globe className="size-4" />
            <select
              value={locale}
              onChange={(e) => handleLocaleChange(e.target.value)}
              className="appearance-none bg-transparent text-sm font-medium cursor-pointer pr-4 outline-none hover:text-foreground transition-colors"
            >
              {SUPPORTED_LOCALES.map((loc) => (
                <option key={loc} value={loc}>{LOCALE_LABELS[loc]}</option>
              ))}
            </select>
          </div>
          <GitHubStarButton />
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
            {navLinks.map(({ href, label }) => {
              const isActive =
                href === `/${locale}` ? pathname === `/${locale}` || pathname === `/${locale}/` : pathname.startsWith(href);

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
          {/* Mobile language switcher */}
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border px-3">
            <Globe className="size-4 text-muted-foreground" />
            <select
              value={locale}
              onChange={(e) => {
                handleLocaleChange(e.target.value);
                setMobileOpen(false);
              }}
              className="appearance-none bg-transparent text-sm font-medium cursor-pointer pr-4 outline-none flex-1"
            >
              {SUPPORTED_LOCALES.map((loc) => (
                <option key={loc} value={loc}>{LOCALE_LABELS[loc]}</option>
              ))}
            </select>
          </div>
          <div className="mt-3 pt-3 border-t border-border">
            <GitHubStarButton className="text-xs px-3 py-1.5" />
          </div>
        </div>
      )}
    </nav>
  );
}
