import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import configuration from "../../../../config"

const ResumeReviewHero = () => {
  return (
    <section className="flex mx-auto max-w-screen-xl flex-col-reverse lg:flex-row gap-8 px-6 xl:p-0">
      <div className="flex-1 flex justify-end flex-col">
        <h1 className="max-w-screen-md  mb-4">
          Expert insights to elevate your resume and land more interviews{" "}
        </h1>
        <p className="max-w-screen-sm mb-10">
          Unlock the full potential of your resume with our professional resume
          review service. Our team of experts will provide comprehensive
          feedback and insights to help you elevate your resume&apos;s impact.
        </p>
        <Link
          href={`${configuration.site.appUrl}/resume-review`}
          className={cn(buttonVariants(), "w-full sm:w-fit")}
        >
          Get your resume reviewed
        </Link>
      </div>
      <div className="flex lg:w-[500px]">
        <Image
          src={"/resume-review/hero.png"}
          alt="hero image"
          width={500}
          height={500}
          loading="eager"
        />
      </div>
    </section>
  )
}

export default ResumeReviewHero
