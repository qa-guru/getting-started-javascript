import assert from 'node:assert';
import { Builder, By, Key } from 'selenium-webdriver';

const driver = await new Builder().forBrowser('chrome').build();
await driver.manage().setTimeouts({ implicit: 10000 });

await driver.get('https://github.com/search');
await driver.findElement(By.css("[aria-label='Search GitHub']")).sendKeys('qa.guru', Key.RETURN);

const text = await driver.findElement(By.css("[data-testid='results-list']")).getText();
assert.ok(text.includes('QA.GURU'));

await driver.quit();
