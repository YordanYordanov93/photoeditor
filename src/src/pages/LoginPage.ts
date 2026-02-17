import { BasePage } from './BasePage';
import { Locator } from '@playwright/test';
import { TID } from '../utils/testIds';

export class LoginPage extends BasePage {
  private email!: Locator;
  private password!: Locator;
  private submit!: Locator;

  async init() {
    this.email = this.getByTid(TID.loginEmail);
    this.password = this.getByTid(TID.loginPassword);
    this.submit = this.getByTid(TID.loginSubmit);
  }

  async goto() {
    await super.goto('/en-gb#/login');
    await this.init();
  }

  async login(email: string, password: string) {
    await this.type(this.email, email);
    await this.type(this.password, password);
    await this.safeClick(this.submit);
  }
}
