"use client";
import Icons from "@/components/icons";
import { useIsMobile } from "@/context/mobile";
import React from "react";
const listOne = [
  {
    name: "Enhanced Visibility",
    icon: <Icons.lightBulb className="stroke-primary" />,
  },
  {
    name: "Tailored Recommendations",
    icon: <Icons.clipboardCheck className="stroke-yellow" />,
  },
  {
    name: "Improved Clarity and Readability",
    icon: <Icons.lineChart className="stroke-green" />,
  },
  {
    name: "Objective Feedback",
    icon: <Icons.graduationCap className="stroke-primary" />,
  },
  {
    name: "Tailored Recommendations",
    icon: <Icons.clipboardCheck className="stroke-yellow" />,
  },
];

const listTwo = [
  {
    name: "Increased Confidence",
    icon: <Icons.rocket className="stroke-yellow" />,
  },
  {
    name: "Maximized Job Search Success",
    icon: <Icons.flame className="stroke-green" />,
  },
  {
    name: "Personalized Guidance",
    icon: <Icons.brush className="stroke-primary" />,
  },
  {
    name: "Alignment with Job Market Trends",
    icon: <Icons.globe className="stroke-green" />,
  },
];

const listThree = [
  {
    name: "Improved Clarity and Readability",
    icon: <Icons.lineChart className="stroke-green" />,
  },
  {
    name: "Objective Feedback",
    icon: <Icons.graduationCap className="stroke-primary" />,
  },
  {
    name: "Tailored Recommendations",
    icon: <Icons.clipboardCheck className="stroke-yellow" />,
  },
  {
    name: "Enhanced Visibility",
    icon: <Icons.lightBulb className="stroke-primary" />,
  },
  {
    name: "Tailored Recommendations",
    icon: <Icons.clipboardCheck className="stroke-yellow" />,
  },
];

const ResumeReviewFeatures = () => {
  const isMobile = useIsMobile();
  return (
    <section className="block max-w-screen-2xl mx-auto">
      <div className="overflow-hidden gap-y-6 flex flex-col w-full relative">
        <div className="absolute left-0 w-28 h-full xl:bg-gradient-to-r xl:from-background z-10" />
        <div className="absolute right-0 w-28 h-full xl:bg-gradient-to-l xl:from-background z-10" />

        <div className="flex gap-4 sm:gap-6 m-auto left-0 whitespace-nowrap will-change-transform horizontal-scroll-right">
          {[...listOne, ...listOne].map((l, i) => (
            <div
              key={i}
              className="gap-4 px-4 sm:px-6  py-4 items-center flex space-x-4w-fit bg-white w-max rounded-2xl"
            >
              <span>{l.icon}</span>
              <span>{l.name}</span>
            </div>
          ))}
        </div>
        <div className="flex gap-4 sm:gap-6 m-auto left-0 whitespace-nowrap will-change-transform horizontal-scroll-left">
          {[...listTwo, ...listTwo].map((l, i) => (
            <div
              key={i}
              className="gap-4 px-4 sm:px-6 py-4 items-center flex space-x-4w-fit  bg-white w-max rounded-2xl relative"
            >
              <span>{l.icon}</span>
              <span>{l.name}</span>
            </div>
          ))}
        </div>
        {isMobile && (
          <div className="relative flex gap-4 sm:gap-6 m-auto left-0 whitespace-nowrap will-change-transform horizontal-scroll-right">
            {[...listThree, ...listThree].map((l, i) => (
              <div
                key={i}
                className="relative gap-4 px-4 sm:px-6 py-4 items-center flex space-x-4w-fit  bg-white w-max rounded-2xl"
              >
                <span>{l.icon}</span>
                <span>{l.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeReviewFeatures;
