import { test, expect } from "playwright/test"

test("Faqs component renders correctly and handles accordion interactions", async ({
  page,
}) => {
  // Navigate to the Next.js app
  await page.goto("/")

  // Check if the Faqs section is present
  const faqsSection = await page.$("section.px-6.xl\\:p-0.space-y-16")
  expect(faqsSection).not.toBeNull()

  // Check if the heading is present and has the correct text
  const heading = await faqsSection?.$("div.md\\:text-center h2")
  expect(heading).not.toBeNull()
  const headingText = await heading?.innerText()
  expect(headingText).toBe("Career Mango FAQ - your questions answered")

  // Check if the paragraph is present and has the correct text
  const paragraph = await faqsSection?.$("div.md\\:text-center p")
  expect(paragraph).not.toBeNull()
  const paragraphText = await paragraph?.innerText()
  expect(paragraphText).toBe(
    "Everything you need to know about finding your dream job in the USA and Canada."
  )

  // Check if each FAQ item is present and has the correct title and description
  const faqs = await faqsSection?.$$eval("#faqs", (faqs: any) => {
    return faqs.map((faq: any) => {
      return {
        title: faq.querySelector("button")?.innerText,
        description: faq.querySelector('div[role="region"]')?.innerText,
      }
    })
  })

  expect(faqs.length).toBeGreaterThan(0)

  // Check if accordion items expand and collapse correctly when clicked
  for (let i = 0; i < faqs.length; i++) {
    const accordionTrigger = await faqsSection?.$(`#faq-${i} button`)
    expect(accordionTrigger).not.toBeNull()

    // Click on the accordion trigger
    await accordionTrigger?.click()

    // Check if the accordion content is visible after clicking
    const accordionContent = await faqsSection?.$(`#faq-${i} div[role=region]`)
    expect(accordionContent).not.toBeNull()
    const accordionContentText = await accordionContent?.innerText()
    expect(accordionContentText).toBeDefined()

    // Click on the accordion trigger again to collapse
    await accordionTrigger?.click()

    // Check if the accordion content is hidden after clicking again
    const hiddenAccordionContent = await faqsSection?.$(
      `#faq-${i} button[data-state=closed]`
    )
    expect(hiddenAccordionContent).not.toBeNull()
  }
})
