from playwright.sync_api import sync_playwright

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Wait for the page to load
    page.wait_for_selector('h1', state='visible')

    # Check if Hero section is present (using text)
    if not page.get_by_text("Salman Shafi").first.is_visible():
        print("Hero section not visible")

    # Check if About section is present
    if not page.locator('#about').is_visible():
        print("About section not visible")

    # Check if Skills section is present
    if not page.locator('#skills').is_visible():
        print("Skills section not visible")

    # Check if Experience section is present
    if not page.locator('#experience').is_visible():
        print("Experience section not visible")

    # Check if Contact section is present
    if not page.locator('#contact').is_visible():
        print("Contact section not visible")

    # Take a screenshot
    page.screenshot(path="verification/home_page.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
