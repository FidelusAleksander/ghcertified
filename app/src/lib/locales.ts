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

export const LOCALE_FLAGS: Record<SupportedLocale, string> = {
  en: "🇬🇧",
  es: "🇪🇸",
  ja: "🇯🇵",
  pl: "🇵🇱",
  pt: "🇧🇷",
};

/**
 * Validate and narrow a string to SupportedLocale.
 * Throws if the value is not a supported locale.
 */
export function parseSupportedLocale(value: string): SupportedLocale {
  if (isValidLocale(value)) return value;
  throw new Error(`Unsupported locale: "${value}"`);
}

/** Build a locale-prefixed path. */
export function localePath(locale: string, path: string): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${clean}`;
}
