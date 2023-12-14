"use client"
import Icons from "@/components/icons"
import { buttonVariants } from "@/components/ui/button"
import { useIsMobile } from "@/context/mobile"
import { cn } from "@/lib/utils"
import { TemplateType } from "@/types/templates"
import Link from "next/link"
import React from "react"
import configuration from "../../../../../config"

const resumeData = {
  title: "Mastering resume creation: essential tips for success",
  desc: "Unlock the secrets to crafting a powerful and impactful resume with our expert tips. From formatting to content, our comprehensive guide will help you create a standout resume that grabs the attention of employers.",
  tips: [
    {
      title: "Tailor your resume to the job description",
      description:
        "Carefully review the job posting and customize your resume to align with the specific requirements and keywords mentioned. Highlight relevant skills, experiences, and achievements that make you a strong fit for the position",
      icon: <Icons.lightBulb className="w-7 h-7 stroke-white" />,
    },
    {
      title: "Optimize your resume for ATS",
      description:
        "Many employers use Applicant Tracking Systems (ATS) to screen resumes. To ensure your resume gets past the initial automated screening, use industry-specific keywords, and organize your information in a clear and structured format. Avoid using complex graphics or formatting that may hinder ATS readability",
      icon: <Icons.rocket className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Quantify your achievements",
      description:
        "Numbers and metrics can add significant value to your resume. Whenever possible, quantify your achievements and results to showcase the impact you've made in previous roles. This can include metrics like revenue generated, percentage improvements, or number of clients served",
      icon: <Icons.arrowUp className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Highlight relevant skills",
      description:
        "Emphasize the skills that are most relevant to the job you're applying for. Include both technical skills specific to your industry and soft skills such as communication, problem-solving, and teamwork. Provide specific examples of how you've utilized these skills in previous roles",
      icon: <Icons.graduationCap className="w-7 h-7 stroke-white" />,
    },
    {
      title: "Keep it concise and focused",
      description:
        "Recruiters often spend a limited amount of time reviewing each resume. Keep your resume concise, ideally one to two pages, and focus on the most relevant information. Use bullet points to highlight key achievements and responsibilities, and avoid lengthy paragraphs",
      icon: <Icons.file className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Proofread and edit",
      description:
        "Ensure your resume is error-free by carefully proofreading and editing it. Look for spelling or grammatical mistakes, inconsistent formatting, or any information that may not be relevant or outdated. Consider seeking feedback from a trusted friend, mentor, or professional resume service to get an outside perspective",
      icon: <Icons.edit className="w-6 h-6 stroke-white" />,
    },
  ],
}

const coverletterData = {
  title: "Mastering the art of cover letters",
  desc: "With our expert guidance, you'll gain the confidence and skills to create cover letters that leave a lasting impression and increase your chances of landing your dream job. Start mastering the art of cover letters today with Careermango.",
  tips: [
    {
      title: "Customize for each application",
      description:
        "Tailor your cover letter to each specific job application. Address the hiring manager by name if possible, and mention the company and position you're applying for. This personalization shows that you've done your research and are genuinely interested in the opportunity.",
      icon: <Icons.brush className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Start with a strong opening",
      description:
        "Grab the reader's attention with a compelling opening paragraph. Highlight your enthusiasm for the role and briefly mention your relevant skills or experiences. Consider starting with an engaging anecdote or a powerful statement that showcases your passion and qualifications.",
      icon: <Icons.flame className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Showcase your unique value",
      description:
        "Use the body of the cover letter to demonstrate why you are the ideal candidate for the position. Highlight specific skills, experiences, or achievements that make you stand out. Provide concrete examples of how your qualifications align with the job requirements and how you can contribute to the company's success.",
      icon: <Icons.crown className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Align with the job description",
      description:
        "Refer to the job description and identify key skills or qualifications the employer is seeking. Incorporate these keywords and phrases into your cover letter to demonstrate your fit for the role. This helps the reader see that you've thoroughly read and understood the requirements of the position.",
      icon: <Icons.clipboardCheck className="w-6 h-6 stroke-white" />,
    },
    {
      title: "Keep it concise and focused",
      description:
        "A cover letter should be concise, typically one page in length. Stick to the most relevant information and avoid repeating what's already mentioned in your resume. Use short paragraphs and bullet points to make it easy for the reader to scan and grasp your key points quickly.",
      icon: <Icons.edit className="w-6 h-6 stroke-white" />,
    },
    {
      title: "End with a strong closing",
      description:
        'Conclude your cover letter by summarizing your interest in the position and expressing your enthusiasm for the opportunity to discuss your qualifications further. Request an interview or indicate your willingness to provide additional information if needed. End with a professional closing, such as "Sincerely" or "Best regards," followed by your name and contact information.',
      icon: <Icons.edit className="w-6 h-6 stroke-white" />,
    },
  ],
}

const TemplateTips = ({ type }: { type: TemplateType }) => {
  const isMobile = useIsMobile()
  const curr = type === "resume" ? resumeData : coverletterData

  const btn = (
    <Link
      href={configuration.links.signup}
      className={cn(buttonVariants(), "w-full sm:w-fit")}
    >
      Sign Up Now
    </Link>
  )

  return (
    <div className="px-6 xl:p-0">
      <div className="mb-8">
        <h2 className="max-w-2xl mb-4">{curr.title}</h2>
        <div className="flex items-end justify-between">
          <p className="max-w-2xl">{curr.desc}</p>
          {!isMobile && btn}
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {curr.tips.map((item, i) => (
          <div key={i} className="bg-white rounded-2xl p-4 space-y-4">
            <div className="w-12 h-12 bg-secondary flex items-center justify-center rounded-full">
              {item.icon}
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      {isMobile && <div className="mt-10">{btn}</div>}
    </div>
  )
}

export default TemplateTips
