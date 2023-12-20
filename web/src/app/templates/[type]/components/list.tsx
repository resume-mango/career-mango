"use client"
import { Button } from "@/components/ui/button"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useIsMobile } from "@/context/mobile"
import { cn } from "@/lib/utils"
import { ITemplate, TemplateType } from "@/types/templates"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"

const TemplatesList = ({
  type,
  templates,
}: {
  type: TemplateType
  templates: { img: ITemplate[]; noImg: ITemplate[] }
}) => {
  const [category, setCategory] = useState<string>("simple")
  const isMobile = useIsMobile()

  const navLinks = {
    resume: [
      {
        name: "Simple",
        value: "simple",
        templates: [
          templates.noImg[0],
          templates.noImg[3],
          templates.img[0],
          templates.img[3],
        ],
      },
      {
        name: "Professional",
        value: "professional",
        templates: [
          templates.noImg[1],
          templates.noImg[2],
          templates.img[1],
          templates.img[2],
        ],
      },
      {
        name: "Creative",
        value: "creative",
        templates: [
          templates.img[2],
          templates.img[1],
          templates.noImg[0],
          templates.img[3],
        ],
      },
      {
        name: "With Image",
        value: "img",
        templates: templates.img,
      },
      {
        name: "Without Image",
        value: "noImg",
        templates: templates.noImg,
      },
    ],
    coverletter: [
      {
        name: "Simple",
        value: "simple",
        templates: [
          templates.noImg[0],
          templates.noImg[1],
          templates.noImg[2],
          templates.noImg[3],
        ],
      },
      {
        name: "Professional",
        value: "professional",
        templates: [
          templates.noImg[3],
          templates.noImg[4],
          templates.noImg[2],
          templates.noImg[1],
        ],
      },
      {
        name: "Creative",
        value: "creative",
        templates: [
          templates.noImg[3],
          templates.noImg[4],
          templates.noImg[5],
          templates.noImg[6],
        ],
      },
    ],
  }
  const curr = navLinks[type].find((n) => n.value === category)?.templates
  if (!curr) return null
  return (
    <div className="mx-auto max-w-screen-xl">
      <div
        className={cn(
          "sticky top-0 z-50 bg-background flex justify-center overflow-hidden ",
          type === "coverletter"
            ? "justify-center"
            : "justify-start sm:justify-center"
        )}
      >
        <ScrollArea className={"max-w-fit px-4 xl:px-0 mb-4"}>
          <div
            className={cn("h-20 grid grid-flow-col-dense items-center gap-4")}
          >
            {navLinks[type].map((nav, i) => (
              <a
                key={i}
                title={nav.name}
                className={cn(
                  "cursor-pointer w-fit p-2 flex whitespace-nowrap font-normal",
                  category === nav.value ? "text-foreground" : "text-gray"
                )}
                onClick={() => setCategory(nav.value)}
              >
                {nav.name}
              </a>
            ))}
          </div>

          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>

      <div className="grid gap-y-8 md:gap-y-12 gap-x-8 grid-cols-[repeat(auto-fill,minmax(275px,1fr))] px-6">
        {curr.map((t) => (
          <div
            key={type + category + t._id}
            className="space-y-4 md:p-0 animate-in fade-in zoom-in-90 duration-300"
          >
            {" "}
            <Link
              href={`${process.env.NEXT_PUBLIC_APP_URL}/${type}s/new/${t.name}`}
              passHref
            >
              <Image
                src={t.thumbnail}
                alt={t.name}
                width={400}
                height={400}
                className="bg-lightGray/20"
              />
            </Link>
            <div>
              <h4 className="capitalize">{t.friendly_name || t.name}</h4>
              <p className="text-xs">
                Classically structured resume template, for a robust career
                history.
              </p>
            </div>
          </div>
        ))}
      </div>
      {isMobile && (
        <div className="px-6 mt-10">
          <Button className="w-full">Show all</Button>
        </div>
      )}
    </div>
  )
}

export default TemplatesList
