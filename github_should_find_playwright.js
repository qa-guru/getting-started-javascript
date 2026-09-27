import { chromium, expect } from 'playwright/test';

const browser = await chromium.launch({ headless: false });
const page = await browser.newPage();

await page.goto('https://github.com/search');
const search = page.locator("[aria-label='Search GitHub']");
await search.fill('qa.guru');
await search.press('Enter');

await expect(page.locator("[data-testid='results-list']")).toContainText('QA.GURU');

await browser.close();
