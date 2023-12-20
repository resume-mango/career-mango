import { test, expect } from "playwright/test"

test("MainNav renders correctly on mobile", async ({ browser }) => {
  // Set the viewport to a mobile size
  const context = await browser.newContext({
    userAgent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148",
  })
  const page = await context.newPage()
  await page.setViewportSize({ width: 375, height: 667 })

  // Navigate to the Next.js app
  await page.goto("/")

  // Check if the mobile navigation sheet is present
  const sheetTrigger = await page.$(`button[aria-haspopup="dialog"]`)
  expect(sheetTrigger).not.toBeNull()

  // Click on the mobile navigation trigger
  await sheetTrigger?.click()
  await page.waitForSelector("#mobile-nav")
  // Check if the mobile navigation content is visible
  const sheetContent = page.locator("#mobile-nav")
  expect(sheetContent).not.toBeNull()
  expect(sheetContent).toContainText(
    /Resume|Coverletter|Resume Review | Pricing | Blog/
  )
  const login = sheetContent.getByText("Log In")
  expect(login).not.toBeNull()

  const loginHref = await login.evaluate((button) => {
    return button.getAttribute("href")
  })
  expect(loginHref).toEqual(process.env.NEXT_PUBLIC_AUTH_URL + "/login")

  const signin = sheetContent.getByText("Sign Up Now")
  expect(signin).not.toBeNull()

  const signinHref = await signin.getAttribute("href")
  expect(signinHref).toEqual(
    process.env.NEXT_PUBLIC_AUTH_URL + "/login?screen=signup"
  )
})

test("MainNav renders correctly on desktop", async ({ page, browser }) => {
  // Navigate to the Next.js app
  await page.goto("/")

  // Check if the desktop navigation bar is present
  const navBar = page.locator("nav")
  expect(navBar).not.toBeNull()

  expect(navBar).toContainText(
    /Resume|Coverletter|Resume Review | Pricing | Blog/
  )
  const login = navBar.getByText("Log In")
  expect(login).not.toBeNull()

  const loginHref = await login.evaluate((button) => {
    return button.getAttribute("href")
  })
  expect(loginHref).toEqual(process.env.NEXT_PUBLIC_AUTH_URL + "/login")

  const signin = navBar.getByText("Sign Up Now")
  expect(signin).not.toBeNull()

  const signinHref = await signin.evaluate((button) => {
    return button.getAttribute("href")
  })
  expect(signinHref).toEqual(
    process.env.NEXT_PUBLIC_AUTH_URL + "/login?screen=signup"
  )
})
