"use client";
import Faqs from "@/components/custom-ui/faqs";
import Footer from "@/components/custom-ui/footer";
import MainNav from "@/components/custom-ui/main-nav";
import Icons from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { useIsMobile } from "@/context/mobile";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React, { useCallback, useMemo } from "react";

const features = [
  {
    icon: <Icons.clipboardCheck />,
    title: "Resume templates",
  },
  {
    icon: <Icons.timer />,
    title: "Progress Tracker",
  },
  {
    icon: <Icons.file />,
    title: "Cover letter templates",
  },
  {
    icon: <Icons.layoutDashboard />,
    title: "Dynamic Dashboard",
  },
  {
    icon: <Icons.paperClip />,
    title: "Free PDF and Docx downloads",
  },
  {
    icon: <Icons.headphones />,
    title: "1-1 Support",
  },
  {
    icon: <Icons.download />,
    title: "Unlimited downloads",
  },
  {
    icon: <Icons.graduationCap className="w-5 h-5" />,
    title: "Live classes",
  },
  {
    icon: <Icons.rocket className="w-5 h-5" />,
    title: "Resume Review Access",
  },
  {
    icon: <Icons.crown className="w-5 h-5" />,
    title: "Early access to all new features",
  },
];

const plans = [
  {
    name: "Starter",
    amount: 0,
    features: [
      "Resume templates",
      "Cover letter templates",
      "Free PDF and Docx downloads",
    ],
  },
  {
    name: "Pro",
    amount: 29.99,
  },
];

const payments = [
  "/pricing/payments/google-pay.png",
  "/pricing/payments/visa.png",
  "/pricing/payments/mastercard.png",
  "/pricing/payments/american-express.png",
  "/pricing/payments/jcb.png",
  "/pricing/payments/discover.png",
  "/pricing/payments/unionpay.png",
];

const Page = () => {
  const isMobile = useIsMobile();

  const featureList = useCallback(
    (plan: string) => {
      if (isMobile) {
        const currPlan = plans.find((p) => p.name === plan);
        if (currPlan?.features) {
          const cloned = Array.from(features);
          const list: typeof features = [];

          currPlan.features.forEach((f) => {
            const idx = cloned.findIndex((v) => v.title === f);
            if (idx === -1) return;
            list.push(cloned[idx]);

            cloned.splice(idx, 1);
          });

          return [...list, ...cloned];
        }
      }
      return features;
    },
    [isMobile]
  );

  return (
    <>
      <MainNav />
      <main>
        <section className="max-w-screen-xl mx-auto my-20 space-y-[140px]">
          <div className="px-4 xl:p-0">
            <div className="mx-auto max-w-screen-md text-center space-y-2 mb-16">
              <h1>Pricing and Plans</h1>
              <p className="max-w-md mx-auto">
                Choose a plan that works for you without sacrificing the
                features you really want.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {plans.map((p, i) => (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-4 md:px-8 md:py-10 text-center relative overflow-hidden"
                >
                  {i === 0 ? (
                    <div className="absolute top-0 left-0">
                      <Image
                        src={"/pricing/leaves.png"}
                        alt="leaves image"
                        width={isMobile ? 150 : 200}
                        height={350}
                      />
                    </div>
                  ) : (
                    <div className="absolute -top-6 -left-10">
                      <Image
                        src={"/homepage/mangos.png"}
                        alt="mangos image"
                        width={isMobile ? 175 : 250}
                        height={300}
                      />
                    </div>
                  )}
                  <div className="max-w-xs mx-auto h-[175px]">
                    <h3 className="text-orange mb-5">{p.name}</h3>
                    <h2 className="mb-5">${p.amount}</h2>
                    <p>{p.amount === 0 ? "Free Forever" : "Per Month"}</p>
                    {p.amount === 0 && (
                      <p className="text-xs text-muted-foreground">
                        No credit card needed
                      </p>
                    )}
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 my-10 gap-5">
                    {featureList(p.name).map((f, k) => (
                      <div className="flex items-center space-x-3" key={k}>
                        <div
                          className={cn(
                            "w-9 h-9 flex items-center justify-center rounded-full [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-white",
                            !p.features || p.features.includes(f.title)
                              ? "bg-secondary"
                              : "bg-lightGray"
                          )}
                        >
                          {f.icon}
                        </div>
                        <div className="text-start flex-1">{f.title}</div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <Link
                      href={"/"}
                      className={cn(buttonVariants(), "w-full sm:w-fit")}
                    >
                      {p.amount === 0 ? "Get Started" : "Upgrade Plan"}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full mx-auto">
            <h2 className="text-center mb-12">Accepted Payment Platforms</h2>
            {isMobile ? (
              <div className="overflow-hidden gap-y-6 flex flex-col w-full relative">
                <div className="absolute left-0 w-28 h-full xl:bg-gradient-to-r xl:from-background z-10" />
                <div className="absolute right-0 w-28 h-full xl:bg-gradient-to-l xl:from-background z-10" />
                <div
                  className={`relative w-[1800px] flex gap-4 sm:gap-6 m-auto left-0 whitespace-nowrap will-change-transform horizontal-scroll-right`}
                >
                  {[...payments, ...payments].map((p, i) => (
                    <div key={i} className="w-[140px]">
                      <Image
                        src={p}
                        alt="payment icon"
                        width={100}
                        height={40}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <div className="flex gap-x-4 gap-y-8 justify-center flex-wrap">
                {payments.map((p, i) => (
                  <div key={i} className="w-[140px]">
                    <Image src={p} alt="payment icon" width={100} height={40} />
                  </div>
                ))}
              </div>
            )}
          </div>
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
