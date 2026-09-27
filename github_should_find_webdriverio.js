import assert from 'node:assert';
import { remote } from 'webdriverio';

const browser = await remote({ capabilities: { browserName: 'chrome' } });

await browser.url('https://github.com/search');
await browser.$("[aria-label='Search GitHub']").setValue('qa.guru');
await browser.keys('Enter');

const text = await browser.$("[data-testid='results-list']").getText();
assert.ok(text.includes('QA.GURU'));

await browser.deleteSession();
