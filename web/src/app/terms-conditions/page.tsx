"use client"
import Footer from "@/components/custom-ui/footer"
import MainNav from "@/components/custom-ui/main-nav"
import { useViewport } from "@/context/viewport"
import Link from "next/link"
import React, { Fragment, useEffect, useRef, useState } from "react"
import "../article.css"
import { cn } from "@/lib/utils"
import useScroll from "@/hooks/scroll"
import debounce from "debounce"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { useIsMobile } from "@/context/mobile"
const navItems = [
  "Introduction",
  "Elegibility Criteria",
  "Independent Contractor",
  "Terms of payments",
  "Electronic communications",
  "Use of resumemango",
  "Modifications and errors",
  "Intellectual property",
  "Confidentiality and disclosure",
  "Use of online portal",
  "Representations",
  "Indemnification",
  "Governing law and dispute resolution",
  "Disclaimer",
  "Non-disparagement",
  "Third party links",
  "General provisions",
  "Prohibited use",
  "Contact us",
]

const TermsConditions = () => {
  const [step, setStep] = useState(0)

  const [cooldown, setCooldown] = useState(false)

  const elementRef = useRef<HTMLDivElement | null>(null)
  const { scrollDirection } = useScroll()

  const total = navItems.length

  useEffect(() => {
    const first = document.getElementById("step-0")
    const firstRect = first?.getBoundingClientRect()
    const lastRect = document
      .getElementById("step-" + (total - 1))
      ?.getBoundingClientRect()
    if (!firstRect || !lastRect) return
    const distance =
      (lastRect?.top - firstRect?.top || 0) - (first?.offsetHeight || 0)
    const line = document.getElementById("step-line")
    if (!line) return
    line.style.height = distance + "px"
  }, [])

  useEffect(() => {
    const container = document.getElementById("scroll-area")
    if (!container) return
    const el = document.getElementById("step-" + step)
    if (!el) return
    container.scrollTo({
      top: el.offsetTop - 100,
      behavior: "smooth",
    })
  }, [step])

  const classNames = [...Array.from({ length: total })].map(
    (_, i) => `#nav-item-${i}`
  )

  const handleIntersection: IntersectionObserverCallback = (entries) => {
    if (cooldown) {
      return setCooldown(false)
    }

    entries.forEach((entry) => {
      const list = scrollDirection === "up" ? classNames.reverse() : classNames
      const index = list.indexOf("#" + entry.target.id)
      if (entry.isIntersecting) {
        setStep(index) // 1-based index
      }
    })
  }

  useEffect(() => {
    const headingRefs = document.querySelectorAll(classNames.join(", "))
    // Create a new IntersectionObserver
    const observer = new IntersectionObserver(handleIntersection, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust the threshold as needed
    })

    // Observe each heading element
    headingRefs.forEach((headingRef) => {
      if (headingRef) {
        observer.observe(headingRef)
      }
    })

    // Cleanup the observer when the component unmounts
    return () => {
      observer.disconnect()
    }
  }, [])

  const handleNav = (idx: number) => {
    const el = document.getElementById(`nav-item-${idx}`)
    window.focus()
    if (!el) return
    setCooldown(true)
    window.scrollTo({ top: el.offsetTop, behavior: "smooth" })
    setStep(idx)
  }

  return (
    <Fragment>
      <MainNav />
      <section className="px-6 xl:px-0 my-20 max-w-screen-xl mx-auto space-y-20">
        <h1 className="text-center">Terms & Conditions</h1>
        <p>
          These terms and conditions (hereinafter referred to as the “Terms and
          Conditions”) govern the relationship between you (hereinafter referred
          to as the “you”, “yours” “User”, or the “Job Seeker”) and Resumemango
          (hereinafter referred to as “we”, “us” or the “Company”). Please
          ensure that you have read the Terms and Conditions carefully. By using
          Resumemango, you agree that you have read, understood, and accepted
          the Terms and Conditions and any policies that are referred to herein.
          Please do not use the Resumemango if you have not read, or do not
          agree with these Terms and Conditions. The Company reserves the right
          to change, amend or modify the Terms and Conditions without any prior
          notice to the User.
        </p>
        <div className="flex flex-col lg:flex-row gap-8 relative">
          <div className="hidden md:block sticky top-0 h-fit">
            <div
              className="h-screen pt-4 pb-10 overflow-y-scroll scrollbar-hide"
              id="scroll-area"
            >
              <div className="w-[300px] gap-6  flex flex-row lg:flex-col h-fit ">
                {navItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex gap-4 justify-start items-center"
                  >
                    <div
                      id={"step-" + i}
                      className="relative flex justify-center items-center bg-background z-10 w-10"
                    >
                      {i === step ? (
                        <span className="relative flex items-center justify-center h-6 w-6 rounded-full outline outline-secondary z-10 bg-background">
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-secondary"></span>
                        </span>
                      ) : (
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
                      )}
                      {i === 0 && (
                        <div
                          id="step-line"
                          className={
                            "w-[1px] bg-secondary/40 absolute top-[100%] z-0 inset-auto"
                          }
                        />
                      )}
                    </div>
                    <a
                      className={cn("flex-1", i === step && "font-semibold")}
                      onClick={() => handleNav(i)}
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <article className="flex-1 pt-4" ref={elementRef}>
            <div>
              <h3 id={"nav-item-0"}>1. Introduction</h3>
              <ol>
                <li>
                  The Company is a limited liability company established under
                  the laws of Canada, having its registered office at 5962
                  Victoria Street, Peachland, BC, V0H1X4. It owns Resumemango.
                </li>
                <li>
                  Resumemango is a one-stop solution for those individuals who
                  are willing to establish their careers. The services we
                  provide include, but aren’t limited to, the following services
                  (collectively referred to as the “Services”) through
                  Resumemango:
                </li>
              </ol>

              <ol className="dot">
                <li>Resume and cover letter creation;</li>
                <li>Resume and cover letter reviews;</li>
                <li>
                  Skill development of individuals who want to apply for jobs;
                </li>
                <li>Provision of appropriate resources and workbooks;</li>
                <li>Assistance in looking for jobs;</li>
                <li>Tracking of career progression;</li>
                <li>Calendar integration;</li>
                <li>
                  Receive information about the companies where they intend to
                  apply (such as employee and statistical details);
                </li>
                <li>Educational videos on attending interviews;</li>
                <li>Materials for job hunting;</li>
                <li>Online classes;</li>
                <li>Forum boards</li>
              </ol>
            </div>

            {/* Eligibility  Criteria*/}

            <div>
              <h3 id={"nav-item-1"}>2. Eligibility Criteria</h3>
              <ol>
                <li>
                  Only natural persons who are of the age 18 or above shall be
                  authorized to use the Resumemango. Any person below the
                  specified age must obtain consent from the parents or legal
                  guardians.
                </li>
              </ol>
            </div>

            {/* 3. Independent Contractor */}
            <div>
              <h3 id={"nav-item-2"}>3. Independent Contractor </h3>
              <ol>
                <li>
                  Nothing contained herein shall be deemed or constructed by
                  either Party hereto or any third party to create any rights,
                  obligations or interests in any third party, or to create any
                  association, partnership, joint venture, the relationship of a
                  principal and agent, the relationship of an employer and
                  employee, or any fiduciary relationship of any kind between
                  the Parties hereto. It is hereby agreed that all obligations
                  performed by either Party to any Party hereunder are as an
                  independent contractor.
                </li>
              </ol>
            </div>

            {/* 4. Terms of payments */}
            <div>
              <h3 id={"nav-item-3"}>4. Terms of payments </h3>
              <ol>
                <li>
                  Resumemango operates on a “freemium” model. This allows user
                  to create and download three resumes per month, and after this
                  they will be required to pay for an upgrade. To see a full
                  list of what is included in each subscription tier, please
                  refer to&nbsp;
                  <Link href="https://www.resumemango.com/pricing">
                    https://www.resumemango.com/pricing
                  </Link>
                  &nbsp;for up-to-date information.
                </li>

                <li>
                  All charges shall be paid on a monthly basis, or a one-time
                  fee, as the case may be. For all monthly payments, you shall
                  be required to provide credit card details. We accept various
                  methods of payment using a third-party provider. You may be
                  charged third-party fees when using these platforms which
                  Resumemango is not liable for. Sales tax and other taxes may
                  be applied to your purchase and will be shown during your
                  checkout. All charges on this platform are charged in Canadian
                  Dollars (CAD).
                </li>
                <li>
                  Your card will be charged at the prescribed month via
                  Resumemango’s platform. You authorize us to charge your credit
                  card on file, and acknowledge that certain subscription tiers
                  have automated recurring charges, and that these subscriptions
                  will not be cancelled unless you notify us. You will have the
                  option to cancel the subscription at any point in time via the
                  Platform or reach out to Us using the contact form.
                </li>
                <li>
                  All updates with respect to usage, billing and promotion
                  offers will be provided to the Job Seeker at the email address
                  provided to the Company. If your information is deemed to be
                  incorrect, fraudulently obtained or expired you will be denied
                  access to the Platform. Our pricing is subject to change and
                  it is up to the User to verify their charges. This includes
                  any corrections or mistakes in pricing, even after a
                  subscription has been started.
                </li>
                <li>
                  Generally, no refunds are issued after an order has been
                  placed. If you are unhappy with our services please
                  contact&nbsp;
                  <Link href="mailto:support@careermango.io">
                    support@careermango.io
                  </Link>
                  &nbsp;and we will provide assistance.
                </li>
              </ol>
            </div>

            {/* 5. Electronic communications */}
            <div>
              <h3 id={"nav-item-4"}>5. Electronic communications </h3>
              <ol>
                <li>
                  When you use Resumemango and access the Services therein, you
                  may be communicating with us or our representative
                  electronically. Therefore, you consent to receive
                  communications from us electronically, which shall include but
                  is not limited to texts, emails, push notifications or
                  messages.
                </li>
              </ol>
            </div>

            {/* 6. Use of resumemango */}
            <div>
              <h3 id={"nav-item-5"}>6. Use of resumemango </h3>
              <ol>
                <li>
                  You will need to create an account on Resumemango to use it.
                  You will be subjected to the terms of the Privacy Policy with
                  respect to the information that you will provide to us for the
                  registration of your account.
                </li>
                <li>
                  You shall not use Resumemango (i) in such manner which impairs
                  the Resumemango or other party’s use of this Resumemango in
                  any manner whatsoever; (ii) use any automatic device,
                  Resumemango or software which is for the purposes of copying
                  any information listed on the Resumemango; (iii) use any
                  process on the Resumemango in an unauthorized manner, which
                  includes but is not limited to disassembling of the software
                  and Resumemango; (iv) attempt to breach the authentication and
                  security measures of the Resumemango, or its any database or
                  server.
                </li>
                <li>
                  The Resumemango shall only be used for lawful purposes. You
                  shall not use the Resumemango (i) in any manner which is in
                  breach of the Terms and Conditions, any other applicable laws,
                  rules and regulations; (ii) to send, receive, download, upload
                  or use material which is incompliant with the Terms and
                  Conditions; (iii) for transmission of any material which is
                  harmful for the Resumemango or the Company. These materials
                  may include Trojan horses, viruses and other related cyber
                  defects; (iv) for impersonation of any other person by
                  creating misleading identity with the intention to defraud or
                  mislead others in any manner whatsoever; or (v) in a manner to
                  interfere with the use and enjoyment of other users of this
                  Resumemango, or in any way which could disable or damage the
                  use of this Resumemango.
                </li>
              </ol>
            </div>

            {/* 7. Modifications and errors */}
            <div>
              <h3 id={"nav-item-6"}>7. Modifications and errors </h3>
              <ol>
                <li>
                  The Company shall have the absolute, unrestricted and
                  unfettered right to amend, alter, change, discontinue and
                  temporarily or permanently suspend the Resumemango either
                  fully or partially at any point in time. The Company shall not
                  be responsible in any manner to any party for damages incurred
                  as a result of such alteration, suspension or discontinuation.
                  The Company shall also have the right to remove the
                  Restaurants from the Resumemango if the Company is of the view
                  that such Restaurant could potentially be subjected to any
                  civil or criminal liability.
                </li>
                <li>
                  We do not guarantee that Resumemango or the Services therein
                  are error free. The website or the Services maybe subject to
                  errors and we do not take any responsibility for the same and
                  for any such damage that you may incur as a result of using
                  the same.
                </li>
              </ol>
            </div>

            {/* 8. Intellectual property */}
            <div>
              <h3 id={"nav-item-7"}>8. Intellectual property </h3>
              <ol>
                <li>
                  The Company shall have the absolute, unrestricted and
                  unfettered right to amend, alter, change, discontinue and
                  temporarily or permanently suspend the Resumemango either
                  fully or partially at any point in time. The Company shall not
                  be responsible in any manner to any party for damages incurred
                  as a result of such alteration, suspension or discontinuation.
                  The Company shall also have the right to remove the
                  Restaurants from the Resumemango if the Company is of the view
                  that such Restaurant could potentially be subjected to any
                  civil or criminal liability.
                </li>
                <li>
                  We do not guarantee that Resumemango or the Services therein
                  are error free. The website or the Services maybe subject to
                  errors and we do not take any responsibility for the same and
                  for any such damage that you may incur as a result of using
                  the same.
                </li>
              </ol>
            </div>

            {/* 9. Confidentiality and disclosure */}
            <div>
              <h3 id={"nav-item-8"}>9. Confidentiality and disclosure</h3>
              <ol>
                <li>
                  For the purposes of the confidential clause (i)
                  &quot;Receiving Party&quot; shall mean either of the Parties
                  hereto, which may be receiving Confidential Information from
                  the other; (ii) &quot;Disclosing Party&quot; shall mean either
                  of the Parties hereto, which may be disclosing Confidential
                  Information to the other; and (iii) Confidential Information
                  shall mean any information that either Party may disclose in
                  confidence provided that the Disclosing Party identifies such
                  information as proprietary, confidential and/or other similar
                  designation, either by marking it, in the case of written
                  materials, or, in the case of information that is disclosed
                  orally or written materials that are not marked, by notifying
                  the Receiving Party of confidential nature of the information,
                  such notification to be done orally, by e-mail or written
                  correspondence, or via other means of communication as might
                  be appropriate, or any such information which under the
                  circumstance surrounding disclosure ought to be treated as
                  confidential.
                </li>
                <li>
                  Confidential Information may be in any form including but not
                  limited to the written or printed information or information
                  in electronic form, research, developmental, engineering,
                  marketing, sales, operating, performance, cost, business and
                  process information, discoveries, ideas, designs, data, plans,
                  designs, photographs, drawings, processes, patents,
                  specifications, product sample, formulae, compositions,
                  technological information, know-how, development or
                  manufacturing techniques, reports, studies, consultants
                  reports, trade secrets, and other finance and trade /
                  commercial information, computer models and programs,
                  contracts, plant designs and configurations, plant performance
                  data or other information, material or documentation of any
                  kind or nature in whatever form in context with this
                  Agreement.
                </li>
                <li>
                  Both the Parties agree that they shall hold the Confidential
                  Information in confidence in accordance with the provisions
                  hereof and take all actions necessary to maintain
                  confidentiality of the Confidential Information and to secure
                  the Confidential Information against theft, loss and/or
                  unauthorized disclosure, and keep under safe custody all those
                  documents and materials, irrespective of their form, which
                  contain or refer to any Confidential Information during the
                  existence of the Agreement.
                </li>
                <li>
                  However, the Receiving Party shall not be responsible for
                  leakage of Confidential Information due to theft, loss
                  and/unauthorized disclosure provided the Receiving Party has
                  established, maintained, implemented and complied with
                  reasonable, procedures and safeguards to protect Confidential
                  Information from potential theft, loss and/or unauthorized
                  disclosure, or any malafide act by any of its employees
                  provided the same was not reasonably foreseeable by the
                  Receiving Party.
                </li>
                <li>
                  Receiving Party undertakes to use the Confidential Information
                  only for the purpose of performance of Services under this
                  Agreement, and not to make any use of the Confidential
                  Information which is not provided in this Agreement without
                  the express prior written consent of the Disclosing Party.
                </li>
                <li>
                  It is understood between the Parties that the Confidential
                  Information does not include information that Receiving Party
                  can reasonably prove that such information is: (i) either
                  legally in possession of Receiving Party or publicly available
                  to Receiving Party prior to disclosure of such information
                  hereunder; (ii) publicly available to Receiving Party without
                  any violation of the Agreement by Receiving Party subsequent
                  to its disclosure hereunder; (iii) legally available to
                  Receiving Party on a non-confidential basis from any third
                  party, the disclosure of which to Receiving Party does not
                  violate any contractual or legal obligation of such third
                  party to Disclosing Party with respect to such information;
                  (iv) independently acquired or developed by Receiving Party;
                  or (v) explicitly approved for release by written
                  authorization of Disclosing Party.
                </li>
              </ol>
            </div>

            {/* 10. Use of online portal */}
            <div>
              <h3 id={"nav-item-9"}>10. Use of online portal </h3>
              <ol>
                <li>
                  The User acknowledges that when submitting a resume for review
                  using the online portal, that their information will be shared
                  with employees of Resumemango. It will not be disclosed to any
                  third parties. By submitting the resume for review, you accept
                  the following:
                </li>
              </ol>
              <ol className="dot">
                <li>
                  You will receive feedback from Resumemango via the portal
                </li>
                <li>
                  Feedback is given as a suggestion and is not a guarantee that
                  you will receive an offer for the prospective job
                </li>
                <li>
                  You do not have to implement any of the suggested feedback,
                  should you warrant it unhelpful
                </li>
                <li>
                  All feedback will be made in a courteous and respectful
                  manner, Resumemango employees will not disparage you or use
                  any harsh or violent language
                </li>
                <li>
                  Any images or feedback shared with the User is considered
                  confidential and the User shall not share it publicly without
                  prior written consent from Resumemango
                </li>
                <li>
                  You shall not spam our resume review feature. This includes
                  sending multiple messages.
                </li>
                <li>
                  Resume reviews take a minimum of 48 hours but can take up to
                  72 hours during business periods
                </li>
                <li>
                  Whilst we try to match you with a reviewer who has experience
                  in the field in which you are applying, this cannot be
                  guaranteed
                </li>
                <li>
                  You may not harass, abuse, or cause grief to our employees via
                  the portal or using any other means
                </li>
                <li>
                  You may not send illegal, profane, abusive, sexually explicit
                  images or messages using the online portal
                </li>
                <li>
                  Employees of Resumemango will only communicate with you in
                  regards to your account and resumes, no further communication
                  is acceptable
                </li>
                <li>
                  You may not send images related to any underage minors using
                  the online portal
                </li>
                <li>
                  Any material deemed to be offensive or illegal will be shared
                  to the appropriate third parties, including but not limited to
                  government authorities
                </li>
                <li>
                  If Resumemango finds you in breach of any of these terms, we
                  have the right to revoke your access to the platform with no
                  refund issued
                </li>
                <li>
                  If your account is in breach of our terms your resume will not
                  be reviewed and your account automatically deleted, with no
                  refund issued
                </li>
                <li>
                  You will only be allowed to submit 3 resumes for review each
                  month
                </li>
              </ol>
            </div>

            {/* 11. Representations  */}
            <div>
              <h3 id={"nav-item-10"}>11. Representations </h3>
              <ol>
                <li>
                  The User hereby represents and warrants that: (i) it has the
                  full right and power to use the Resumemango, to perform all
                  the obligations hereunder, and to grant the rights without
                  violating the legal or equitable rights of any other person or
                  entity, and; (ii) the usage of the Resumemango will not
                  conflict with, or result in a breach of, or default under the
                  terms and conditions of any other agreement and/or arrangement
                  to which the Job Seeker has agreed to, or is a party to, or is
                  legally bound to that effect.
                </li>
              </ol>
            </div>

            {/* 12. Indemnification */}
            <div>
              <h3 id={"nav-item-11"}>12. Indemnification </h3>
              <ol>
                <li>
                  The User hereby covenants, agrees and confirms that it shall
                  indemnify, defend, and hold harmless the Company and their
                  respective partners, subsidiaries, affiliates, successors and
                  assigns and their respective directors, officers, employees
                  and agents from all liabilities, claims, suits, actions,
                  demands, settlements, losses, judgments, costs, damages and
                  expenses (including, without limitation, reasonable
                  attorneys&apos;, accountants&apos; and experts&apos; fees)
                  arising out of or resulting from, in whole or in part: (i) any
                  act, error or omission, whether intentional or unintentional,
                  by the Job Seeker or its officers, directors, employees or
                  sub-administrators, related to or arising out of its
                  obligations and responsibilities under these Terms and
                  Conditions; or (ii) an actual or alleged breach by the Job
                  Seeker of any of its representations, warranties or covenants
                  contained in this Terms and Conditions.
                </li>
              </ol>
            </div>

            {/* 13. Governing law and dispute resolution */}
            <div>
              <h3 id={"nav-item-12"}>
                13. Governing law and dispute resolution
              </h3>
              <ol>
                <li>
                  This Agreement and all matters arising out of or in connection
                  with this Agreement shall be governed by and construed in
                  accordance with the laws of the Canadian Government. Any
                  dispute arising out of or in connection with this Agreement
                  shall be resolved amicably, failing which it shall be referred
                  to the courts of Canada.
                </li>
              </ol>
            </div>

            {/* 14. Disclaimer */}
            <div>
              <h3 id={"nav-item-13"}>14. Disclaimer </h3>
              <ol>
                <li>
                  WE SHALL NOT BE LIABLE FOR ANY DAMAGE THAT MAY OCCUR AS A
                  RESULT OF YOUR USE OF THE RESUMEMANGO, EITHER OCCURRING IN
                  CONTRACT OR TORT, WHETHER FORESEEABLE OR NOT. PARTICULARLY, IN
                  NO EVENT WHATSOEVER, THE COMPANY, ITS SUBSIDIARIES,
                  AFFILIATES, PARTNERS, SUBCONTRACTORS, LICENSORS, EMPLOYEES,
                  DIRECTORS AND/OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY
                  FOR DIRECT, INDIRECT, EXEMPLARY, SPECIAL, CONSEQUENTIAL,
                  PUNITIVE, INCIDENTAL OR ANY OTHER KIND OF DAMAGES, CLAIMS,
                  INJURIES OR LOSSES WHICH ARISE DIRECTLY OR INDIRECTLY FROM THE
                  USE OF RESUMEMANGO, IRRESPECTIVE OF WHETHER SUCH DAMAGE IS DUE
                  TO THE RESULT OF ERRORS, DEFECTS, VIRUSES, INTERRUPTIONS OR
                  DELAYS IN RESUMEMANGO AND/OR THE SERVICES.
                </li>
                <li>
                  THE SERVICES AND THE INFORMATION AND CONTENT IN CONNECTION
                  THERETO PROVIDED TO THE JOB SEEKER BY THE COMPANY UNDER THIS
                  AGREEMENT ARE PROVIDED ON AN AS-IS AND WHERE-IS BASIS WITHOUT
                  ANY WARRANTIES OR REPRESENTATIONS, EXPRESS, IMPLIED OR
                  STATUTORY, INCLUDING BUT NOT LIMITED TO, WARRANTIES OF
                  QUALITY, PERFORMANCE, NON-INFRINGEMENT, MERCHANTABILITY OR
                  FITNESS FOR A PARTICULAR PURPOSE.
                </li>
                <li>
                  THE PARTIES UNDERSTAND THAT THE SERVICES DO NOT GUARANTEE
                  RESULTS. YOU SHALL NOT HOLD THE COMPANY LIABLE IF YOU DO NOT
                  GET ANY RESULTS OF AVAILING THE SERVICES.
                </li>
              </ol>
            </div>

            {/* 15. Non-disparagement */}
            <div>
              <h3 id={"nav-item-14"}>15. Non-disparagement </h3>
              <ol>
                <li>
                  The Job Seeker hereby undertakes that neither the Job Seeker
                  nor any person acting directly or indirectly on his/her behalf
                  shall at any time, whether in public or in private, make,
                  imply, insinuate, state or express any negative, false,
                  defamatory, derogatory or disparaging remark, comment, opinion
                  or statement in respect of the Company or its services,
                  products (including Services), clients, officers, employees or
                  agents. The Job Seeker shall take no action which is intended,
                  or would reasonably be expected, to harm the Company or its
                  services, products (including Services), clients, officers,
                  employees or agents, or harm the reputation of any of the
                  foregoing or which would reasonably be expected to lead to
                  unwanted or unfavorable publicity for any of the foregoing.
                </li>
              </ol>
            </div>

            {/* 16. Third party links */}
            <div>
              <h3 id={"nav-item-15"}>16. Third party links </h3>
              <ol>
                <li>
                  Resumemango may contain links to third party websites. Please
                  click on these links at your own risk. We do not assume any
                  liability for the content on these links. We shall not be
                  responsible for any damage that you may incur as a result of
                  visiting these pages.
                </li>
              </ol>
            </div>

            {/* 17. General provisions */}
            <div>
              <h3 id={"nav-item-16"}>17. General provisions </h3>
              <ol>
                <li>
                  These Terms and Conditions shall constitute the entire
                  agreement and understanding amongst the Parties hereto and
                  supersedes all prior correspondence in this regard.
                </li>
                <li>
                  A waiver of any provision of these Terms and Conditions or of
                  any breach thereof by either Party hereto shall not be deemed
                  a waiver of any repetition of such breach or a waiver of
                  compliance with a term or condition or in any way affect any
                  other terms or conditions hereof, unless signed by the Party
                  giving such waiver.
                </li>
                <li>
                  The failure of either Party to enforce any of the provisions
                  of these Terms and Conditions shall not be construed to be a
                  waiver of such provisions nor of the right of the given Party
                  thereafter to enforce each and every such provision.
                </li>
                <li>
                  These Terms and Conditions and all of its provisions are
                  binding on and inure to the benefit of the Parties and their
                  respective successors and permitted assigns, but neither these
                  Terms and Conditions nor any of the rights, interests, or
                  obligations hereunder may be assigned by either Party without
                  the prior written consent of the other.
                </li>
                <li>
                  In case any provision in these Terms and Conditions are
                  rendered invalid, illegal or unenforceable for any reason
                  whatsoever, the validity, legality and enforceability of the
                  remaining provisions shall not in any way be affected or
                  impaired thereby.
                </li>
              </ol>
            </div>

            {/* 18. Prohibited use */}
            <div>
              <h3 id={"nav-item-17"}>18. Prohibited use </h3>
              <ol>
                <li>As a user of Resumemango’s Platform you agree not to:</li>
              </ol>
              <ol className="dot">
                <li>Engage in any illegal activities</li>
                <li>Share your login with any other user</li>
                <li>Sell or transfer your account to another user</li>
                <li>Impersonate another person</li>
                <li>
                  Steal another user’s account information, or access their
                  account without prior written consent
                </li>
                <li>
                  Use the Platform for any other use, and only use it for its
                  intended use, i.e., resume creation and career progression
                </li>
                <li>Abuse or harass any employees or users of Resumemango</li>
                <li>
                  Upload or transmit (or attempt to upload or to transmit)
                  viruses, Trojan horses, or other material that will interfere
                  with the performance of the platform
                </li>
                <li>
                  Use the Platform in a manner inconsistent with any applicable
                  laws or regulations.
                </li>
                <li>
                  Upload any copyrighted or trademarked materials to the
                  Platform. You acknowledge that any information uploaded is
                  your material
                </li>
                <li>
                  Upload or transmit any harmful, lewd, inflammatory,
                  discriminatory, violent or slanderous materials to the
                  Platform
                </li>
                <li>
                  Use the Platform in a manner inconsistent with any applicable
                  laws or regulations
                </li>
                <li>
                  Engage in any automated use of the system, such as using
                  scripts to send comments or messages, or using any data
                  mining, robots, or similar data gathering and extraction tools
                </li>
                <li>
                  Post or upload materials to the Platform that include
                  offensive comments in relation to race, gender, sexuality,
                  ethnicity, or disability
                </li>
                <li>
                  Post or upload materials that are promotional in nature, such
                  as advertising products and services, spam messaging,
                  soliciting others or promotion of pyramid schemes
                </li>
                <li>
                  Post or upload materials that encourage or incite violence, or
                  threaten physical harm to another person or entity
                </li>
                <li>
                  Post our upload materials that violate the privacy or
                  publicity rights of any third party
                </li>
                <li>
                  Interfere with, disrupt, or create an undue burden on the
                  Platform or the networks or services connected to the
                  Platform.
                </li>
                <li>
                  Disable, copy, adapt, alter, decipher, or otherwise interfere
                  with the software or security related features of the Platform
                </li>
                <li>
                  Create new accounts after you have been banned from the
                  platform
                </li>
                <li>Submit false reports or slander Resumemango publicly</li>
                <li>
                  You acknowledge that if you engage in any of the above points
                  that your access to Resumemango will be revoked immediately
                  and any new accounts you attempt to create will be blocked and
                  removed as deemed fit. Furthermore, account access can be
                  revoked at any time without any prior warning. Resumemango
                  reserves the right to grant and remove access as they deem
                  fit. If you are in violation of any of these prohibited uses
                  you accept that you may face legal action and or be sued in
                  accordance to Canadian law.
                </li>
              </ol>
            </div>

            {/* 19. Contact us */}
            <div>
              <h3 id={"nav-item-18"}>19. Contact us </h3>
              <div style={{ paddingLeft: "1.5rem" }}>
                <p>Our contact details are:</p>
                <p>
                  <Link href={"mailto:support@careermango.io"}>
                    support@careermango.io
                  </Link>
                </p>
                <p>
                  <b>Business Address :</b>&nbsp;5962 Victoria Street,
                  Peachland, BC, V0H1X4, Canada
                </p>
                <p>
                  <b>Business License :</b>&nbsp;5435
                </p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </Fragment>
  )
}
export default TermsConditions
