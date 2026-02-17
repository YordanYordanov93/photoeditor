import { Page, Locator, expect } from '@playwright/test';

export abstract class BasePage {
  protected readonly page: Page;
  constructor(page: Page) { this.page = page; }

  async goto(path = '/') {
    await this.page.goto(path, { waitUntil: 'domcontentloaded' });
  }

  getByTid(testId: string): Locator {
    return this.page.getByTestId(testId);
  }

  async safeClick(locator: Locator) {
    await expect(locator).toBeVisible();
    await locator.click();
  }

  async type(locator: Locator, text: string, clear = true) {
    await expect(locator).toBeVisible();
    if (clear) await locator.fill('');
    await locator.fill(text);
  }

  async assertVisible(locator: Locator) {
    await expect(locator).toBeVisible();
  }
}
