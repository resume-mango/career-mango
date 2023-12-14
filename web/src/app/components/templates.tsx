"use client"
import { Button, buttonVariants } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const navLinks = [
  { name: "Simple", value: "simple" },
  { name: "Professional", value: "professional" },
  { name: "Creative", value: "creative" },
  { name: "With Image", value: "with-image" },
  { name: "Without Image", value: "without-image" },
]

const Templates = () => {
  const [category] = useState(navLinks[0].value)

  return (
    <div className="mx-auto max-w-screen-xl">
      <h2 className="px-6 xl:p-0 mb-4 max-w-screen-lg">
        Craft your winning resume with CareerMango&apos;s professional templates
      </h2>
      <div className="px-6 xl:p-0 flex mb-10">
        <div className="flex-1">
          <p className="max-w-xl">
            Explore our wide range of resume templates designed to help you
            stand out and succeed in the USA and Canada job markets
          </p>
        </div>
        <div className="hidden md:flex w-3/12 items-center justify-end">
          <Link
            href={`${process.env.NEXT_PUBLIC_APP_URL!}/resumes/new`}
            className={cn(buttonVariants({ variant: "secondary" }))}
          >
            Create resume for free
          </Link>
        </div>
      </div>
      <ScrollArea className="max-w-screen-sm mb-6">
        <div className="grid grid-flow-col-dense items-center gap-2 px-4 xl:p-0 h-10  overflow-y-hidden">
          {navLinks.map((nav, i) => (
            <a
              key={i}
              className={cn(
                "cursor-pointer w-fit flex whitespace-nowrap",
                category === nav.value ? "text-foreground" : "text-gray"
              )}
            >
              {nav.name}
            </a>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
      <div className="grid gap-y-8 md:gap-y-12 gap-x-8 grid-cols-[repeat(auto-fill,minmax(275px,1fr))] px-6 xl:px-0">
        {[...Array(4)].map((t, i) => (
          <div key={i} className="space-y-4 md:p-0">
            <Image
              src={"/templates/demo.png"}
              alt="Template"
              width={400}
              height={400}
            />
            <div>
              <h4>London</h4>
              <p className="text-xs">
                Classically structured resume template, for a robust career
                history.
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex md:hidden items-center justify-end p-4">
        <Link
          href={"/"}
          className={cn(buttonVariants({ variant: "secondary" }), "w-full")}
        >
          Create resume for free
        </Link>
      </div>
    </div>
  )
}

export default Templates
