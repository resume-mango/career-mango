import { test, expect } from "playwright/test"
import configuration from "../../../config"

test("ResumeReviewHero component renders correctly", async ({ page }) => {
  // Navigate to the page or component URL
  await page.goto("/resume-review")

  // Check if the title, description, and "Get your resume reviewed" button are rendered
  expect(
    page.getByText(
      "Expert insights to elevate your resume and land more interviews"
    )
  ).toBeDefined()
  expect(
    page.getByText(
      "Unlock the full potential of your resume with our professional resume review service. Our team of experts will provide comprehensive feedback and insights to help you elevate your resume's impact."
    )
  ).toBeDefined()
  const link = page.getByText("Get your resume reviewed").nth(0)
  expect(link).toBeDefined()

  // Trigger the "Get your resume reviewed" button click
  await link.click()

  // Wait for the navigation or other actions to complete (adjust the wait time as needed)

  // Check if the URL has changed to the expected resume review page URL
  const currentUrl = page.url()
  const expectedUrl = `${configuration.site.appUrl}/resume-review`
  expect(currentUrl).toBe(expectedUrl)
})
