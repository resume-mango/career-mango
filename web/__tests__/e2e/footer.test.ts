import { links } from "@/components/custom-ui/footer"
import { test, expect } from "playwright/test"

test("Footer renders correctly", async ({ page }) => {
  // Load the page with your React component
  await page.goto("/") // Change the URL accordingly

  // Wait for the component to be rendered
  const footer = page.locator("footer")

  // Assert that the logo is present
  await expect(footer.locator('img[title="Resume Mango Logo"]')).toBeVisible()

  // Assert that the navigation links are present
  await expect(footer.locator('h3:has-text("Navigation")')).toBeVisible()
  await expect(footer.locator(`a[title=${links.resume.label}]`)).toBeVisible()
  await expect(footer.getByTitle(links.pricing.label)).toBeVisible()
  await expect(footer.getByTitle(links.coverletter.label)).toBeVisible()
  await expect(footer.getByTitle(links.blog.label)).toBeVisible()

  // Assert that the social links are present
  await expect(footer.locator('h3:has-text("Social Links")')).toBeVisible()
  await expect(footer.locator('a[title="Linkedin Logo"]')).toBeVisible()

  // Assert that privacy and terms links are present
  await expect(footer.getByTitle(links.privacy.label)).toBeVisible()
  await expect(footer.getByTitle(links.terms.label)).toBeVisible()

  // Assert copyright information is present
  await expect(
    footer.locator('p:has-text("© Copyright 2023 Careermango.co")')
  ).toBeVisible()
})
