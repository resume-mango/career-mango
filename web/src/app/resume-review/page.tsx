import Footer from "@/components/custom-ui/footer";
import MainNav from "@/components/custom-ui/main-nav";
import ResumeReviewHero from "./components/hero";
import ResumeReviewFeatures from "./components/features";
import ResumeReviewSteps from "./components/steps";
import Reviews from "../components/reviews";
import Faqs from "../../components/custom-ui/faqs";
import WhyDiffrent from "@/components/custom-ui/whyDiffrent";

const Page = ({
  params: { type },
}: {
  params: { type: "resume" | "coverletter" };
}) => {
  return (
    <>
      <MainNav />
      <main>
        <section className="mb-20 2xl:my-20 space-y-[140px]">
          <ResumeReviewHero />
          <ResumeReviewFeatures />
          <div className="space-y-32 max-w-screen-xl mx-auto ">
            <ResumeReviewSteps />
            <Reviews />
            <WhyDiffrent.style2
              title="Take the next step towards resume excellence"
              description="Unlock the power of your resume with our professional review. get personalized feedback, tailored recommendations, and expert insights to elevate your resume and stand out from the competition. don't let your resume hold you back - take the next step towards resume excellence and increase your chances of landing your dream job"
              image="/resume-review/why-diffrent.png"
              button={{ name: "Get your resume reviewed", url: "/" }}
              keyPoints={[
                "Objective feedback from experienced professionals",
                "Alignment with current job market trends",
                "Tailored recommendations for improved impact",
                "Increased confidence in your resume",
              ]}
            />
          </div>
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
