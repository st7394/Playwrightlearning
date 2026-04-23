# Learning Playwright Fundamentals

A hands-on project for learning Playwright test automation fundamentals with TypeScript.

## Prerequisites

- Node.js (LTS version recommended)
- npm

## Installation

```bash
# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Running Tests

```bash
# Run all tests
npx playwright test

# Run tests in headed mode (see browser)
npx playwright test --headed

# Run tests in UI mode
npx playwright test --ui

# Run a specific test file
npx playwright test tests/01_Basics/Lab209.spec.ts

# Run tests from a specific folder
npx playwright test tests/03_Locators_Commands/
```

## Project Structure

```
├── tests/
│   ├── 01_Basics/                              # Basic Playwright test examples
│   │   ├── Lab209.spec.ts                      # Title verification test
│   │   ├── Lab210_Test_Annoations.spec.ts      # Test annotations demo
│   │   └── Util.ts                             # Utility functions
│   ├── 02_first_tests/                         # Browser context and page examples
│   │   ├── 211_First_Running_Test.spec.ts      # First running test
│   │   ├── 212_Browser_Context_Pages.spec.ts   # Browser, context, pages demo
│   │   ├── 213_Multile_Context.spec.ts         # Multiple browser contexts
│   │   ├── 214_Multiple_Pages.spec.ts          # Multiple pages handling
│   │   ├── 215_TEST_PW.spec.ts                 # Playwright test basics
│   │   ├── 216_Manual_Context.spec.ts          # Manual context creation
│   │   ├── 217_Manual_Context_Options.spec.ts  # Context options
│   │   └── 218_Context_Reuse.spec.ts           # Context reuse patterns
│   ├── 03_Locators_Commands/                   # Locators and navigation commands
│   │   ├── 219_Commands.spec.ts                # goto waitUntil options
│   │   ├── 221_Reffer_Command.spec.ts          # Referer header via context
│   │   ├── 222_Automation.vwo.com.spec.ts      # Locator basics (lazy, strict, auto-wait)
│   │   └── index.html                          # Sample HTML for practice
│   └── 220_GotoCommands.spec.ts                # goto + referer options
├── playwright.config.ts     # Playwright configuration
├── package.json
└── .github/
    └── workflows/
        └── playwright.yml   # CI/CD workflow
```

## Test Examples

### Basic Title Verification (Lab209)
Demonstrates basic page navigation and title assertion.

### Test Annotations (Lab210)
Demonstrates Playwright test annotations:
- `test.skip()` - Skip a test
- `test.only()` - Run only this test
- `test.fail()` - Mark test as expected to fail
- `test.slow()` - Extend timeout (3x)
- Conditional skip based on browser

### Browser Context and Pages (02_first_tests)
Demonstrates browser context and page management:
- Browser, Context, and Page hierarchy
- Creating multiple browser contexts
- Working with multiple pages/tabs
- Manual context creation and options
- Context reuse patterns

### Goto Commands (220_GotoCommands)
Demonstrates `page.goto()` options:
- Default `load` wait strategy
- Custom `referer` header on navigation

### Locators & Commands (03_Locators_Commands)
Demonstrates navigation commands and locator fundamentals:
- `waitUntil` options: `commit`, `domcontentloaded`, `load`, `networkidle`
- Setting `Referer` header for an entire browser context via `extraHTTPHeaders`
- Locators are lazy, strict, and auto-waiting (CSS selectors, fill, click, assertions)

## Viewing Reports

```bash
# Open HTML report after test run
npx playwright show-report
```

## CI/CD

This project includes a GitHub Actions workflow that:
- Runs on push/PR to main/master branches
- Installs dependencies and Playwright browsers
- Runs all tests
- Uploads test reports as artifacts

## Configuration

The `playwright.config.ts` file includes:
- Test directory: `./tests`
- Parallel execution enabled
- HTML reporter
- Chromium browser configured
- Trace collection on first retry
- Headed mode enabled (`headless: false`) for easier learning and debugging

## Resources

- [Playwright Documentation](https://playwright.dev/docs/intro)
- [Playwright API Reference](https://playwright.dev/docs/api/class-playwright)