/**
 * Shared SEO helpers for generating per-page metadata.
 *
 * Centralises hreflang alternate generation, canonical URLs,
 * and OG defaults so every page stays consistent.
 */

import type { Metadata } from "next";
import { SUPPORTED_LOCALES } from "@/lib/locales";

const BASE_URL = "https://ghcertified.com";

/**
 * Build hreflang alternates + canonical for a given path.
 * @param locale  Current page locale
 * @param path    Path WITHOUT locale prefix (e.g. "/practice-tests/actions")
 */
export function buildAlternates(
  locale: string,
  path: string,
): Metadata["alternates"] {
  const clean = path.startsWith("/") ? path : `/${path}`;
  const languages: Record<string, string> = {};

  for (const loc of SUPPORTED_LOCALES) {
    languages[loc] = `${BASE_URL}/${loc}${clean}`;
  }
  // x-default points to English variant
  languages["x-default"] = `${BASE_URL}/en${clean}`;

  return {
    canonical: `${BASE_URL}/${locale}${clean}`,
    languages,
  };
}

/** Standard OG image shared across all pages. */
export const OG_IMAGE = { url: "/opengraph.png", width: 1200, height: 630 };

/** OG image for challenge mode pages. */
export const CHALLENGES_OG_IMAGE = { url: "/images/opengraph-challenges.png", width: 1200, height: 630 };
