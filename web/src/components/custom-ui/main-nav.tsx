"use client"
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useRef } from "react"
import configuration from "../../../config"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "../ui/button"
import useScroll from "@/hooks/scroll"
import { useIsMobile } from "@/context/mobile"
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet"

const gradientClose = (
  <svg
    className="h-9 w-9"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      d="M9 9.21326L30.2132 30.4265M9 30.2132L30.2132 9"
      stroke="url(#paint0_linear_1826_4192)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1826_4192"
        x1="28.8084"
        y1="9"
        x2="8.78368"
        y2="11.2837"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EE3F23" />
        <stop offset="1" stopColor="#FF8A03" />
      </linearGradient>
    </defs>
  </svg>
)

const gradientMenu = (
  <svg
    className="h-9 w-9"
    xmlns="http://www.w3.org/2000/svg"
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
  >
    <path
      d="M5 10H35M5 20H35M5 30H35"
      stroke="url(#paint0_linear_1507_5531)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_1507_5531"
        x1="33.0132"
        y1="10"
        x2="5.15738"
        y2="14.8131"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#EE3F23" />
        <stop offset="1" stopColor="#FF8A03" />
      </linearGradient>
    </defs>
  </svg>
)

const MainNav = () => {
  const { scrollPos, scrollDirection } = useScroll()
  const isMobile = useIsMobile()

  const links = [
    { name: "Resume", url: "/templates/resume" },
    { name: "Cover Letter", url: "/templates/coverletter" },
    { name: "Resume Review", url: "/resume-review" },
    { name: "Pricing", url: "/pricing" },
    { name: "Blog", url: "/blogs" },
  ]

  const actionBtns = {
    login: { name: "Log In", url: process.env.NEXT_PUBLIC_AUTH_URL },
    signup: { name: "Sign Up Now", url: process.env.NEXT_PUBLIC_AUTH_URL },
  }

  const logo = (
    <Link href={"/"} passHref>
      <img
        src="/logo.svg"
        alt={configuration.site.name}
        width={"179px"}
        height={"37px"}
        className="relative bottom-1.5"
      />
    </Link>
  )

  if (isMobile)
    return (
      <Sheet>
        <div className="flex justify-between items-center w-screen p-6">
          {logo}
          <SheetTrigger>{gradientMenu}</SheetTrigger>
        </div>
        <SheetContent side={"left"} hideClose className=" flex flex-col">
          <div className="flex justify-between items-center">
            {logo}

            <SheetClose>
              {gradientClose}
              <span className="sr-only">Close</span>
            </SheetClose>
          </div>
          <div className="space-y-8 flex flex-1 flex-col my-16">
            {links.map((l, i) => (
              <Link href={l.url} key={i} passHref>
                <h2 className="focus:text-primary">{l.name}</h2>
              </Link>
            ))}
          </div>

          <div className="space-y-4">
            <div>
              <Link
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "w-full font-normal"
                )}
                href={actionBtns.login.url!}
              >
                {actionBtns.login.name}
              </Link>
            </div>
            <div>
              <Link
                className={cn(buttonVariants({}), "w-full font-normal")}
                href={actionBtns.signup.url!}
              >
                {actionBtns.signup.name}
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    )

  return (
    <nav
      className={cn(
        "mt-3 z-40 bg-background p-4 transition-all duration-300 ease-in-out sticky top-0",
        scrollPos > 100
          ? scrollDirection === "up"
            ? "translate-y-0"
            : "-translate-y-32"
          : "translate-y-0"
      )}
    >
      <div className="flex justify-between items-center h-fit mx-auto max-w-screen-xl">
        <div>{logo}</div>
        <div className="flex gap-8 font-normal">
          {links.map((l, i) => (
            <Link href={l.url} key={i}>
              {l.name}
            </Link>
          ))}
        </div>

        <div className="gap-8 font-normal">
          <Link
            href={actionBtns.login.url!}
            className={cn(buttonVariants({ variant: "link" }), "font-normal")}
          >
            {actionBtns.login.name}
          </Link>
          <Link href={actionBtns.signup.url!} className={cn(buttonVariants())}>
            {actionBtns.signup.name}
          </Link>
        </div>
      </div>
    </nav>
  )
}

export default MainNav
