import { test, expect } from "@playwright/test";

test.describe("Homepage", () => {
  test("loads and displays hero section", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/GitHub Certified/);
    // Hero headline visible
    await expect(
      page.getByRole("heading", { level: 1 })
    ).toBeVisible();
  });

  test("displays certification track cards", async ({ page }) => {
    await page.goto("/en");
    // Should have cert cards linking to practice tests
    const certCards = page.locator('a[href*="/practice-tests/"]');
    await expect(certCards.first()).toBeVisible();
    const count = await certCards.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test("navigates to practice tests from hero CTA", async ({ page }) => {
    await page.goto("/en");
    await page.getByRole("link", { name: /start practicing/i }).click();
    await expect(page).toHaveURL(/\/en\/practice-tests/);
  });
});
