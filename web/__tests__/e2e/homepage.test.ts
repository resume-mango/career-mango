import { test, expect } from "playwright/test"

test.describe("Homepage", async () => {
  test("Hero Section renders correctly", async ({ page }) => {
    await page.goto("/")

    // Check if the heading is present and has the correct text
    const heading = await page.$("h1")
    expect(heading).not.toBeNull()
    const headingText = await heading?.innerText()
    expect(headingText).toBe("Bringing all your Job Hunting needs in one place")

    // Check if the paragraph is present and has the correct text
    const paragraph = await page.$("p")
    expect(paragraph).not.toBeNull()
    const paragraphText = await paragraph?.innerText()
    expect(paragraphText).toBe(
      "We offer Resume Reviews, Interview Prep & Career Advice from highly educated industry leaders with 10+ years of HR and recruiting experience"
    )

    // Check if the "Try For Free" link is present and has the correct href
    const tryForFreeLink = await page.$('a:has-text("Try For Free")')
    expect(tryForFreeLink).not.toBeNull()
    const tryForFreeHref = await tryForFreeLink?.getAttribute("href")
    expect(tryForFreeHref).toBe(process.env.NEXT_PUBLIC_APP_URL)

    // Check if the image is present
    const image = await page.$('img[alt="hero image"]')
    expect(image).not.toBeNull()
  })

  test("Features component renders correctly", async ({ page }) => {
    await page.goto("/")

    // Check if the Features section is present
    const featuresSection = await page.$(
      "section.block.max-w-screen-2xl.mx-auto"
    )
    expect(featuresSection).not.toBeNull()

    // Check if the first list of features is rendered
    const listOneFeatures = await page.$$(
      "div.left-0.whitespace-nowrap.horizontal-scroll-right div"
    )
    expect(listOneFeatures.length).toBeGreaterThan(0)

    // Check if the second list of features is rendered
    const listTwoFeatures = await page.$$(
      "div.left-0.whitespace-nowrap.horizontal-scroll-left div"
    )
    expect(listTwoFeatures.length).toBeGreaterThan(0)

    // // Check if the third list of features is rendered on mobile
    // const isMobile = await page.$eval("body", (body: any) =>
    //   body.classList.contains("is-mobile")
    // )
    // if (isMobile) {
    //   const listThreeFeatures = await page.$$(
    //     "div.left-0.whitespace-nowrap.horizontal-scroll-right div"
    //   )
    //   expect(listThreeFeatures.length).toBeGreaterThan(0)
    // }

    // You can add more specific assertions based on your component structure and content
  })

  test("Templates component renders correctly", async ({ page }) => {
    await page.goto("/")

    // Check if the Templates section is present

    const templatesSection = await page.$("div.mx-auto.max-w-screen-xl")
    expect(templatesSection).not.toBeNull()

    // Check if the heading is present and has the correct text
    const heading = await page.$("h2")
    expect(heading).not.toBeNull()
    const headingText = await heading?.innerText()
    expect(headingText).toBe(
      "Craft your winning resume with CareerMango's professional templates"
    )

    // Check if the paragraph is present and has the correct text
    const paragraph = await page.$("p.max-w-xl")
    expect(paragraph).not.toBeNull()
    const paragraphText = await paragraph?.innerText()
    expect(paragraphText).toBe(
      "Explore our wide range of resume templates designed to help you stand out and succeed in the USA and Canada job markets"
    )

    // Check if the "Create resume for free" link is present and has the correct href
    const createResumeLink = await page.$(
      'a:has-text("Create resume for free")'
    )
    expect(createResumeLink).not.toBeNull()
    const createResumeHref = await createResumeLink?.getAttribute("href")
    expect(createResumeHref).toBe(
      `${process.env.NEXT_PUBLIC_APP_URL}/resumes/new`
    )

    // Check if the category links are present
    const categoryLinks = await page.$$eval(
      "div.grid-flow-col-dense.items-center a",
      (links) => links.map((link: any) => link.innerText)
    )
    expect(categoryLinks).toEqual([
      "Simple",
      "Professional",
      "Creative",
      "With Image",
      "Without Image",
    ])

    // Ensure proper timing by waiting for the selector to appear
    await page.waitForSelector("div#templates-wrapper a")

    // Check if the Templates section is present
    const tsection = await page.$("div#templates-wrapper")
    expect(templatesSection).not.toBeNull()

    // Check if the templates are rendered
    const templates = await tsection?.$$("img")
    expect(templates?.length).toBeGreaterThan(0)
  })

  test("ResumeReview component renders correctly", async ({ page }) => {
    // Navigate to the Next.js app
    await page.goto("/")

    // Check if the ResumeReview section is present
    const resumeReviewSection = await page.$(
      "section.block.max-w-screen-xl.mx-auto"
    )
    expect(resumeReviewSection).not.toBeNull()

    // Check if the heading is present and has the correct text
    const heading = await resumeReviewSection?.$("h2")
    expect(heading).not.toBeNull()
    const headingText = await heading?.innerText()
    expect(headingText).toBeDefined()

    // Check if the paragraph is present and has the correct text
    const paragraph = await resumeReviewSection?.$("p.max-w-2xl")
    expect(paragraph).not.toBeNull()
    const paragraphText = await paragraph?.innerText()
    expect(paragraphText).toEqual(
      "Explore our wide range of resume templates designed to help you stand out and succeed in the USA and Canada job markets"
    )

    // Check if the "Chat with a professional" link is present and has the correct href
    const chatLink = await resumeReviewSection?.$(
      'a:has-text("Chat with a professional")'
    )
    expect(chatLink).not.toBeNull()
    const chatHref = await chatLink?.getAttribute("href")
    expect(chatHref).toEqual(`${process.env.NEXT_PUBLIC_APP_URL}/resume-review`)

    // You can add more specific assertions based on your component structure and content
  })

  test("Journey component renders correctly", async ({ page }) => {
    // Navigate to the Next.js app
    await page.goto("/")

    // Check if the Journey section is present
    const journeySection = await page.$(
      "section.mx-auto.max-w-screen-xl.space-y-8.lg\\:space-y-16"
    )
    expect(journeySection).not.toBeNull()

    // Check if the heading is present and has the correct text
    const heading = await journeySection?.$("h2")
    expect(heading).not.toBeNull()
    const headingText = await heading?.innerText()
    expect(headingText).toBe("Walkthrough Harpreet’s CareerMango Journey")

    // Check if the paragraphs are present and have the correct text
    const paragraphs = await journeySection?.$$("div > div > p")
    expect(paragraphs?.length).toBe(3)

    const expectedParagraphs = [
      "Harpreet moved to Canada and almost immediately encountered difficulties as a result of the language barrier (English).",
      "Studying for the IELTs became hard and complicated. She needed to land her dream job but the struggle to find a job was enormous.",
      "She wasn’t able to write a perfect resume as she had very little professional writing skills.",
    ]

    for (let i = 0; i < expectedParagraphs.length; i++) {
      const paragraphText = await paragraphs![i].innerText()
      expect(paragraphText).toBe(expectedParagraphs[i])
    }

    // Check if the steps are present and have the correct text
    const steps = await journeySection?.$$eval(
      ".grid.lg\\:grid-cols-3 div.bg-white h3",
      (steps) => steps.map((step: any) => step.innerText)
    )
    expect(steps).toEqual([
      "Found CareerMango and created a stellar resume",
      "Took a live class and career advices",
      "Landed a job with a tech firm in Vancouver!",
    ])
  })

  test("Blog component renders correctly", async ({ page }) => {
    // Navigate to the Next.js app
    await page.goto("/")

    // Check if the Blog section is present
    const blogSection = await page.$("section#blog-section")
    expect(blogSection).not.toBeNull()

    // Check if the heading is present and has the correct text
    const heading = await blogSection?.$("h2")
    expect(heading).not.toBeNull()
    const headingText = await heading?.innerText()
    expect(headingText).toBe(
      "The CareerMango blog - expert job hunting advice and insights"
    )

    // Check if the paragraph is present and has the correct text
    const paragraph = await blogSection?.$("p.max-w-2xl")
    expect(paragraph).not.toBeNull()
    const paragraphText = await paragraph?.innerText()
    expect(paragraphText).toBe(
      "Discover the latest tips, trends, and strategies for landing your dream job in the USA and Canada."
    )

    // Check if the "Explore More" link is present and has the correct href
    const exploreLink = await blogSection?.$(
      'div.mb-16 a:has-text("Explore More")'
    )
    expect(exploreLink).not.toBeNull()
    const exploreHref = await exploreLink?.getAttribute("href")
    expect(exploreHref).toBe("/blogs")

    const grid = await page?.$("#blog-list")
    // Listen for all console logs

    expect(grid).not.toBeNull()

    // // Check if the Swiper or Grid is present based on the screen size
    // const isMobile = await page.$eval("body", (body) =>
    //   body.classList.contains("is-mobile")
    // )

    // if (isMobile) {
    //   // Check if Swiper is present
    //   const swiper = await blogSection?.$(".swiper-container")
    //   expect(swiper).not.toBeNull()
    // } else {
    //   // Check if Grid is present
    //   const grid = await blogSection?.$("div.grid.grid-cols-3.gap-8")
    //   expect(grid).not.toBeNull()
    // }
  })
})
