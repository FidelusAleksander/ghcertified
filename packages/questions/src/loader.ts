/**
 * Directory loader — reads all .md files from a directory (optionally recursive)
 * and parses each into a Question object.
 */

import { readFileSync, readdirSync, statSync } from "node:fs";
import { join, basename } from "node:path";
import { parseQuestionFile } from "./parser.js";
import type { Question } from "./types.js";

export interface ParseDirOptions {
  /** Walk subdirectories recursively. Default: false */
  recursive?: boolean;
  /** Glob-like prefix filter for filenames. Default: none (all .md files) */
  filePrefix?: string;
}

/**
 * Parse all markdown question files in a directory.
 *
 * Each .md file is parsed via `parseQuestionFile`. The filename (without
 * extension) becomes the question ID.
 *
 * @param dir - Path to directory containing .md files
 * @param options - Optional config for recursion and filtering
 * @returns Array of parsed questions
 */
export function parseDirectory(
  dir: string,
  options: ParseDirOptions = {},
): Question[] {
  const { recursive = false, filePrefix } = options;
  const questions: Question[] = [];

  const entries = readdirSync(dir);
  for (const entry of entries.sort()) {
    const fullPath = join(dir, entry);
    const stat = statSync(fullPath);

    if (stat.isDirectory() && recursive) {
      questions.push(...parseDirectory(fullPath, options));
      continue;
    }

    if (!entry.endsWith(".md")) continue;
    if (entry.startsWith("_")) continue; // skip _index.md etc
    if (filePrefix && !entry.startsWith(filePrefix)) continue;

    const id = basename(entry, ".md");
    const content = readFileSync(fullPath, "utf-8");

    try {
      questions.push(parseQuestionFile(content, id));
    } catch (err) {
      console.warn(`Skipping ${fullPath}: ${(err as Error).message}`);
    }
  }

  return questions;
}
