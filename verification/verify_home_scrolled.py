from playwright.sync_api import sync_playwright
import time

def run(playwright):
    browser = playwright.chromium.launch(headless=True)
    page = browser.new_page()
    page.goto("http://localhost:3000")

    # Wait for the page to load
    page.wait_for_selector('h1', state='visible')

    # Scroll down to trigger animations
    page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
    time.sleep(2) # Wait for animations

    # Scroll back up a bit or scroll step by step
    # Better approach: scroll to each section
    for section_id in ['#about', '#skills', '#experience', '#contact']:
        try:
            page.locator(section_id).scroll_into_view_if_needed()
            time.sleep(1) # Wait for animation
        except:
            print(f"Section {section_id} not found or not scrollable")

    # Take a screenshot
    page.screenshot(path="verification/home_page_scrolled.png", full_page=True)

    browser.close()

with sync_playwright() as playwright:
    run(playwright)
