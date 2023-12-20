import { templateData } from "@/app/templates/[type]/components/hero"
import { test, expect } from "playwright/test"
import configuration from "../../../config"

test("Should render resume template", async ({ page }) => {
  await page.goto("/templates/resume")
  expect(page.getByText(templateData.resume.title)).toBeVisible()
  expect(page.getByText(templateData.resume.desc)).toBeVisible()
  await page.getByRole("link", { name: "Browse Templates" }).click()
  expect(page.getByAltText("Resume Image")).toBeVisible()

  const el = page.getByText("Template2")
  expect(el).toBeVisible()
  await page.getByTitle("Professional").click()

  await page.waitForTimeout(1000)
  expect(el).not.toBeVisible()
  expect(page.getByText("Template3")).toBeVisible()
})

test("Should render coverletter template", async ({ page }) => {
  await page.goto("/templates/coverletter")
  expect(page.getByText(templateData.coverletter.title)).toBeVisible()
  expect(page.getByText(templateData.coverletter.desc)).toBeVisible()
  await page.getByRole("link", { name: "Browse Templates" }).click()
  expect(page.getByAltText("Coverletter Image")).toBeVisible()

  const el = page.getByText("Template1")
  expect(el).toBeVisible()
  await page.getByTitle("Professional").click()

  await page.waitForTimeout(1000)
  expect(el).not.toBeVisible()
  expect(page.getByText("Template7")).toBeVisible()
})

test("Should render common components", async ({ page }) => {
  await page.goto("/templates/coverletter")
  const href = await page
    .getByText("Sign Up Now")
    .nth(1)
    .evaluate((buton) => {
      return buton.getAttribute("href")
    })
  expect(href).toEqual(configuration.links.signup)
  page.getByTestId("testimonial")
  expect(await page.getByTestId("testimonial").count()).toEqual(3)
})
