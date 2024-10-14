import { test, chromium } from '@playwright/test';

test('emulating on ios device', async () => {
    const browser = await chromium.launch()

    const context = await browser.newContext()

    const page = await context.newPage();

    await page.goto('https://playwright.dev/');
    //await page.goto('/');

    await page.screenshot({path: 'ios-device-screenshot.png'})
    await page.waitForTimeout(3000)
    await browser.close()
});
//command executed is npx playwright test emulation_ios.spec.js