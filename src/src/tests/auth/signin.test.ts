import { test } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/DashboardPage';
import users from '../../data/users.json';

test.describe('Sign In Feature', () => {
  test('Golden Path - Successful login', async ({ page }) => {
    const login = new LoginPage(page);
    await login.goto();
    await login.login(users.validUser.email, use
    rs.validUser.password);

    const dashboard = new DashboardPage(page);
    await dashboard.assertWelcome();
  });
});
