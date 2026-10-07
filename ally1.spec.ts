import { test, expect } from '@playwright/test';

test.describe('Accessibility baseline audit', () => {
  test('Button is focusable and has visible focus', async ({ page }) => {
    await page.goto('http://localhost:5173'); // adjust to your dev server
    const button = page.getByRole('button', { name: 'Submit' });
    await button.focus();
    const outline = await button.evaluate(el => getComputedStyle(el).outlineStyle);
    expect(outline).not.toBe('none');
  });

  test('Input has associated label and error message', async ({ page }) => {
    await page.goto('http://localhost:5173');
    const input = page.getByLabel('Name');
    await expect(input).toBeVisible();
    await input.fill('');
    // simulate error state
    const error = page.getByRole('alert');
    await expect(error).toHaveText(/required/i);
  });

  test('Dialog traps focus and closes with Esc', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.getByRole('button', { name: 'Open Dialog' }).click();
    const dialog = page.getByRole('dialog');
    await expect(dialog).toBeVisible();

    // Tab cycles inside dialog
    await page.keyboard.press('Tab');
    const activeElement = await page.evaluate(() => document.activeElement?.tagName);
    expect(activeElement).toBe('BUTTON');

    // Esc closes dialog
    await page.keyboard.press('Escape');
    await expect(dialog).toBeHidden();
  });
});
