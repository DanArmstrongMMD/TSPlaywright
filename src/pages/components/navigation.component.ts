import {Page, type Locator} from '@playwright/test';

export class NavigationComponent  {
    readonly page: Page;

    readonly navbar: Locator;
    readonly logoLink: Locator;
    readonly docsLink: Locator;
    readonly apiLink: Locator;
    readonly communityLink: Locator;
    readonly languageDropdown: Locator;
    readonly nodejsLink: Locator;
    readonly pythonLink: Locator;
    readonly javaLink: Locator;
    readonly dotnetLink: Locator;

    constructor(page: Page) {
        this.page = page;

        this.navbar = page.getByLabel('Main', { exact: true });
        this.logoLink = page.getByRole('link', { name: 'Playwright logo' });
        this.docsLink = page.getByRole('link', { name: 'Docs' });
        this.apiLink = page.getByRole('link', { name: 'API' });
        this.communityLink = page.getByRole('link', { name: 'Commmunity' });

        this.languageDropdown = this.navbar.getByRole('button').first();
        this.nodejsLink = this.navbar.getByRole('link', { name: 'Node.js' });
        this.pythonLink = this.navbar.getByRole('link', { name: 'Python' });
        this.javaLink = this.navbar.getByRole('link', { name: 'Java' });
        this.dotnetLink = this.navbar.getByRole('link', { name: '.NET'} );
    }
    
    clickNodejs = async () => {
        await this.languageDropdown.hover();
        await this.nodejsLink.click();
    }
    clickPython = async () => {
        await this.languageDropdown.hover();
        await this.pythonLink.click();
    }
    clickJava = async () => {
        await this.languageDropdown.hover();
        await this.javaLink.click();
    }
    clickDotnet = async () => {
        await this.languageDropdown.hover();
        await this.dotnetLink.click();
    }
}