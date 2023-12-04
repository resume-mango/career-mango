import Footer from "@/components/custom-ui/footer";
import MainNav from "@/components/custom-ui/main-nav";
import React, { useMemo } from "react";
import TemplateHero from "./components/hero";
import TemplatesList from "./components/list";
import Reviews from "../../components/reviews";
import TemplateTips from "./components/tips";
import Faqs from "@/components/custom-ui/faqs";
import WhyDiffrent from "@/components/custom-ui/whyDiffrent";

const Page = ({
  params: { type },
}: {
  params: { type: "resume" | "coverletter" };
}) => {
  const params = useMemo(() => {
    if (type === "resume") {
      return {
        title: "Take the next step toward your dream career",
        description:
          "Don't wait any longer to supercharge your career! Join Career Mango today and gain access to a wealth of resources, expert guidance, and job opportunities. Take the next step towards landing your dream job and achieving professional success. Sign up now and let Career Mango be your trusted partner on your career journey.",
        image: "/templates/resume-why-diffrent.png",
        keyPoints: [
          "Best resume templates",
          "Proven effectiveness",
          "Attractive design",
          "Free forever",
          "Easy to use",
        ],
        button: {
          url: "/",
          name: "Browse Templates",
        },
      };
    } else {
      return {
        title: "Craft compelling cover letters and stand out from the crowd",
        description:
          "Unleash the power of persuasion with expertly written cover letters. learn how to capture hiring managers' attention, showcase your unique value, and secure more job interviews. take your application to the next level with careermango's comprehensive guide to cover letter success. get started today and unlock the door to your dream career.",
        image: "/templates/coverletter-why-diffrent.png",
        keyPoints: [
          "Best cover letter templates",
          "Proven effectiveness",
          "Attractive design",
          "Free forever",
          "Easy to use",
        ],
        button: {
          url: "/",
          name: "Browse Templates",
        },
      };
    }
  }, [type]);

  return (
    <>
      <MainNav />
      <main>
        <section className="max-w-screen-xl mx-auto my-20 space-y-[140px]">
          <TemplateHero type={type} />
          <TemplatesList type={type} />
          <Reviews />
          <TemplateTips type={type} />
          <WhyDiffrent.style2 {...params} />
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
