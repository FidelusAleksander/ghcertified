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
import type { Question } from "./types.js";
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
export declare function parseQuestionFile(content: string, id: string): Question;
//# sourceMappingURL=parser.d.ts.map