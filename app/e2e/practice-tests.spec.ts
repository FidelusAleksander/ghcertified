import { test, expect } from "@playwright/test";

test.describe("Practice Tests Catalog", () => {
  test("loads and displays all certification tracks", async ({ page }) => {
    await page.goto("/en/practice-tests");
    await expect(
      page.getByRole("heading", { level: 2 })
    ).toBeVisible();
    // Each cert track should have a card
    const cards = page.locator('a[href*="/practice-tests/"]');
    await expect(cards.first()).toBeVisible();
    const count = await cards.count();
    expect(count).toBeGreaterThanOrEqual(5);
  });
});

test.describe("Practice Test Quiz", () => {
  test("loads actions quiz and shows questions", async ({ page }) => {
    await page.goto("/en/practice-tests/actions");
    // Should display quiz with question content
    await expect(page.locator("main")).toBeVisible();
    // Quiz should have answer options
    await expect(page.getByRole("button").first()).toBeVisible();
  });

  test("can interact with quiz - select answer and navigate", async ({
    page,
  }) => {
    await page.goto("/en/practice-tests/actions");
    // Wait for quiz to fully render
    await page.waitForLoadState("networkidle");
    // Click an answer option (radio or checkbox buttons)
    const options = page.locator('[role="radio"], [role="checkbox"]');
    if ((await options.count()) > 0) {
      await options.first().click();
    }
    // Find and click submit/next button
    const submitButton = page.getByRole("button", {
      name: /submit|check|next/i,
    });
    if (await submitButton.isVisible()) {
      await submitButton.click();
    }
  });
});
