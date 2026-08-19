import { expect, test } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.getByRole("status", { name: "Loading portfolio" }).waitFor({ state: "detached" });
});

test("small screens have no horizontal overflow", async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 568 });

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBe(dimensions.clientWidth);
});

test("skill highlights stay fully visible on tablet and mobile", async ({ page }) => {
  for (const viewport of [{ width: 1024, height: 768 }, { width: 390, height: 844 }]) {
    await page.setViewportSize(viewport);
    const chips = page.locator("#skills [data-skill-highlight]");
    const count = await chips.count();
    expect(count).toBe(7);

    for (let index = 0; index < count; index += 1) {
      const box = await chips.nth(index).boundingBox();
      expect(box.x).toBeGreaterThanOrEqual(0);
      expect(box.x + box.width).toBeLessThanOrEqual(viewport.width);
    }
  }
});

test("mobile navigation opens from an accessible menu button", async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.evaluate(() => scrollTo(0, 1000));

  const menuButton = page.locator('button[aria-controls="primary-navigation"]');
  await expect(menuButton).toBeVisible();
  await expect(menuButton).toHaveAttribute("aria-expanded", "false");
  await menuButton.click();
  await expect(menuButton).toHaveAttribute("aria-expanded", "true");
  await expect(page.getByRole("link", { name: "Projects" })).toBeVisible();
});

test("project actions never use placeholder hash links", async ({ page }) => {
  await expect(page.locator('#projects a[href="#"]')).toHaveCount(0);
});

test("back to top only appears after scrolling", async ({ page }) => {
  const button = page.getByRole("link", { name: "Back to top" });
  await expect(button).toBeHidden();

  await page.evaluate(() => scrollTo(0, 700));
  await expect(button).toBeVisible();
});
