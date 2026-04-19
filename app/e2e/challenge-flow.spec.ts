import { test, expect } from "@playwright/test";

/** Select enough answers to enable the Confirm button. */
async function selectAnswers(page: import("@playwright/test").Page) {
  const radios = page.getByRole("radio");
  const checkboxes = page.getByRole("checkbox");

  if ((await radios.count()) > 0) {
    // Single-select: pick the first radio
    await radios.first().click();
  } else {
    // Multi-select: click all checkboxes to meet the required count
    const count = await checkboxes.count();
    for (let i = 0; i < count; i++) {
      await checkboxes.nth(i).click();
    }
  }
}

test.describe("challenge modes", () => {
  test("gauntlet mode starts and shows gameplay UI", async ({ page }) => {
    await page.goto("/en/challenges/gauntlet/");
    await expect(page.locator("main")).toBeVisible();

    // Question/answer UI visible
    const answerList = page
      .getByRole("radiogroup")
      .or(page.getByRole("group"));
    await expect(answerList).toBeVisible({ timeout: 15_000 });

    // Lives indicator — Heart SVGs rendered by LivesDisplay
    const hearts = page.locator("svg.text-destructive.fill-destructive");
    await expect(hearts.first()).toBeVisible();
  });

  test("gauntlet mode - can answer a question", async ({ page }) => {
    await page.goto("/en/challenges/gauntlet/");

    const answerList = page
      .getByRole("radiogroup")
      .or(page.getByRole("group"));
    await expect(answerList).toBeVisible({ timeout: 15_000 });

    await selectAnswers(page);

    const confirmBtn = page.getByRole("button", { name: /confirm/i });
    await expect(confirmBtn).toBeEnabled({ timeout: 5_000 });
    await confirmBtn.click();

    // After confirming the page transitions: correct → new answers, wrong → review
    await page.waitForFunction(
      () => {
        const hasAnswers = document.querySelector('[role="radiogroup"], [role="group"]');
        const hasNextBtn = [...document.querySelectorAll("button")].some((b) =>
          /next question/i.test(b.textContent ?? ""),
        );
        return hasAnswers || hasNextBtn;
      },
      { timeout: 10_000 },
    );
  });

  test("time trial mode starts with timer visible", async ({ page }) => {
    // Use mobile viewport so the lg:hidden timer bar is visible
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto("/en/challenges/time-trial/");
    await expect(page.locator("main")).toBeVisible();

    // Question/answer UI visible
    const answerList = page
      .getByRole("radiogroup")
      .or(page.getByRole("group"));
    await expect(answerList).toBeVisible({ timeout: 15_000 });

    // Timer display — tabular-nums span with time text
    const timerText = page.locator(".tabular-nums").filter({
      hasText: /\d+:\d{2}|\d+s/,
    });
    await expect(timerText.first()).toBeVisible({ timeout: 10_000 });
  });

  test("time trial mode - can answer a question", async ({ page }) => {
    await page.goto("/en/challenges/time-trial/");

    const answerList = page
      .getByRole("radiogroup")
      .or(page.getByRole("group"));
    await expect(answerList).toBeVisible({ timeout: 15_000 });

    await selectAnswers(page);

    const confirmBtn = page.getByRole("button", { name: /confirm/i });
    await expect(confirmBtn).toBeEnabled({ timeout: 5_000 });
    await confirmBtn.click();

    // Wait for page transition after confirming
    await page.waitForFunction(
      () => {
        const hasAnswers = document.querySelector('[role="radiogroup"], [role="group"]');
        const hasNextBtn = [...document.querySelectorAll("button")].some((b) =>
          /next question/i.test(b.textContent ?? ""),
        );
        return hasAnswers || hasNextBtn;
      },
      { timeout: 10_000 },
    );
  });
});
