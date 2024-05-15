import {Page, type Locator} from '@playwright/test';
import { NavigationComponent } from './components/navigation.component';

export class GetStartedPage  {
    readonly page: Page;
    readonly navigation: NavigationComponent; // Note: This allows you to reuse the navigation across multiple pages through this.navigation
    readonly installationHeader: Locator;
    
    constructor(page: Page) {
        this.page = page;

        this.navigation = new NavigationComponent(page);
        this.installationHeader = page.getByRole('heading', { name: 'Installation' });
    }
}