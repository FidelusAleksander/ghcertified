import { test, expect } from "@playwright/test";

test.describe("Questions Library", () => {
  test("loads questions index and shows certification links", async ({
    page,
  }) => {
    await page.goto("/en/questions");
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    // Cards linking to each cert's question set
    const certLinks = page.locator('a[href*="/questions/"]');
    await expect(certLinks.first()).toBeVisible();
    const count = await certLinks.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });

  test("loads questions for a specific certification", async ({ page }) => {
    await page.goto("/en/questions/actions");
    // Should show cert title and questions
    await expect(page.getByRole("heading", { level: 1 })).toBeVisible();
    await expect(page.locator("main")).toBeVisible();
  });
});
