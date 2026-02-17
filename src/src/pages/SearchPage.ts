import { BasePage } from './BasePage';
import { Locator, expect } from '@playwright/test';
import { TID } from '../utils/testIds';

export class SearchPage extends BasePage {
  private from!: Locator;
  private to!: Locator;
  private depDate!: Locator;
  private retDate!: Locator;
  private submit!: Locator;
  private error!: Locator;

  async init() {
    this.from = this.getByTid(TID.searchFrom);
    this.to = this.getByTid(TID.searchTo);
    this.depDate = this.getByTid(TID.searchDepartureDate);
    this.retDate = this.getByTid(TID.searchReturnDate);
    this.submit = this.getByTid(TID.searchSubmit);
    this.error = this.getByTid(TID.searchError);
  }

  async goto() {
    await super.goto('/en-gb#/search');
    await this.init();
  }

  async searchFlights(from: string, to: string, depDate: string, retDate: string) {
    await this.type(this.from, from);
    await this.type(this.to, to);
    await this.type(this.depDate, depDate);
    await this.type(this.retDate, retDate);
    await this.safeClick(this.submit);
  }

  async expectInvalidDateError() {
    await expect(this.error).toBeVisible();
    await expect(this.error).toContainText('Invalid date range');
  }
}
