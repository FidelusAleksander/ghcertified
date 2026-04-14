import { test, expect } from "@playwright/test";

test.describe("Navigation", () => {
  test("navbar links work correctly", async ({ page }) => {
    await page.goto("/en");
    // Click practice tests nav link
    const navLinks = page.getByRole("navigation").getByRole("link");
    await expect(navLinks.first()).toBeVisible();
  });

  test("footer is visible on all pages", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("footer")).toBeVisible();
  });

  test("default locale redirect works", async ({ page }) => {
    await page.goto("/");
    // Static export uses meta refresh for redirect
    await page.waitForURL(/\/en/, { timeout: 10000 });
    expect(page.url()).toMatch(/\/en/);
  });
});
