import Image from "next/image"
import React from "react"
import Icons from "../icons"
import Link from "next/link"
import { buttonVariants } from "../ui/button"
import { cn } from "@/lib/utils"

const WhyDiffrent = {
  style1: () => {
    const list = [
      "Explore our wide range of resume templates designed to help you stand out and succeed in the USA and Canada job markets",
      "Review service from top industry standard professionals",
      "No AIs over here. Start with a template, modify it to your needs",
      "It doesn’t stop at resume/cover letter creation. We follow through with your entire job searching process",
    ]
    return (
      <div className="mx-auto max-w-screen-xl px-6">
        <div className="bg-[radial-gradient(810.44%_137.86%_at_98.64%_0%,_#303030_0%,_#1C1C1C_100%)] flex-col-reverse lg:flex-row flex rounded-[30px]">
          <div className="flex-1 items-center flex justify-center text-white my-24">
            <div className="space-y-8 max-w-2xl px-6">
              <h2>Why we are different</h2>
              <div className="space-y-4">
                {list.map((l, i) => (
                  <p className="flex items-start gap-4" key={i}>
                    <span>
                      <Icons.star className="stroke-white relative top-1" />
                    </span>

                    <span>{l}</span>
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:w-[40%] relative">
            <Image
              src="/homepage/mangos.png"
              alt="Mangos Image"
              width={435}
              height={498}
            />
          </div>
        </div>
      </div>
    )
  },
  style2: ({
    title,
    description,
    keyPoints,
    image,
    button,
  }: {
    title: string
    description: string
    keyPoints: string[]
    image: string
    button: { name: string; url: string }
  }) => {
    const handleScroll = () => {
      const el = document.getElementById("browse-templates")
      el && el.scrollIntoView({ behavior: "smooth" })
    }

    return (
      <section className="mx-auto max-w-screen-xl px-4 xl:px-0">
        <div className="bg-[radial-gradient(810.44%_137.86%_at_98.64%_0%,_#303030_0%,_#1C1C1C_100%)] flex flex-col gap-12 py-10 lg:py-0 lg:flex-row rounded-[30px]">
          <div className="w-full lg:w-[40%] flex items-center justify-center pr-4 lg:p-0">
            <Image
              src={image}
              alt={`${title} Image`}
              width={455}
              height={475}
            />
          </div>
          <div className="flex-1 items-center flex justify-center text-white md:my-16 px-4 xl:p-0">
            <div className="space-y-8">
              <h2>{title}</h2>
              <p>{description}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {keyPoints.map((l, i) => (
                  <p className="flex items-start gap-4" key={i}>
                    <span>
                      <Icons.star className="stroke-white" />
                    </span>

                    <span>{l}</span>
                  </p>
                ))}
              </div>
              <div>
                <Link
                  href={button.url}
                  className={cn(buttonVariants(), "w-full sm:w-fit")}
                >
                  {button.name}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  },
}

export default WhyDiffrent
