/**
 * Question data loaded from markdown files via the quizdown parser.
 *
 * This is the app-specific glue layer: it knows about certification types,
 * directory structure, and how to map parsed questions to our domain model.
 * Supports multiple locales — questions live in `questions/<locale>/<cert>/`.
 */

import { join } from "node:path";
import { existsSync } from "node:fs";
import { parseDirectory } from "mdquiz";

// ── App-specific types ──────────────────────────────────────────────

export type CertificationType =
  | "actions"
  | "admin"
  | "advanced_security"
  | "copilot"
  | "foundations";

export interface Question {
  id: string;
  cert: CertificationType;
  question: string;
  answers: { id: string; text: string; isCorrect: boolean; explanation?: string }[];
  isMultiSelect: boolean;
  hint?: string;
  codeBlock?: string;
  documentation?: string;
}

export interface CertInfo {
  cert: CertificationType;
  title: string;
  questionCount: number;
}

// ── Locales ─────────────────────────────────────────────────────────

export {
  SUPPORTED_LOCALES,
  DEFAULT_LOCALE,
  isValidLocale,
} from "./locales";
export type { SupportedLocale } from "./locales";
export { parseSupportedLocale } from "./locales";

import { DEFAULT_LOCALE } from "./locales";
import type { SupportedLocale } from "./locales";

// ── Constants ───────────────────────────────────────────────────────

export const CERT_TITLES: Record<CertificationType, string> = {
  actions: "GitHub Actions (GH-200)",
  admin: "GitHub Administration (GH-100)",
  advanced_security: "GitHub Advanced Security (GH-500)",
  copilot: "GitHub Copilot (GH-300)",
  foundations: "GitHub Foundations (GH-900)",
};

const VALID_CERTS: CertificationType[] = [
  "actions", "admin", "advanced_security", "copilot", "foundations",
];

export { VALID_CERTS };

function contentDir(locale: SupportedLocale): string {
  return join(process.cwd(), "..", "questions", locale);
}

// ── Loader (cached per locale) ──────────────────────────────────────

const _cache = new Map<SupportedLocale, Question[]>();

function loadAll(locale: SupportedLocale): Question[] {
  const cached = _cache.get(locale);
  if (cached) return cached;

  const base = contentDir(locale);
  const all: Question[] = [];
  for (const cert of VALID_CERTS) {
    const dir = join(base, cert);
    if (!existsSync(dir)) continue;

    const raw = parseDirectory(dir, { filePrefix: "question-" });
    for (const q of raw) {
      all.push({
        id: `${cert}-${q.id.replace("question-", "")}`,
        cert,
        question: q.question,
        answers: q.answers,
        isMultiSelect: q.isMultiSelect,
        hint: q.hint,
        codeBlock: q.codeBlock,
        documentation: q.frontmatter.documentation as string | undefined,
      });
    }
  }

  _cache.set(locale, all);
  return all;
}

// ── Public API ──────────────────────────────────────────────────────

export function getAllQuestions(
  locale: SupportedLocale = DEFAULT_LOCALE,
): Question[] {
  return loadAll(locale);
}

export function getQuestionsByCert(
  cert: CertificationType,
  locale: SupportedLocale = DEFAULT_LOCALE,
): Question[] {
  return loadAll(locale).filter((q) => q.cert === cert);
}

export function getCertCatalog(
  locale: SupportedLocale = DEFAULT_LOCALE,
): CertInfo[] {
  const all = loadAll(locale);
  return VALID_CERTS.map((cert) => ({
    cert,
    title: CERT_TITLES[cert],
    questionCount: all.filter((q) => q.cert === cert).length,
  }));
}

export function getCertInfo(
  cert: CertificationType,
  locale: SupportedLocale = DEFAULT_LOCALE,
): CertInfo | undefined {
  return getCertCatalog(locale).find((c) => c.cert === cert);
}

