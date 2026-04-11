/**
 * quizdown — Parse markdown quiz files into structured objects.
 *
 * Supports YAML frontmatter, checkbox answers (- [x] / - [ ]),
 * code blocks, and hint blockquotes.
 */

export { parseQuestionFile } from "./parser";
export { parseDirectory } from "./loader";
export type { ParseDirOptions } from "./loader";
export type { Question, AnswerOption } from "./types";
