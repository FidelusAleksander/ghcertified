/**
 * Locale constants — safe to import in both server and client components.
 * No Node.js dependencies.
 */

export const SUPPORTED_LOCALES = ["en", "es", "ja", "pl", "pt"] as const;
export type SupportedLocale = (typeof SUPPORTED_LOCALES)[number];
export const DEFAULT_LOCALE: SupportedLocale = "en";

export function isValidLocale(v: string): v is SupportedLocale {
  return (SUPPORTED_LOCALES as readonly string[]).includes(v);
}

export const LOCALE_LABELS: Record<SupportedLocale, string> = {
  en: "English",
  es: "Español",
  ja: "日本語",
  pl: "Polski",
  pt: "Português",
};
