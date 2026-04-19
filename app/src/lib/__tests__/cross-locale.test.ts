/**
 * Cross-locale consistency tests.
 *
 * For every translated question that also exists in English, verify:
 * - Same number of answers
 * - Same correct/incorrect pattern (which indices are correct)
 * - Same documentation link
 */

import { describe, it, expect } from "vitest";
import { join } from "node:path";
import { readdirSync, existsSync } from "node:fs";
import { parseDirectory } from "mdquiz";

const QUESTIONS_ROOT = join(__dirname, "../../../../questions");

const CERTS = [
  "actions",
  "admin",
  "advanced_security",
  "copilot",
  "foundations",
] as const;

const locales = readdirSync(QUESTIONS_ROOT).filter(
  (entry) =>
    !entry.startsWith(".") &&
    !entry.endsWith(".md") &&
    existsSync(join(QUESTIONS_ROOT, entry)),
);

const nonEnglishLocales = locales.filter((l) => l !== "en");

interface ParsedQuestion {
  id: string;
  question: string;
  answers: { text: string; isCorrect: boolean }[];
  isMultiSelect: boolean;
  hint?: string;
  frontmatter: Record<string, unknown>;
}

function loadQuestions(locale: string, cert: string): Map<string, ParsedQuestion> {
  const dir = join(QUESTIONS_ROOT, locale, cert);
  if (!existsSync(dir)) return new Map();

  const raw = parseDirectory(dir, { filePrefix: "question-", strict: true }) as ParsedQuestion[];
  const map = new Map<string, ParsedQuestion>();
  for (const q of raw) {
    map.set(q.id, q);
  }
  return map;
}

describe("cross-locale consistency", () => {
  for (const cert of CERTS) {
    const enQuestions = loadQuestions("en", cert);
    if (enQuestions.size === 0) continue;

    for (const locale of nonEnglishLocales) {
      const localeQuestions = loadQuestions(locale, cert);
      if (localeQuestions.size === 0) continue;

      describe(`${locale}/${cert}`, () => {
        it("all questions match English answer structure", () => {
          for (const [qId, localeQ] of localeQuestions) {
            const enQ = enQuestions.get(qId);
            if (!enQ) continue;

            expect(
              localeQ.answers.length,
              `${qId} answer count mismatch`,
            ).toBe(enQ.answers.length);

            const enPattern = enQ.answers.map((a) => a.isCorrect);
            const localePattern = localeQ.answers.map((a) => a.isCorrect);
            expect(
              localePattern,
              `${qId} correct/incorrect pattern mismatch`,
            ).toEqual(enPattern);
          }
        });

        it("all questions match English documentation links", () => {
          for (const [qId, localeQ] of localeQuestions) {
            const enQ = enQuestions.get(qId);
            if (!enQ) continue;

            const enDoc = enQ.frontmatter.documentation as string | undefined;
            const localeDoc = localeQ.frontmatter.documentation as string | undefined;

            if (enDoc && localeDoc) {
              expect(
                localeDoc,
                `${qId} documentation link mismatch`,
              ).toBe(enDoc);
            } else {
              expect(
                !!localeDoc,
                `${qId} documentation link presence mismatch`,
              ).toBe(!!enDoc);
            }
          }
        });
      });
    }
  }
});
