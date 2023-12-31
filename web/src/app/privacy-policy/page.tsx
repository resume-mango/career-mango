"use client"
import Footer from "@/components/custom-ui/footer"
import MainNav from "@/components/custom-ui/main-nav"

import React, { Fragment, useEffect, useRef, useState } from "react"
import "../article.css"
import { cn } from "@/lib/utils"
import useScroll from "@/hooks/scroll"

const navItems = [
  "Whats information do we collect?",
  "Data usage",
  "Disclosures to third parties",
  "Data security",
  "Retention of information by the company",
  "User's rights",
  "CASL",
  "Changes to this policy",
  "Contact information",
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
        <h1 className="text-center">Privacy Policy</h1>
        <p>
          This privacy policy (the “Policy”) governs the way in which [please
          insert name of the company which owns the website] (hereinafter
          referred to as “we”, “us” or the “Company”) uses and processes the
          information shared by you (hereinafter referred to as “you”, “yours”
          or the “User”) through Resumemango (the “Website”). We shall comply
          with all the applicable laws, rules and regulations in ensuring
          protection of your information. The Policy shall come into effect as
          soon as you use the Website and access the services (the “Services”)
          therein. If you do not agree with this Policy, please do not use this
          Website or share any information with us. There may be links to
          different third party websites. These websites are respectively
          governed by their own privacy policies. We shall not be liable for the
          way in which these third party websites process information. In case
          you are submitting any information with them, make sure that you are
          familiar with their policies.
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
            {/* 1. What information do we collect? */}
            <div>
              <div>
                <h3 style={{ marginTop: 0 }} id="nav-item-0">
                  1. What information do we collect?
                </h3>
                <ol>
                  <li>
                    There are different kinds of information that we may collect
                    while providing the services to you. This includes your
                    personal information, photograph, details regarding your
                    nationality, biographical information, gender, date of
                    birth, mobile number, email address, physical contact
                    details, professional details, CV and resumes, educational
                    background details, physical and virtual portfolios, bank
                    details and all such information which you provide to us as
                    a result of using this Website, details of the visit to the
                    Website and details which are collected through means of
                    technology such as data of location, traffic data, domain
                    name, IP address, streaming activity, screen content and
                    communication data (collectively referred to as “Data”).
                  </li>
                </ol>
              </div>

              {/* 2. Data usage */}

              <div>
                <h3 id="nav-item-1">2. Data usage</h3>
                <ol>
                  <li>
                    You grant us the right to use the Data in the following mode
                    and manner as specified herein below:
                  </li>
                </ol>
                <ol className="dot">
                  <li>
                    By way of consent. If you provide us the consent to use the
                    Data, then we shall have the right to use and process the
                    same for the reasons which are specified in the Policy,
                    either explicitly or implicitly. The Customer reserves the
                    right to withdraw such consent at any given time by
                    providing notice to us.
                  </li>
                  <li>
                    If it is necessary for you to provide the Data to us to
                    enable the Company to provide the Services.
                  </li>
                  <li>
                    Where the Data shall be necessarily required for us the
                    Company to comply with all required and applicable legal and
                    contractual obligations.
                  </li>
                  <li>
                    For securing any legitimate interest of the User. However,
                    the Company uses its reasonable efforts to ensure that such
                    interests are only secured if they have a greater weightage
                    that the data protection rights of the User.
                  </li>{" "}
                </ol>
                <ol start={2}>
                  <li>
                    You also grant us the right to use the Data for the
                    following purposes:
                  </li>
                </ol>
                <ol className="dot">
                  <li>
                    To ensure that the Company can meets its obligations towards
                    the User. These obligations may arise out of, without
                    limited, law and contract.
                  </li>
                  <li>To grant the User reasonable access of the Website;</li>
                  <li>
                    For the display, marketing and advertisement of the Services
                    to the User;
                  </li>
                  <li>
                    For the provision of necessary details of the Services to
                    the User. Such details may include marketing details;
                  </li>
                  <li>
                    To analyze the performance of Services by the Company and
                    accordingly, evaluate the requirements and needs of the
                    User. This enables us to improve the quality of the Services
                    time to time.
                  </li>
                  <li>
                    For ensuring that the Users can use the features of the
                    Website.
                  </li>
                  <li>
                    To provide the User with important information in relation
                    to our Website and the Services.
                  </li>
                  <li>
                    Our Company focuses on marketing at a huge level. We may use
                    the Data for the purposes of marketing the Services and the
                    Website. This may be done by way of sending you emails,
                    newsletters and other forms of marketing mediums.
                  </li>
                  <li>
                    We further provide the option to opt out of receiving
                    electronic communications from us in connection with
                    marketing of our Website.
                  </li>
                </ol>
              </div>
              {/* 3. Disclosures to third parties */}

              <div>
                <h3 id="nav-item-2">3. Disclosures to third parties</h3>
                <ol>
                  <li>
                    The Company shall have the right to allow its agents,
                    employees, affiliates and independent contractors, and other
                    relevant third parties to use the Data in the same manner
                    and for all such purposes which are specified in this
                    Policy. We will ensure that the same level of protection is
                    deployed to ensure security of the Data at all material
                    times. You shall have the right to request us to provide you
                    with the information in relation to such persons to whom the
                    Data has been disclosed.
                  </li>
                  <li>
                    If the business of the Company is transferred to another
                    individual or entity, or the Company undergoes a scheme of
                    reorganization which includes but is not limited to any
                    acquisition, merger or amalgamation, you agree that the Data
                    that the Company possesses may be transferred to any such
                    entity into which the Company has been reorganized. Such
                    Data may thereafter be used by the entity in accordance with
                    the terms of this Policy. We use our best efforts to ensure
                    that the Data is transferred only for reasons which are
                    completely necessary.
                  </li>
                  <li>
                    The Data may be given to legal courts, enforcement agencies
                    and other agencies which are in the business of
                    investigation. The Data may also be given to other relevant
                    third parties. The Data under this clause may only be shared
                    if required under the law. The User shall have no claim or
                    right that the Data has been shared unlawfully, illegally or
                    in an unauthorized manner.
                  </li>
                  <li>
                    There are various agencies which may require the Data for
                    the purpose of fraud prevention and conducting other related
                    checks. This is for the purposes of performing credit checks
                    and prevention of fraud. If we feel that the Data provided
                    to us is inaccurate and has been misrepresented, such Data
                    shall be provided to the relevant agencies for the
                    performance of checks.
                  </li>
                  <li>
                    CareerMango&apos;s use and transfer to any other app of
                    information received from Google APIs will adhere to{" "}
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy#additional_requirements_for_specific_api_scopes"
                      target="_blank"
                    >
                      Google API Services User Data Policy
                    </a>
                    , including the Limited Use requirements
                  </li>
                </ol>
              </div>
              {/* 4. Data security */}
              <div>
                <h3 id="nav-item-3">4. Data security</h3>
                <ol>
                  <li>
                    {" "}
                    When we collect and process the Data, and while we retain
                    the same, we use reasonable efforts to ensure that the same
                    is protected within commercially acceptable means and
                    measures to reasonably prevent loss and theft, as well as
                    unauthorized access and disclosure.
                  </li>
                  <li>
                    Protected servers are used for the storage and protection of
                    Data. Even though we will do our best to protect the Data
                    provided to us, you agree that no method of electronic
                    storage or transmission is hundred percent (100%) secure and
                    protected, and there can be no guarantee with respect to
                    protection and security of Data. In any case, we will be
                    compliant with all applicable laws and regulations regarding
                    Data protection and breach.
                  </li>
                  <li>
                    The Data we collect is stored and/or processed where we or
                    our partners, affiliates, and third-party providers maintain
                    the systems and facilities in relation to the same. You
                    agree that these locations where we store, process, or
                    transfer the Data may not have the same data protection laws
                    which governs this Policy. If we transfer your Data to third
                    parties in other countries: (i) we will ensure that those
                    transfers are performance in accordance with the
                    requirements of applicable law; and (ii) we will protect the
                    transferred Data in accordance with this Policy.
                  </li>{" "}
                </ol>
              </div>
              {/* 5. Retention of information by the company */}
              <div>
                <h3 id="nav-item-4">
                  5. Retention of information by the company
                </h3>
                <ol>
                  <li>
                    {" "}
                    We retain the Data only for as long as we need to. This
                    duration may depend entirely on the purpose for which the
                    Data is being retain and on the reason for which the Data is
                    being used for. If the Data is no longer required for
                    retention, we will delete it or make it anonymous by
                    removing all details that identify you.
                  </li>
                  <li>
                    However, if required, we may retain the Data for our
                    compliance with an accounting, legal or reporting
                    obligation.
                  </li>
                  <li>
                    We ensure that the access to the Data is restricted to only
                    those persons who need it. The retention periods are
                    primarily based on needs of the business. We assure that the
                    Data will not be retained for any reason which is not
                    necessary.
                  </li>
                </ol>
              </div>
              {/* 6. User’s rights */}
              <div>
                <h3 id="nav-item-5">6. User’s rights</h3>
                <ol>
                  <li>
                    Under this Policy and the applicable laws, rules and
                    regulations, the User shall have the following rights:
                  </li>
                </ol>
                <ol>
                  <li>
                    Withhold or not provide the Data to us, however, it comes
                    with an understanding and acknowledgment that the quality of
                    experience of the Website which you would otherwise receive
                    shall be compromised.
                  </li>
                  <li>
                    If you have previously agreed to us using the Data for
                    marketing purposes, you may withdraw the consent at any
                    point in time. We will provide you with the ability to do
                    so.
                  </li>
                  <li>
                    You can ask us to not use Data for any marketing purposes.
                    This right can be exercised by asking us about the same at
                    any point in time.
                  </li>
                  <li>
                    You have the right to request for complete erasure of Data,
                    in the event, that the Company is non-compliant with this
                    Policy any other applicable laws.
                  </li>{" "}
                </ol>
                <ol start={2}>
                  <li>
                    Please note that if you request us to stop processing the
                    Data completely, then this will mean that you will no longer
                    be able to access the Website and Services and especially
                    those services which require us to use the Data for the
                    better performance
                  </li>
                  <li>
                    In the event you request us to erase or rectify the Data, we
                    may also notify third parties to deal with such data in the
                    similar manner. However, shall be entitled to process the
                    Data in any manner they deem fit.
                  </li>
                </ol>
              </div>
              {/* 7. CASL */}
              <div>
                <h3 id="nav-item-6">7. CASL</h3>
                <ol>
                  <li>
                    {" "}
                    Resumemango is committed to complying with CASL, including
                    its requirements with respect to the sending of billing
                    emails, promotional emails and other communications by us to
                    third parties in any electronic form, including email/text
                    message/instant messages or over social media.
                  </li>
                  <li>
                    {" "}
                    Our Anti-Spam Policy tolerates only CASL compliant email.
                  </li>
                  <li>
                    We limit our communication with third parties, but the End
                    User acknowledges that their data may be shared with parties
                    relevant to the nature of Our business. This may include,
                    but is not limited to, receiving an email link from a third
                    party granting you access to an online class.
                  </li>
                  <li>
                    All emails sent by the Company will be compliant with CASL
                    and will include the option to ‘unsubscribe’ if any of
                    recipients chooses to do so.
                  </li>
                  <li>
                    At any point in time, the recipient may ‘unsubscribe’ from
                    receiving our CEMs by emailing: support@resumemango.com and
                    indicating ‘Unsubscribe’ in the subject line.
                  </li>
                  <li>
                    If ‘unsubscribe’ is chosen, the Company will be unable to
                    communicate with the party concerned by electronic means and
                    instead we will use fax or mail. The change in communication
                    means will be done within 10 days of our receipt of the
                    unsubscribe request.
                  </li>{" "}
                </ol>
              </div>
              {/* 8. Changes to this policy */}
              <div>
                <h3 id="nav-item-7">8. Changes to this policy</h3>
                <ol>
                  <li>
                    We reserve the right to change the Policy to reflect updates
                    our business processes, applicable practices in the industry
                    and / or changes to the legal / regulatory regime. If we
                    decide to change this Policy, we are not liable to inform
                    you prior. You should ensure that you are familiar with the
                    Policy and any changes thereto at all material times.
                  </li>
                  <li>
                    {" "}
                    If required under the applicable law, we will get your
                    permission or give you the opportunity to opt in to or opt
                    out of, as applicable, any new uses of the Data.
                  </li>
                </ol>
              </div>
              {/* 9. Contact information */}
              <div style={{ marginBottom: "6rem" }}>
                <h3 id="nav-item-8">9. Contact information</h3>
                <ol>
                  <li>
                    The Services specified herein and on our Website are
                    provided by the Company which is located at 5962 Victoria
                    Street, Peachland, BC, V0H1X4, Canada. You can contact us by
                    sending letters or you may even contact us at our email
                    address at support@resumemango.com
                  </li>
                  <p>
                    <b>Business Address :</b>&nbsp;5962 Victoria Street,
                    Peachland, BC, V0H1X4, Canada
                  </p>
                  <p>
                    <b>Business License :</b>&nbsp;5435
                  </p>
                  <p>
                    <b>Contact email :</b>
                    &nbsp;support@resummango.com
                  </p>
                </ol>
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
