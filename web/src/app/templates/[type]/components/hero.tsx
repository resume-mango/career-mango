import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const TemplateHero = ({ type }: { type: "resume" | "coverletter" }) => {
  const data = {
    resume: {
      title: "Stand out with these Top-Notch Resume Templates",
      desc: "These resume templates give you the confidence and edge necessary to catch your recruiters’ attention by standing out. Check out these professionally designed templates and get started now.",
      image: "/templates/resume-hero.png",
      link: "/",
    },
    coverletter: {
      title: "The fastest way to create job Cover Letters",
      desc: "Proven cover letter templates to get you noticed by job recruiters. Apply to your ideal job now with these easy to use, professional designs",
      image: "/templates/coverletter-hero.png",
      link: "/",
    },
  };

  const curr = data[type];

  return (
    <div className="flex-col-reverse lg:flex-row flex items-center justify-between gap-4 px-6 xl:p-0">
      <div className="flex-1 ">
        <h1 className="mb-4">{curr.title}</h1>
        <p className="lg:max-w-xl mb-10">{curr.desc}</p>
        <Link
          href={curr.link}
          className={cn(buttonVariants(), "flex w-full md:w-fit")}
        >
          Browse Templates
        </Link>
      </div>
      <div className="lg:w-[35%]">
        <Image
          src={curr.image}
          alt={type === "resume" ? "Resume Image" : "Coverletter Image"}
          width={475}
          height={475}
        />
      </div>
    </div>
  );
};

export default TemplateHero;
