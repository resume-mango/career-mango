"use client"
import Icons from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { useIsMobile } from "@/context/mobile"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useCallback } from "react"

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
]

const freePlanFeatures = [
  "Resume templates",
  "Cover letter templates",
  "Free PDF and Docx downloads",
]

type IPlan = {
  _id: string
  name: string
  description: string
  label: string
  type: string
  price: number
  payment_type: string
  interval: string
  interval_count: number
}

const Plan = ({ plan, idx }: { plan: IPlan; idx: number }) => {
  const isMobile = useIsMobile()

  const currFeatures = plan.price === 0 ? freePlanFeatures : []

  const featureList = useCallback(
    (plan: string) => {
      if (isMobile) {
        if (currFeatures) {
          const cloned = Array.from(features)
          const list: typeof features = []

          currFeatures.forEach((f) => {
            const idx = cloned.findIndex((v) => v.title === f)
            if (idx === -1) return
            list.push(cloned[idx])

            cloned.splice(idx, 1)
          })

          return [...list, ...cloned]
        }
      }
      return features
    },
    [isMobile]
  )

  return (
    <>
      <div className="bg-white rounded-2xl p-4 md:px-8 md:py-10 text-center relative overflow-hidden">
        {idx === 0 ? (
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
          <h3 className="text-orange mb-5">{plan.name}</h3>
          <h2 className="mb-5">${plan.price}</h2>
          <p>{plan.price === 0 ? "Free Forever" : "Per Month"}</p>
          {plan.price === 0 && (
            <p className="text-xs text-muted-foreground">
              No credit card needed
            </p>
          )}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 my-10 gap-5">
          {featureList(plan.name).map((f, k) => (
            <div className="flex items-center space-x-3" key={k}>
              <div
                className={cn(
                  "w-9 h-9 flex items-center justify-center rounded-full [&>svg]:w-4 [&>svg]:h-4 [&>svg]:stroke-white",
                  currFeatures.length === 0 || currFeatures.includes(f.title)
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
            href={
              plan.price === 0
                ? process.env.NEXT_PUBLIC_APP_URL!
                : `${process.env.NEXT_PUBLIC_APP_URL}/subscribe`
            }
            className={cn(buttonVariants(), "w-full sm:w-fit")}
          >
            {plan.price === 0 ? "Get Started" : "Upgrade Plan"}
          </Link>
        </div>
      </div>
    </>
  )
}

export default Plan
