"use client";

/**
 * Navbar — top navigation bar.
 *
 * "use client" because usePathname() and mobile menu state.
 * Sticky top with background, logo, nav links, and action buttons.
 * Collapses to hamburger menu on mobile with smooth animation.
 * Shows user avatar + dropdown when authenticated, sign-in button when not.
 */

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations, useLocale } from "next-intl";
import { cn } from "@/lib/utils";
import { CheckCircle, Menu, X, LogOut } from "lucide-react";
import { GitHubStarButton } from "@/components/GitHubStarButton";
import { GitHubMark } from "@/components/GitHubMark";
import { LanguagePicker } from "@/components/LanguagePicker";
import { useAuth } from "@/components/AuthProvider";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

/** Check if a nav link is active based on current pathname. */
function isLinkActive(href: string, pathname: string, locale: string): boolean {
  return href === `/${locale}`
    ? pathname === `/${locale}` || pathname === `/${locale}/`
    : pathname.startsWith(href);
}

/** User avatar dropdown — shown when authenticated. */
function UserMenu() {
  const { user, signOut } = useAuth();
  const t = useTranslations("Nav");

  if (!user) return null;

  const avatarUrl = user.user_metadata?.avatar_url as string | undefined;
  const username = (user.user_metadata?.user_name ?? user.email ?? "") as string;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        render={
          <button
            type="button"
            className="rounded-full focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
            aria-label={t("userMenu")}
          />
        }
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={avatarUrl ?? `https://github.com/${username}.png?size=64`}
          alt=""
          className="size-8 rounded-full border border-border"
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="min-w-[160px]">
        <div className="px-2 py-1.5 text-sm font-medium text-foreground truncate">
          {username}
        </div>
        <DropdownMenuItem onClick={signOut} className="cursor-pointer">
          <LogOut className="size-4 mr-2" />
          {t("signOut")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

/** Sign-in button — shown when not authenticated. */
function SignInButton({ className }: { className?: string }) {
  const { available, signIn, loading } = useAuth();
  const t = useTranslations("Nav");

  if (!available) return null;

  return (
    <Button
      variant="outline"
      size="lg"
      onClick={() => void signIn()}
      disabled={loading}
      className={cn("rounded-[9px] text-[13px] font-semibold", className)}
    >
      <GitHubMark className="size-3.5" />
      {t("signIn")}
    </Button>
  );
}

export function Navbar() {
  const pathname = usePathname();
  const locale = useLocale();
  const t = useTranslations("Nav");
  const { available, user, loading } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { href: `/${locale}/practice-tests`, label: t("practiceTests") },
    { href: `/${locale}/challenges`, label: t("challenges") },
  ] as const;

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
            const isActive = isLinkActive(href, pathname, locale);
            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "relative rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-primary" />
                )}
              </Link>
            );
          })}
        </div>

        {/* Desktop right-side actions */}
        <div className="hidden lg:flex items-center gap-3 ml-auto">
          <LanguagePicker />
          <GitHubStarButton />
          {available && !loading && (user ? <UserMenu /> : <SignInButton />)}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden ml-auto p-2 -mr-2 text-foreground rounded-md focus-visible:ring-2 focus-visible:ring-ring/50 focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? t("closeMenu") : t("openMenu")}
        >
          {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </div>

      {/* Mobile dropdown menu — animated with grid-rows */}
      <div
        className={cn(
          "lg:hidden grid transition-[grid-template-rows] duration-200 ease-out",
          mobileOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-border bg-card px-4 pb-4 pt-2">
            <div className="flex flex-col gap-1">
              {navLinks.map(({ href, label }) => {
                const isActive = isLinkActive(href, pathname, locale);
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
            <div className="mt-3 pt-3 border-t border-border px-1">
              <LanguagePicker className="w-full justify-between" />
            </div>
            <div className="mt-3 pt-3 border-t border-border">
              <GitHubStarButton className="w-full justify-between" />
            </div>
            {/* Mobile auth */}
            {available && !loading && (
              <div className="mt-3 pt-3 border-t border-border">
                {user ? (
                  <UserMenu />
                ) : (
                  <SignInButton className="w-full" />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
