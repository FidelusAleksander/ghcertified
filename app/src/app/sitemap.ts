import type { MetadataRoute } from "next";
import { SUPPORTED_LOCALES } from "@/lib/locales";

export const dynamic = "force-static";

const BASE_URL = "https://ghcertified.com";

const CERTS = [
  "actions",
  "admin",
  "advanced_security",
  "copilot",
  "foundations",
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  // Static paths (no cert param)
  const staticPaths = ["/", "/practice-tests"];

  for (const path of staticPaths) {
    for (const locale of SUPPORTED_LOCALES) {
      const url = `${BASE_URL}/${locale}${path}`;
      const languages: Record<string, string> = {};
      for (const loc of SUPPORTED_LOCALES) {
        languages[loc] = `${BASE_URL}/${loc}${path}`;
      }
      languages["x-default"] = `${BASE_URL}/en${path}`;

      entries.push({
        url,
        lastModified: now,
        changeFrequency: "weekly",
        priority: path === "/" ? 1.0 : 0.8,
        alternates: { languages },
      });
    }
  }

  // Cert-specific paths
  const certPaths = ["/practice-tests", "/questions"];

  for (const base of certPaths) {
    for (const cert of CERTS) {
      for (const locale of SUPPORTED_LOCALES) {
        const path = `${base}/${cert}`;
        const url = `${BASE_URL}/${locale}${path}`;
        const languages: Record<string, string> = {};
        for (const loc of SUPPORTED_LOCALES) {
          languages[loc] = `${BASE_URL}/${loc}${path}`;
        }
        languages["x-default"] = `${BASE_URL}/en${path}`;

        entries.push({
          url,
          lastModified: now,
          changeFrequency: "weekly",
          priority: 0.7,
          alternates: { languages },
        });
      }
    }
  }

  return entries;
}
