import {Page, expect, type Locator} from '@playwright/test';
import { NavigationComponent } from './components/navigation.component';

export class HomePage  {
    readonly url: string = 'https://playwright.dev/'
    readonly page: Page;
    
    readonly navigation: NavigationComponent; // Note: This allows you to reuse the navigation across multiple pages through this.navigation
    
    readonly getStartedButton: Locator;
    
    constructor(page: Page) {
        this.page = page;

        this.navigation = new NavigationComponent(page);
        this.getStartedButton = page.getByRole('link', { name: 'Get started'});
    }

    goto = async () => {
        await this.page.goto(this.url);
        await expect(this.getStartedButton).toBeVisible();
    }
}