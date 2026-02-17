import { BasePage } from './BasePage';
import { Locator, expect } from '@playwright/test';
import { TID } from '../utils/testIds';

export class DashboardPage extends BasePage {
  private welcome!: Locator;

  async init() {
    this.welcome = this.getByTid(TID.dashboardWelcome);
  }

  async assertWelcome() {
    await this.init();
    await expect(this.welcome).toContainText('Welcome');
  }
}
