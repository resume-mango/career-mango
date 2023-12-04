"use client";
import Icons from "@/components/icons";
import { useIsMobile } from "@/context/mobile";
import React from "react";
const listOne = [
  {
    name: "Cover Letters",
    icon: <Icons.mail className="stroke-primary" />,
  },
  {
    name: "Resume Review",
    icon: <Icons.rocket className="stroke-yellow" />,
  },
  {
    name: "Progress Tracker",
    icon: <Icons.lineChart className="stroke-green" />,
  },
  {
    name: "Live Classes",
    icon: <Icons.graduationCap className="stroke-primary" />,
  },
  {
    name: "Carrer Advice",
    icon: <Icons.lightBulb className="stroke-yellow" />,
  },
  {
    name: "Resume Templates",
    icon: <Icons.file className="stroke-green" />,
  },
];

const listTwo = [
  {
    name: "Dashboard",
    icon: <Icons.layoutDashboard className="stroke-primary" />,
  },
  {
    name: "1-on-1 Support",
    icon: <Icons.headphones className="stroke-yellow" />,
  },
  {
    name: "Job Search",
    icon: <Icons.search className="stroke-green" />,
    soon: true,
  },
  {
    name: "Workbooks",
    icon: <Icons.bookOpen className="stroke-primary" />,
    soon: true,
  },
  {
    name: "IELTS",
    icon: <Icons.globe className="stroke-yellow" />,
    soon: true,
  },
  {
    name: "Calendar",
    icon: <Icons.calendar className="stroke-green" />,
  },
  {
    name: "Job Search",
    icon: <Icons.search className="stroke-yellow" />,
    soon: true,
  },
];

const listThree = [
  {
    name: "Job Search",
    icon: <Icons.search className="stroke-green" />,
    soon: true,
  },
  {
    name: "Workbooks",
    icon: <Icons.bookOpen className="stroke-primary" />,
    soon: true,
  },
  {
    name: "IELTS",
    icon: <Icons.globe className="stroke-yellow" />,
    soon: true,
  },
  {
    name: "Dashboard",
    icon: <Icons.layoutDashboard className="stroke-primary" />,
  },
  {
    name: "1-on-1 Support",
    icon: <Icons.headphones className="stroke-yellow" />,
  },
];

const Features = () => {
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
              {l.soon && (
                <span className="text-xs bg-gradient-to-r to-primary from-orange stroke-white text-white px-4 rounded-full absolute -top-3 left-2 uppercase">
                  Soon
                </span>
              )}

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
                {l.soon && (
                  <span className="text-xs bg-gradient-to-r to-primary from-orange stroke-white text-white px-4 rounded-full absolute -top-3 left-2 uppercase">
                    Soon
                  </span>
                )}
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

export default Features;
