import { test, expect } from "@playwright/test";

test("landing page loads", async ({ page }) => {
  await page.goto("/en/");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("h1")).toBeVisible();
  await expect(page.getByRole("link", { name: /practice test/i })).toBeVisible();
});

test("practice tests list loads", async ({ page }) => {
  await page.goto("/en/practice-tests/");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.locator("h2")).toBeVisible();
  await expect(page.locator("h3").first()).toBeVisible();
});

test("individual practice test loads", async ({ page }) => {
  await page.goto("/en/practice-tests/foundations");
  await expect(page.locator("main")).toBeVisible();
  await expect(
    page.getByRole("radiogroup").or(page.getByRole("group")),
  ).toBeVisible();
});

test("challenge hub loads", async ({ page }) => {
  await page.goto("/en/challenges/");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByText(/gauntlet/i).first()).toBeVisible();
  await expect(page.getByText(/time trial/i).first()).toBeVisible();
});

test("leaderboard page loads", async ({ page }) => {
  await page.goto("/en/challenges/leaderboard/");
  await expect(page.locator("main")).toBeVisible();
  await expect(page.getByRole("heading", { name: /leaderboard/i })).toBeVisible();
});
