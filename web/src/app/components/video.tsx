"use client";
import { buttonVariants } from "@/components/ui/button";
import { useIsMobile } from "@/context/mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

const Video = () => {
  const isMobile = useIsMobile();
  const btn = (
    <Link href="/" className={cn(buttonVariants(), "w-full md:w-fit")}>
      Watch the demo
    </Link>
  );
  return (
    <section className="mx-auto max-w-screen-xl px-6">
      <div className="flex-col-reverse  lg:flex-row flex items-center gap-8 md:gap-16">
        <div className="space-y-10">
          <video
            autoPlay
            loop
            muted
            controls
            width={isMobile ? 700 : "100%"}
            height="450"
            className="rounded-3xl"
          >
            <source src="/homepage/demo.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {isMobile && btn}
        </div>
        <div className="space-y-4 xl:space-y-8 w-full xl:max-w-xl">
          <h2>Don’t know where to begin?</h2>
          <p className="xl:max-w-lg w-full">
            Explore our wide range of resume templates designed to help you
            stand out and succeed in the USA and Canada job markets
          </p>
          {!isMobile && btn}
        </div>
      </div>
    </section>
  );
};

export default Video;
