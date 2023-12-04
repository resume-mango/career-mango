import Image from "next/image";
import React from "react";
import configuration from "../../../config";
import Link from "next/link";
import Icons from "../icons";
import { cn } from "@/lib/utils";
import { buttonVariants } from "../ui/button";

const Footer = () => {
  return (
    <footer className="flex justify-between items-center h-fit mx-auto max-w-screen-xl p-4 xl:px-0">
      <div className="bg-black rounded-2xl text-white p-8 space-y-6 w-full">
        <div className="gap-10 md:gap-16 flex flex-col md:flex-row">
          <div className="space-y-6 flex-1">
            <Image
              src="/logo-white.svg"
              alt={`${configuration.site.siteName} logo`}
              width={180}
              height={40}
            />
            <p className="text-lightGray max-w-md">
              Careermango is more than just a Resume builder. We have you
              covered all from the Resume & Cover letter writting to Job search,
              interview prep and Career Counseling courses.
            </p>
          </div>
          <div className="w-full md:w-1/4 space-y-6">
            <h3>Navigation</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href={"/"}>Resume</Link>
              <Link href={"/"}>Pricing</Link>
              <Link href={"/"}>Cover Letter</Link>
              <Link href={"/"}>Blog</Link>
            </div>
          </div>
          <div className="w-full md:w-1/4 space-y-6">
            <h3>Social Links</h3>
            <div>
              <Link
                href={"/"}
                className={cn(
                  buttonVariants({ size: "icon" }),
                  "flex items-center justify-center"
                )}
              >
                <Icons.linkedin className="w-5 h-5 stroke-white fill-white" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between md:items-center text-muted-foreground w-full gap-4">
          <div className="space-x-6 w-full flex justify-between sm:justify-start">
            <Link href={"/"}>Privacy Policy</Link>
            <Link href={"/"}>Terms & Conditions</Link>
          </div>
          <div className="space-x-6 w-fit whitespace-nowrap">
            <p>© Copyright 2023 Resumemango.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
