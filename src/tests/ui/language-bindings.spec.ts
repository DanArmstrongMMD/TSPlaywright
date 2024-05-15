import { test, expect } from '@playwright/test';
import { HomePage } from '../../pages/home.page';

test('language bindings change URL', async ({ page }) => {
    const homePage = new HomePage(page);
    await homePage.goto();
    await expect(page).toHaveURL('https://playwright.dev/');
    await expect(homePage.navigation.languageDropdown).toHaveText('Node.js');
    await homePage.navigation.clickDotnet()
    await expect(page).toHaveURL('https://playwright.dev/dotnet/');
    await expect(homePage.navigation.languageDropdown).toHaveText('.NET');
    await homePage.navigation.clickPython()
    await expect(page).toHaveURL('https://playwright.dev/python/');
    await expect(homePage.navigation.languageDropdown).toHaveText('Python');
    await homePage.navigation.clickJava()
    await expect(page).toHaveURL('https://playwright.dev/java/');
    await expect(homePage.navigation.languageDropdown).toHaveText('Java');
    await homePage.navigation.clickNodejs()
    await expect(page).toHaveURL('https://playwright.dev/');
    await expect(homePage.navigation.languageDropdown).toHaveText('Node.js');
});