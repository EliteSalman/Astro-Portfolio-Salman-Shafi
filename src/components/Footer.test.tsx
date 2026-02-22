import { describe, test, expect, setSystemTime, beforeEach, afterEach } from "bun:test";
import { renderToStaticMarkup } from "react-dom/server";
import Footer from "./Footer";

describe("Footer", () => {
  // Use a fixed date for consistent testing
  const MOCK_DATE = new Date("2025-01-01T00:00:00.000Z");

  beforeEach(() => {
    // Set the system time to our fixed date before each test
    setSystemTime(MOCK_DATE);
  });

  afterEach(() => {
    // Restore the real system time after each test
    setSystemTime();
  });

  test("renders the current year correctly", () => {
    const html = renderToStaticMarkup(<Footer />);
    // Check if the copyright text contains the mocked year
    expect(html).toContain("© 2025 Salman Shafi. All rights reserved.");
  });

  test("renders the year dynamically based on system time", () => {
    // Set a different year to ensure it's not hardcoded
    const futureDate = new Date("2030-01-01T00:00:00.000Z");
    setSystemTime(futureDate);

    const html = renderToStaticMarkup(<Footer />);
    expect(html).toContain("© 2030 Salman Shafi. All rights reserved.");
  });
});
