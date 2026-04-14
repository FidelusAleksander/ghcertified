/**
 * Unit tests for utility functions.
 */

import { describe, it, expect } from "vitest";
import { shuffle } from "@/lib/utils";
import { isValidLocale, localePath, SUPPORTED_LOCALES, DEFAULT_LOCALE } from "@/lib/locales";
import { normalizeDocUrl } from "./test-utils";

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

describe("normalizeDocUrl", () => {
  it("returns undefined for undefined input", () => {
    expect(normalizeDocUrl(undefined)).toBeUndefined();
  });

  it("normalizes locale prefix in docs.github.com URLs", () => {
    expect(
      normalizeDocUrl("https://docs.github.com/pt/code-security/foo"),
    ).toBe("https://docs.github.com/en/code-security/foo");
  });

  it("keeps English URLs unchanged", () => {
    const url = "https://docs.github.com/en/actions/overview";
    expect(normalizeDocUrl(url)).toBe(url);
  });

  it("strips leading non-URL characters from translation artifacts", () => {
    expect(
      normalizeDocUrl("„https://docs.github.com/en/actions/foo"),
    ).toBe("https://docs.github.com/en/actions/foo");
  });

  it("handles enterprise-cloud locale prefix", () => {
    expect(
      normalizeDocUrl(
        "https://docs.github.com/ja/enterprise-cloud@latest/auth",
      ),
    ).toBe("https://docs.github.com/en/enterprise-cloud@latest/auth");
  });
});
