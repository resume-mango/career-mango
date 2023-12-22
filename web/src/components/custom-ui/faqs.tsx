import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import React from "react"

const Faqs = () => {
  const faqsData = [
    {
      title: " Is Career Mango free to use?",
      description:
        "Yes! Our resume and cover letter creation is free – and always will be. All you will need to do is sign up with no credit card needed. We offer higher tiers for those looking for more help with their career journey. We recommend our higher tier so that you can receive 1-1 help.",
    },
    {
      title: "In which formats can I download my resume?",
      description:
        "Unlike other resume creation apps, we allow for all of our tiers (even the free one!) PDF, TXT and DOCX downloads. ",
    },
    {
      title: "What features does Career Mango have?",
      description:
        "We aim to be your go to throughout your career journey. We offer resume and cover letter creation, live classes, resume reviews by a human professional with decades of experience (no AI here!), progress tracking via a Kanban board, to-do lists, calendar integration plus much more. We come out with new features several times a year, with resources for IELTS, forum boards, job search feature, and workbooks coming very soon",
    },
    {
      title: "How do I get started?",
      description: "Sign up here to get started for free",
    },
    {
      title: "How do I get in contact with Career Mango?",
      description:
        "Please contact support@resumemango.com for any questions you may have.",
    },
  ]

  return (
    <section className="px-6 xl:p-0  space-y-16">
      <div className="md:text-center max-w-screen-sm mx-auto flex flex-col items-center">
        <h2 className="mb-4">Career Mango FAQ - your questions answered</h2>
        <p className="max-w-md">
          Everything you need to know about finding your dream job in the USA
          and Canada.
        </p>
      </div>
      <div className="max-w-screen-md mx-auto">
        <Accordion id="faqs" type="single" collapsible className="space-y-6">
          {faqsData.map((faq, i) => (
            <AccordionItem id={`faq-${i}`} value={`key-${i}`} key={i}>
              <AccordionTrigger>{faq.title} </AccordionTrigger>
              <AccordionContent>{faq.description}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}

export default Faqs
