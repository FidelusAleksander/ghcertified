"use client";

import { createContext, useContext } from "react";
import type { SupportedLocale } from "@/lib/locales";

const LocaleContext = createContext<SupportedLocale>("en");

export function LocaleProvider({
  locale,
  children,
}: {
  locale: SupportedLocale;
  children: React.ReactNode;
}) {
  return (
    <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>
  );
}

export function useLocale(): SupportedLocale {
  return useContext(LocaleContext);
}

/** Build a locale-prefixed path. */
export function localePath(locale: SupportedLocale, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
