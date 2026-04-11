/**
 * Directory loader — reads all .md files from a directory (optionally recursive)
 * and parses each into a Question object.
 */
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
export declare function parseDirectory(dir: string, options?: ParseDirOptions): Question[];
//# sourceMappingURL=loader.d.ts.map