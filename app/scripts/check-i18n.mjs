#!/usr/bin/env node

/**
 * Compares all locale JSON files against en.json (source of truth).
 * Reports missing keys (in en but not locale) and extra keys (in locale but not en).
 * Exits non-zero if any mismatches found.
 */

import { readFileSync, readdirSync } from "node:fs";
import { join, basename } from "node:path";

const MESSAGES_DIR = join(import.meta.dirname, "..", "messages");
const SOURCE_LOCALE = "en";

function getLeafPaths(obj, prefix = "") {
  const paths = [];
  for (const [key, value] of Object.entries(obj)) {
    const path = prefix ? `${prefix}.${key}` : key;
    if (value !== null && typeof value === "object" && !Array.isArray(value)) {
      paths.push(...getLeafPaths(value, path));
    } else {
      paths.push(path);
    }
  }
  return paths.sort();
}

const files = readdirSync(MESSAGES_DIR).filter((f) => f.endsWith(".json"));
const sourceFile = `${SOURCE_LOCALE}.json`;

if (!files.includes(sourceFile)) {
  console.error(`Source locale file ${sourceFile} not found in ${MESSAGES_DIR}`);
  process.exit(1);
}

const sourceData = JSON.parse(readFileSync(join(MESSAGES_DIR, sourceFile), "utf-8"));
const sourceKeys = new Set(getLeafPaths(sourceData));

let hasErrors = false;

for (const file of files) {
  if (file === sourceFile) continue;

  const data = JSON.parse(readFileSync(join(MESSAGES_DIR, file), "utf-8"));
  const localeKeys = new Set(getLeafPaths(data));

  const missing = [...sourceKeys].filter((k) => !localeKeys.has(k));
  const extra = [...localeKeys].filter((k) => !sourceKeys.has(k));

  if (missing.length > 0) {
    hasErrors = true;
    console.error(`\n${basename(file)}: ${missing.length} missing key(s)`);
    for (const k of missing) console.error(`  - ${k}`);
  }

  if (extra.length > 0) {
    hasErrors = true;
    console.error(`\n${basename(file)}: ${extra.length} extra key(s) (stale?)`);
    for (const k of extra) console.error(`  + ${k}`);
  }

  if (missing.length === 0 && extra.length === 0) {
    console.log(`${basename(file)}: ✓ all keys match`);
  }
}

if (hasErrors) {
  console.error("\ni18n check failed — locale files are out of sync with en.json");
  process.exit(1);
} else {
  console.log("\ni18n check passed — all locale files in sync");
}
