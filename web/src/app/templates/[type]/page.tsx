import Footer from "@/components/custom-ui/footer"
import MainNav from "@/components/custom-ui/main-nav"
import React, { useMemo } from "react"
import TemplateHero from "./components/hero"
import TemplatesList from "./components/list"
import Reviews from "../../components/reviews"
import TemplateTips from "./components/tips"
import Faqs from "@/components/custom-ui/faqs"
import WhyDiffrent from "@/components/custom-ui/whyDiffrent"
import { ITemplate, TemplateType } from "@/types/templates"
import configuration from "../../../../config"

export const generateMetadata = async ({
  params: { type },
}: {
  params: { type: "resume" | "coverletter" }
}) => {
  const metadata = {
    title:
      type === "coverletter"
        ? "The fastest way to create job Cover Letters"
        : "Stand out with these Top-Notch Resume Templates",
    description:
      type === "coverletter"
        ? "Proven cover letter templates to get you noticed by job recruiters. Apply to your ideal job now with these easy to use, professional designs "
        : "These resume templates give you the confidence and edge necessary to catch your recruiters’ attention by standing out. Check out these professionally designed templates and get started now.",
  }

  return {
    title: metadata.title,
    description: metadata.description,

    openGraph: {
      type: "article",
      title: metadata.title, //Post Title
      description: metadata.description, //Post Description,
    },
    twitter: {
      description: metadata.description, //Post Description,
      title: metadata.title, //Post Title,
    },
  }
}

const getData = async (type: TemplateType) => {
  const res = await fetch(
    `${configuration.site.apiUrl}/public/templates/${type}`,
    { next: { revalidate: 15 * 60 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as ITemplate[]
}

const Page = async ({
  params: { type },
}: {
  params: { type: "resume" | "coverletter" }
}) => {
  const data = await getData(type)

  const img: ITemplate[] = []
  const noImg: ITemplate[] = []

  data.forEach((d) => {
    d.image ? img.push(d) : noImg.push(d)
  })

  const params =
    type === "resume"
      ? {
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
            url: "#browse-templates",
            name: "Browse Templates",
          },
        }
      : {
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
            url: "#browse-templates",
            name: "Browse Templates",
          },
        }

  console.log(data)

  return (
    <>
      <MainNav />
      <main>
        <section className="max-w-screen-xl mx-auto my-20 space-y-[140px]">
          <TemplateHero type={type} />
          <div id="browse-templates">
            <TemplatesList type={type} templates={{ img, noImg }} />
          </div>
          <Reviews />
          <TemplateTips type={type} />
          <WhyDiffrent.style2 {...params} />
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Page
