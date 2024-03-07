import { test, expect } from '@playwright/test';
import { firefox } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:4321/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle("Mazen Omar");
});

test('check trailer curson on firefox',async ({page})=> {
  const browser = await firefox.launch();

  await page.goto('http://localhost:4321/');

  await page.mouse.move(646, 313);

  const element = await page.$('#trailer');

  await page.screenshot({path: 'screenshot.png'})

  await expect(element).toBeDefined

  browser.close()

})