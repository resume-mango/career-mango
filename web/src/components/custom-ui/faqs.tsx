import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";

const Faqs = () => {
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
        <Accordion type="single" collapsible className="space-y-6">
          {[...Array(5)].map((a, i) => (
            <AccordionItem value={`keu-${i}`} key={i}>
              <AccordionTrigger>
                What features does Career Mango have?
              </AccordionTrigger>
              <AccordionContent>
                We aim to be your go to throughout your career journey. We offer
                resume and cover letter creation, live classes, resume reviews
                by a human professional with decades of experience (no AI
                here!), progress tracking via a Kanban board, to-do lists,
                calendar integration plus much more. We come out with new
                features several times a year, with resources for IELTS, forum
                boards, job search feature, and workbooks coming very soon{" "}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default Faqs;
