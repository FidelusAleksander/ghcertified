import { test, expect } from "@playwright/test";

test.describe("quiz flow", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/en/practice-tests/foundations");
    // Wait for quiz to hydrate (skeleton disappears, answer options appear)
    await page.getByRole("radiogroup", { name: /answer options/i }).or(
      page.getByRole("group", { name: /answer options/i })
    ).first().waitFor({ timeout: 15_000 });
  });

  test("can see question with answer options", async ({ page }) => {
    // Question header visible (e.g. "Question 1 of N")
    await expect(page.getByText(/question 1 of \d+/i)).toBeVisible();

    // Answer group present
    const answerGroup = page.getByRole("radiogroup", { name: /answer options/i }).or(
      page.getByRole("group", { name: /answer options/i })
    ).first();
    await expect(answerGroup).toBeVisible();

    // At least 2 answer options
    const options = answerGroup.getByRole("radio").or(answerGroup.getByRole("checkbox"));
    await expect(options).toHaveCount(await options.count());
    expect(await options.count()).toBeGreaterThanOrEqual(2);
  });

  test("can select an answer and navigate next", async ({ page }) => {
    // Select first answer option
    const answerGroup = page.getByRole("radiogroup", { name: /answer options/i }).or(
      page.getByRole("group", { name: /answer options/i })
    ).first();
    const firstOption = answerGroup.getByRole("radio").or(answerGroup.getByRole("checkbox")).first();
    await firstOption.click();

    // Verify it's selected
    await expect(firstOption).toHaveAttribute("aria-checked", "true");

    // Click "Next question" button (exact to avoid matching "Next question page")
    await page.getByRole("button", { name: "Next question", exact: true }).click();

    // Verify we moved to question 2
    await expect(page.getByText(/question 2 of \d+/i)).toBeVisible();
  });

  test("can navigate between questions", async ({ page }) => {
    // Select an answer on question 1
    const getAnswerGroup = () =>
      page.getByRole("radiogroup", { name: /answer options/i }).or(
        page.getByRole("group", { name: /answer options/i })
      ).first();

    await getAnswerGroup().getByRole("radio").or(getAnswerGroup().getByRole("checkbox")).first().click();

    // Go to question 2
    await page.getByRole("button", { name: "Next question", exact: true }).click();
    await expect(page.getByText(/question 2 of \d+/i)).toBeVisible();

    // Go back to question 1
    await page.getByRole("button", { name: "Previous", exact: true }).click();
    await expect(page.getByText(/question 1 of \d+/i)).toBeVisible();

    // Go forward again
    await page.getByRole("button", { name: "Next question", exact: true }).click();
    await expect(page.getByText(/question 2 of \d+/i)).toBeVisible();
  });

  test("can submit quiz and see results", async ({ page }) => {
    // Use ?questions=3 to limit quiz length for faster test
    await page.goto("/en/practice-tests/foundations?questions=3");
    await page.getByRole("radiogroup", { name: /answer options/i }).or(
      page.getByRole("group", { name: /answer options/i })
    ).first().waitFor({ timeout: 15_000 });

    // Answer 3 questions
    for (let i = 0; i < 3; i++) {
      const answerGroup = page.getByRole("radiogroup", { name: /answer options/i }).or(
        page.getByRole("group", { name: /answer options/i })
      ).first();
      const radios = answerGroup.getByRole("radio");
      const checkboxes = answerGroup.getByRole("checkbox");

      if (await checkboxes.count() > 0) {
        await checkboxes.first().click();
      } else {
        await radios.first().click();
      }

      if (i < 2) {
        await page.getByRole("button", { name: "Next question", exact: true }).click();
        await expect(page.getByText(new RegExp(`question ${i + 2} of 3`, "i"))).toBeVisible();
      }
    }

    // On last question, click "Submit Exam"
    await page.getByRole("button", { name: /submit exam/i }).first().click();

    // Confirmation dialog — click "Submit Exam"
    const dialog = page.getByRole("dialog");
    await expect(dialog).toBeVisible();
    await dialog.getByRole("button", { name: /submit exam/i }).click();

    // Results section appears with score
    await expect(page.getByText(/results/i).first()).toBeVisible();
    await expect(page.getByText(/\d+ of 3 correct/i)).toBeVisible();
  });
});
