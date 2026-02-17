import { test as base, Page } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import users from '../data/users.json';

type AuthFixture = {
  authenticatedPage: Page;
};

export const test = base.extend<AuthFixture>({
  authenticatedPage: async ({ page }, use) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.validUser.email, users.validUser.password);
    await use(page);
  },
});

export { expect } from '@playwright/test';
