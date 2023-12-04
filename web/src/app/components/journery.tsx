"use client";
import { useIsMobile } from "@/context/mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React, { useEffect } from "react";

const steps = [
  "Found CareerMango and created a stellar resume",
  "Took a live class and career advices",
  "Landed a job with a tech firm in Vancouver!",
];

const Journery = () => {
  const isMobile = useIsMobile();

  const total = 3;

  useEffect(() => {
    const first = document.getElementById("journey-0");
    const firstRect = first?.getBoundingClientRect();
    const lastRect = document
      .getElementById("journey-" + (total - 1))
      ?.getBoundingClientRect();
    if (!firstRect || !lastRect) return;
    if (!isMobile) {
      const distance =
        (lastRect?.left - firstRect?.left || 0) - (first?.offsetWidth || 0);
      const line = document.getElementById("journey-line");
      if (!line) return;
      line.style.width = distance + "px";
    } else {
      const distance =
        (lastRect?.top - firstRect?.top || 0) - (first?.offsetHeight || 0);
      const line = document.getElementById("journey-line");
      if (!line) return;
      line.style.height = distance + "px";
    }
  }, []);

  return (
    <section className="mx-auto max-w-screen-xl space-y-8 lg:space-y-16">
      <div className="flex flex-col lg:flex-row items-center gap-16">
        <div className="lg:w-1/2 px-6">
          <h2 className="mb-4 lg:mb-8">
            Walkthrough Harpreet’s Career Mango Journey
          </h2>
          <div className="space-y-2">
            <p>
              Harpreet moved to Canada and almost immediately encountered
              difficulties as a result of the language barrier (English).
            </p>
            <p>
              Studying for the IELTs became hard and complicated. She needed to
              land her dream job but the struggle to find a job was enormous.
            </p>
            <p>
              She wasn’t able to write a perfect resume as she had very little
              professional writing skills.
            </p>
          </div>
        </div>
        <div className="pr-6">
          <Image
            src={
              isMobile
                ? "/homepage/harpreet-mobile.png"
                : "/homepage/harpreet.png"
            }
            alt="Harpreet's Image"
            width={550}
            height={550}
          />
        </div>
      </div>
      <div className="grid lg:grid-cols-3 items-center justify-center gap-10 px-6">
        {steps.map((s, i) => (
          <div
            key={i}
            className="flex lg:flex-col items-center gap-10 lg:gap-4 relative"
          >
            <div
              id={"journey-" + i}
              className="relative flex justify-center lg:mb-8 items-center bg-background z-10"
            >
              <span className="relative flex items-center justify-center h-8 w-8 rounded-full ring-1 ring-secondary/80 ring-offset-4 z-10 bg-background">
                <span className="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-secondary/80 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-secondary"></span>
              </span>
              {i === 0 && (
                <div
                  id="journey-line"
                  className={cn(
                    "w-0.5 bg-secondary/70 absolute top-[100%] z-0",
                    !isMobile && "h-0.5 top-[50%] left-[100%]"
                  )}
                />
              )}
            </div>
            <div className="bg-white px-6 py-4 h-24 rounded-2xl w-full">
              <h3>{s}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Journery;
