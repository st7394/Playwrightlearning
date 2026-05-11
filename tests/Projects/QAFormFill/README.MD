# 🧪 QA Form Fill — Automation Project

![Project Banner](./qa_form_banner.png)

---

## 📌 Project Overview

This project automates the **QA Profile Form** on The Testing Academy's practice platform using Playwright. The test fills out all form fields, submits the form, and validates that the output JSON contains the correct submitted values.

🔗 **Target URL:** https://app.thetestingacademy.com/playwright/tables/practice#page

## 🎯 Goal

![Test Workflow](./test_workflow.png)

- ✏️ Fill out every field on the QA Profile Form
- 📤 Click "Save Profile" to submit the form
- 📋 Capture the JSON output displayed after submission
- ✅ Validate that all entered values appear correctly in the JSON

## 🛠️ Tools & Technologies

| Tool | Purpose |
|------|---------|
| Playwright | Browser automation and testing |
| TypeScript | Test scripting language |
| Node.js | Runtime environment |
| Allure | Test reporting |

## 📋 Form Fields Covered

| Field | Type |
|-------|------|
| First Name / Last Name | Text input |
| Gender | Radio button |
| Role | Radio button |
| Years of Experience | Dropdown select |
| Date | Date picker |
| Automation Tools (UFT, Selenium, etc.) | Checkboxes |
| Continents | Checkboxes |
| Upload Image | File upload |
| Download File | Link |
| Selenium Commands | Tab navigation |

## ▶️ How to Run

```bash
# Install dependencies
npm install

# Run this specific test
npx playwright test tests/Projects/QAFormFill/231_Task5may.spec.ts --headed

# Run in debug mode
npx playwright test tests/Projects/QAFormFill/231_Task5may.spec.ts --debug
```

## 📊 View Reports

```bash
# Playwright HTML report
npx playwright show-report

# Allure report
npm run report
```

## 📁 Project Structure

```
QAFormFill/
├── 231_Task5may.spec.ts   # Main test file
├── qa_form_banner.png     # Banner image
├── test_workflow.png      # Workflow image
└── README.MD              # This file
```


