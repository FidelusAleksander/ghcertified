/**
 * Markdown question parser.
 *
 * Parses question files with YAML frontmatter and checkbox-list answers.
 * Supports code blocks in both question body and answer text.
 *
 * Expected format:
 * ---
 * title: "Question 001"
 * question: "What is X?"
 * ---
 *
 * > https://docs.github.com/...  (optional hint)
 *
 * ```yaml                        (optional code block context)
 * some: code
 * ```
 *
 * - [x] Correct answer
 * - [ ] Wrong answer
 * > optional explanation
 */

import matter from "gray-matter";
import type { Question } from "./types";

/** Matches an answer line: `- [x] text` or `1. [x] text` */
const ANSWER_RE = /^(?:\d+\.|-)\ \[([xX ])\]\ (.*)$/;

/** Matches a blockquote line */
const BLOCKQUOTE_RE = /^>\ ?(.*)$/;

/** Matches a code fence open/close */
const FENCE_RE = /^```/;

/**
 * Parse a markdown string into a Question object.
 *
 * Expected format: YAML frontmatter with a `question` field,
 * followed by optional hints (blockquotes), optional code blocks,
 * and checkbox-list answers (`- [x]` or `- [ ]`).
 *
 * @param content - Raw markdown string
 * @param id - Unique identifier for this question (e.g. derived from filename)
 */
export function parseQuestionFile(content: string, id: string): Question {
  const { data, content: body } = matter(content);
  const questionText = data.question as string;

  if (!questionText) {
    throw new Error(`Missing "question" in frontmatter for ${id}`);
  }

  // Split body into lines and identify answer boundaries.
  // An answer starts at a checkbox line and includes all subsequent lines
  // (code blocks, explanations) until the next checkbox line or EOF.
  // Everything before the first answer is the "preamble" (hints, code context).

  const lines = body.split("\n");

  // Find all answer start indices (respecting code fences)
  const answerStarts: number[] = [];
  let inFence = false;
  for (let i = 0; i < lines.length; i++) {
    if (FENCE_RE.test(lines[i])) {
      inFence = !inFence;
      continue;
    }
    if (!inFence && ANSWER_RE.test(lines[i])) {
      answerStarts.push(i);
    }
  }

  if (answerStarts.length === 0) {
    throw new Error(`No answers found in ${id}`);
  }

  // Preamble: everything before first answer
  const preambleLines = lines.slice(0, answerStarts[0]);
  let hint: string | undefined;
  const codeBlockLines: string[] = [];
  let inPreambleFence = false;

  for (const line of preambleLines) {
    if (FENCE_RE.test(line)) {
      inPreambleFence = !inPreambleFence;
      codeBlockLines.push(line);
      continue;
    }
    if (inPreambleFence) {
      codeBlockLines.push(line);
      continue;
    }
    const bqMatch = line.match(BLOCKQUOTE_RE);
    if (bqMatch && bqMatch[1].trim()) {
      hint = bqMatch[1].trim();
    }
  }

  const codeBlock = codeBlockLines.length > 0
    ? codeBlockLines.join("\n")
    : undefined;

  // Parse each answer block
  interface RawAnswer {
    isCorrect: boolean;
    text: string;
  }

  const answers: RawAnswer[] = [];

  for (let a = 0; a < answerStarts.length; a++) {
    const startIdx = answerStarts[a];
    const endIdx = a + 1 < answerStarts.length ? answerStarts[a + 1] : lines.length;
    const answerLine = lines[startIdx];
    const match = answerLine.match(ANSWER_RE)!;
    const isCorrect = match[1].toLowerCase() === "x";
    let text = match[2].trim();

    // Collect continuation lines (code blocks, etc.) — skip trailing blockquotes (explanations)
    const continuation: string[] = [];
    let contFence = false;
    for (let j = startIdx + 1; j < endIdx; j++) {
      const l = lines[j];
      if (FENCE_RE.test(l)) {
        contFence = !contFence;
        continuation.push(l);
        continue;
      }
      if (contFence) {
        continuation.push(l);
        continue;
      }
      // Skip blockquotes after answer (explanations)
      if (BLOCKQUOTE_RE.test(l)) continue;
      // Skip empty lines
      if (l.trim() === "") continue;
      // Other content appended
      continuation.push(l);
    }

    if (continuation.length > 0) {
      text += "\n" + continuation.join("\n");
    }

    answers.push({ isCorrect, text });
  }

  const correctCount = answers.filter((a) => a.isCorrect).length;

  return {
    id,
    question: questionText,
    answers: answers.map((a, i) => ({
      id: `a${i + 1}`,
      text: a.text,
      isCorrect: a.isCorrect,
    })),
    isMultiSelect: correctCount > 1,
    hint,
    codeBlock,
    frontmatter: data,
  };
}
