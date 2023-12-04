import MainNav from "@/components/custom-ui/main-nav";
import { Button } from "@/components/ui/button";

import Image from "next/image";
import Features from "./components/features";
import Templates from "./components/templates";
import ResumeReview from "./components/resumeReview";
import Video from "./components/video";
import Journery from "./components/journery";
import Blog from "./components/blog";
import Faqs from "../components/custom-ui/faqs";
import Footer from "@/components/custom-ui/footer";
import WhyDiffrent from "@/components/custom-ui/whyDiffrent";
export default function Home() {
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
            <Button className="sm:w-fit w-full">Try For Free</Button>
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
        <Templates />
        <ResumeReview />
        <WhyDiffrent.style1 />
        <Video />
        <Journery />
        <Blog />
        <Faqs />
      </main>
      <Footer />
    </>
  );
}
