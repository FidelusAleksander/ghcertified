/**
 * Question data loaded from markdown files via the quizdown parser.
 *
 * This is the app-specific glue layer: it knows about certification types,
 * directory structure, and how to map parsed questions to our domain model.
 */

import { join } from "node:path";
import { readdirSync, existsSync } from "node:fs";
import { parseDirectory } from "./quizdown";

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
  answers: { id: string; text: string; isCorrect: boolean }[];
  isMultiSelect: boolean;
  hint?: string;
  codeBlock?: string;
}

export interface CertInfo {
  cert: CertificationType;
  title: string;
  questionCount: number;
}

// ── Constants ───────────────────────────────────────────────────────

const CERT_TITLES: Record<CertificationType, string> = {
  actions: "GitHub Actions",
  admin: "GitHub Administration",
  advanced_security: "GitHub Advanced Security",
  copilot: "GitHub Copilot",
  foundations: "GitHub Foundations",
};

const VALID_CERTS: CertificationType[] = [
  "actions", "admin", "advanced_security", "copilot", "foundations",
];

const CONTENT_DIR = join(process.cwd(), "..", "content", "en", "questions");

// ── Loader (cached) ─────────────────────────────────────────────────

let _cache: Question[] | null = null;

function loadAll(): Question[] {
  if (_cache) return _cache;

  const all: Question[] = [];
  for (const cert of VALID_CERTS) {
    const dir = join(CONTENT_DIR, cert);
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
      });
    }
  }

  _cache = all;
  return all;
}

// ── Public API ──────────────────────────────────────────────────────

export function getQuestionsByCert(cert: CertificationType): Question[] {
  return loadAll().filter((q) => q.cert === cert);
}

export const CERT_CATALOG: CertInfo[] = (() => {
  const all = loadAll();
  return VALID_CERTS.map((cert) => ({
    cert,
    title: CERT_TITLES[cert],
    questionCount: all.filter((q) => q.cert === cert).length,
  }));
})();

export function getCertInfo(cert: CertificationType): CertInfo | undefined {
  return CERT_CATALOG.find((c) => c.cert === cert);
}

