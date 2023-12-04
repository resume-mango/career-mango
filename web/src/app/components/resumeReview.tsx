import { Button, buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ResumeReview = () => {
  return (
    <section className="block max-w-screen-xl mx-auto">
      <div className="flex flex-col md:flex-row items-end gap-6 md:gap-16">
        <div className="pr-4 md:w-[40%]">
          <Image
            src="/homepage/resume-review.png"
            alt="Resume Review Image"
            width={500}
            height={500}
          />
        </div>
        <div className="p-6 flex-1 space-y-6 md:space-y-8 mb-16">
          <h2>Get your resume reviewed by a recruiting professional</h2>
          <p className="max-w-2xl">
            Explore our wide range of resume templates designed to help you
            stand out and succeed in the USA and Canada job markets
          </p>
          <Link href={"/"} className={cn(buttonVariants(), "w-full md:w-fit")}>
            Chat with a professional
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ResumeReview;
