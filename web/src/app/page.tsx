import MainNav from "@/components/custom-ui/main-nav"
import { buttonVariants } from "@/components/ui/button"

import Image from "next/image"
import Features from "./components/features"
import Link from "next/link"
import { cn } from "@/lib/utils"
import configuration from "../../config"
import { HomepageAPIResult } from "@/types/blog"
import WhyDiffrent from "@/components/custom-ui/whyDiffrent"
import ResumeReview from "./components/resumeReview"
import Video from "./components/video"
import Journery from "./components/journery"
import Faqs from "@/components/custom-ui/faqs"
import Footer from "@/components/custom-ui/footer"

const getData = async () => {
  const res = await fetch(`${configuration.site.apiUrl}/public/home`, {
    next: { revalidate: 15 * 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as HomepageAPIResult
}
export default async function Home() {
  const data = await getData()

  return (
    <>
      <MainNav />
      <main className="bg-background overflow-hidden space-y-16 md:space-y-32 mb-20 lg:my-20">
        <section className="w-full flex flex-col-reverse md:flex-row mx-auto max-w-screen-xl">
          <div className="flex-1 flex justify-center flex-col px-6 xl:p-0">
            <h1 className="mb-4 max-w-screen-sm">
              Bringing all your Job Hunting needs in one place
            </h1>
            <p className="max-w-screen-sm mb-10">
              We offer Resume Reviews, Interview Prep & Career Advice from
              highly educated industry leaders with 10+ years of HR and
              recruiting experience
            </p>
            <Link
              href={process.env.NEXT_PUBLIC_APP_URL!}
              className={cn(buttonVariants(), "sm:w-fit w-full")}
            >
              Try For Free
            </Link>
          </div>
          <div className="mb-10 sm:mb-0">
            <Image
              src={"/homepage/hero.png"}
              alt="hero image"
              width={500}
              height={500}
              loading="eager"
            />
          </div>
        </section>
        <Features />
        {/* <Templates templates={data.resumes} /> */}
        <ResumeReview />
        <WhyDiffrent.style1 />
        <Video />
        <Journery />
        {/* <Blog blogs={data.blogs} /> */}
        <Faqs />
      </main>

      <Footer />
    </>
  )
}
