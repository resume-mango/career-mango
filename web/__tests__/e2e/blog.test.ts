import { test, expect } from "playwright/test"

test("Bloglist renders correctly", async ({ page }) => {
  // Navigate to the page or component URL
  await page.goto("/blogs") // Replace with your actual app URL
  // Check if the main heading is rendered
  expect(page.getByText("Insights and inspiration: explore our blog"))
  // Check if the main blog section is rendered
  const mainTitle = page.locator(".grid > div h3").nth(0)
  const mainLink = page.locator(".grid > div a").nth(0)
  const mainLinkHref = await mainLink.getAttribute("href")
  const mainTitleText = await mainTitle.innerText()
  await mainLink.click()
  await page.waitForURL(mainLinkHref!, { waitUntil: "commit" })
  expect(page.url()).toContain(mainLinkHref)
  expect(page.getByText(mainTitleText)).toBeDefined()
  expect(page.getByText("Read More")).toBeDefined()
  await page.waitForSelector("div[data-testid=blog-card]")
  expect(await page.getByTestId("blog-card").count()).toEqual(4)

  const firstReadMore = page.locator("div[data-testid=blog-card] > a").nth(0)
  const firstReadMoreTitle = await page
    .locator("div[data-testid=blog-card] h4")
    .nth(0)
    .innerText()

  await firstReadMore.click()
  const firstReadMoreHref = await firstReadMore.getAttribute("href")

  await page.waitForURL(firstReadMoreHref!, { waitUntil: "commit" })

  expect(page.url()).toContain(firstReadMoreHref)
  expect(page.getByText(firstReadMoreTitle)).toBeDefined()
})
