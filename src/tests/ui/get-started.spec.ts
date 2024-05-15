import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page'
import { GetStartedPage } from '../../pages/get-started.page';

test('has navigation from home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.getStartedButton.click();
    const getStartedPage = new GetStartedPage(page);
    await expect(getStartedPage.installationHeader).toBeVisible();
});

test('preserves language binding from home page', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await homePage.navigation.clickDotnet();
    await homePage.getStartedButton.click();
    const getStartedPage = new GetStartedPage(page);
    await expect(getStartedPage.installationHeader).toBeVisible();
    await expect(page).toHaveURL('https://playwright.dev/dotnet/docs/intro');
});