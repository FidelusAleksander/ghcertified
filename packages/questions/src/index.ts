/**
 * quizdown — Parse markdown quiz files into structured objects.
 *
 * Supports YAML frontmatter, checkbox answers (- [x] / - [ ]),
 * code blocks, and hint blockquotes.
 */

export { parseQuestionFile } from "./parser.js";
export { parseDirectory } from "./loader.js";
export type { ParseDirOptions } from "./loader.js";
export type { Question, AnswerOption } from "./types.js";
