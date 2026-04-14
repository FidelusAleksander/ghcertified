/**
 * Normalize docs.github.com URLs by stripping the locale prefix
 * and trimming stray punctuation from translation artifacts.
 * e.g. "https://docs.github.com/pt/foo" → "https://docs.github.com/en/foo"
 */
export function normalizeDocUrl(url: string | undefined): string | undefined {
  if (!url) return url;
  // Strip non-URL characters that translation tools may introduce (e.g. „ or ")
  const trimmed = url.replace(/^[^h]+/, "").replace(/[^a-zA-Z0-9/_#.\-:]+$/, "");
  return trimmed.replace(
    /^(https:\/\/docs\.github\.com)\/[a-z]{2}(-[a-z]+)?\//,
    "$1/en/",
  );
}
