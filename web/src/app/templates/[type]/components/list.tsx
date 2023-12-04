"use client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/context/mobile";
import { cn } from "@/lib/utils";
import { TemplateType } from "@/types/templates";
import Image from "next/image";
import React, { useState } from "react";

const navLinks = {
  resume: [
    { name: "Simple", value: "simple" },
    { name: "Professional", value: "professional" },
    { name: "Creative", value: "creative" },
    { name: "With Image", value: "with-image" },
    { name: "Without Image", value: "without-image" },
  ],
  coverletter: [
    { name: "Simple", value: "simple" },
    { name: "Professional", value: "professional" },
    { name: "Creative", value: "creative" },
  ],
};
const TemplatesList = ({ type }: { type: TemplateType }) => {
  const [category, setCategory] = useState(navLinks[type][0].value);
  const isMobile = useIsMobile();

  return (
    <div className="mx-auto max-w-screen-xl">
      <div
        className={cn(
          "sticky top-0 z-50 bg-background h-20 flex items-center mb-2 overflow-x-auto",
          type === "coverletter"
            ? "justify-center"
            : "justify-start sm:justify-center"
        )}
      >
        <div
          className={cn(
            "grid grid-flow-col-dense items-center px-4 xl:p-0 gap-2"
          )}
        >
          {navLinks[type].map((nav, i) => (
            <a
              key={i}
              className={cn(
                "cursor-pointer w-fit p-2 flex whitespace-nowrap font-normal",
                category === nav.value ? "text-foreground" : "text-gray"
              )}
            >
              {nav.name}
            </a>
          ))}
        </div>
      </div>
      <div className="grid gap-y-8 md:gap-y-12 gap-x-8 grid-cols-[repeat(auto-fill,minmax(275px,1fr))] px-2">
        {[...Array(4)].map((t, i) => (
          <div key={i} className="space-y-4 p-4 md:p-0">
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
      {isMobile && (
        <div className="px-6 mt-10">
          <Button className="w-full">Show all</Button>
        </div>
      )}
    </div>
  );
};

export default TemplatesList;
