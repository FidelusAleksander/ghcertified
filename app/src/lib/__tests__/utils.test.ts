/**
 * Unit tests for utility functions.
 */

import { describe, it, expect } from "vitest";
import { shuffle } from "@/lib/utils";
import { isValidLocale, localePath, SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/locales";

describe("shuffle", () => {
  it("returns array of same length", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result).toHaveLength(input.length);
  });

  it("does not mutate original array", () => {
    const input = [1, 2, 3, 4, 5];
    const copy = [...input];
    shuffle(input);
    expect(input).toEqual(copy);
  });

  it("contains all original elements", () => {
    const input = [1, 2, 3, 4, 5];
    const result = shuffle(input);
    expect(result.sort()).toEqual([...input].sort());
  });

  it("handles empty array", () => {
    expect(shuffle([])).toEqual([]);
  });

  it("handles single element", () => {
    expect(shuffle([42])).toEqual([42]);
  });
});

describe("isValidLocale", () => {
  it("returns true for all supported locales", () => {
    for (const locale of SUPPORTED_LOCALES) {
      expect(isValidLocale(locale)).toBe(true);
    }
  });

  it("returns false for unsupported locale", () => {
    expect(isValidLocale("fr")).toBe(false);
    expect(isValidLocale("")).toBe(false);
    expect(isValidLocale("EN")).toBe(false);
  });
});

describe("localePath", () => {
  it("prefixes path with locale", () => {
    expect(localePath("en", "/practice-tests")).toBe("/en/practice-tests");
  });

  it("adds leading slash if missing", () => {
    expect(localePath("es", "practice-tests")).toBe("/es/practice-tests");
  });
});

describe("DEFAULT_LOCALE", () => {
  it("is English", () => {
    expect(DEFAULT_LOCALE).toBe("en");
  });
});
