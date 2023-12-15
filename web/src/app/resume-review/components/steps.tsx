"use client"
import { useIsMobile } from "@/context/mobile"
import { cn } from "@/lib/utils"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import { useInView } from "react-intersection-observer"

const steps = [
  {
    title: "Register to the Platform",
    description:
      "Create an account on our platform by providing your basic information. It's quick, easy, and free to sign up.",
    image: "/resume-review/step-1.png",
  },
  {
    title: "Create your Resume",
    description:
      "Choose from over 15 free stylish and professional resume templates with predefined sections",
    image: "/resume-review/step-2.png",
  },
  {
    title: "Request a Review and Download",
    description:
      "Ask one of our industry professionals to review your resume and give their feedback. Once ready, download your resume in over 3 file formats",
    image: "/resume-review/step-3.png",
  },
]

const ResumeReviewSteps = () => {
  const [step, setStep] = useState(0)
  const [stop, setStop] = useState(false)
  const isMobile = useIsMobile()

  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0,
  })

  useEffect(() => {
    let intervalId: any
    if (!inView || isMobile || stop)
      return intervalId && clearInterval(intervalId)
    setStep(0)
    intervalId = setInterval(() => {
      setStep((prevCount) => (prevCount === 2 ? 2 : prevCount + 1))
    }, 3000)

    return () => clearInterval(intervalId) // Cleanup the interval on component unmount
  }, [inView, stop, isMobile])

  const total = steps.length
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
  }, [step])

  return (
    <div className="space-y-20" ref={ref}>
      <div className="space-y-4 max-w-screen-md px-6 xl:p-0">
        <h2>Streamlined resume review: how it works?</h2>
        <p className="max-w-screen-sm">
          Our resume review flow is designed to provide you with a seamless and
          efficient experience. Our dedicated HR managers are committed to
          helping you optimize your resume and maximize your job search success.
          Register now and take advantage of our expertise to enhance the impact
          of your resume.
        </p>
      </div>

      <div className="flex flex-col gap-8">
        {isMobile ? (
          steps.map((s, i) => (
            <div className="flex flex-col gap-8 max-w-2xl" key={i}>
              <div className="px-6 xl:p-0">
                <div className="py-6 bg-white rounded-xl w-full px-4">
                  <div className="max-w-sm">
                    <h4 className="text-sm text-secondary">Step {i + 1}</h4>
                    {s.title && (
                      <div className="mt-2">
                        <h3 className="mb-1">{s.title}</h3>
                        <p>{s.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <Image
                  src={s.image}
                  alt="steps image"
                  width={500}
                  height={335}
                />
              </div>
            </div>
          ))
        ) : (
          <div className="flex justify-center">
            <div
              className="flex items-center justify-center animate-in fade-in zoom-in-90 duration-300"
              key={step}
            >
              <Image
                src={steps[step].image}
                alt="steps image"
                width={500}
                height={335}
              />
            </div>
            <div className="w-[10%] flex flex-col">
              {[...Array(steps.length)].map((s, i) => (
                <div
                  key={i}
                  className={cn(
                    "h-full flex ",
                    i === 0
                      ? "items-start"
                      : i === total - 1
                      ? "items-end"
                      : "items-center"
                  )}
                >
                  <div
                    id={"step-" + i}
                    className="relative flex justify-center lg:mb-8 items-center bg-background z-10 flex-1"
                  >
                    {i === step ? (
                      <span className="relative flex items-center justify-center h-8 w-8 rounded-full ring-1 ring-secondary/80 ring-offset-4 z-10 bg-background">
                        <span className="animate-ping duration-1000 absolute inline-flex h-full w-full rounded-full bg-secondary/80 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-5 w-5 bg-secondary"></span>
                      </span>
                    ) : (
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-secondary"></span>
                    )}
                    {i === 0 && (
                      <div
                        id="step-line"
                        className={
                          "w-0.5 bg-secondary/70 absolute top-[100%] z-0 inset-auto"
                        }
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
            <div className="flex-1 flex flex-col gap-6">
              {steps.map((s, i) => (
                <div
                  className="flex flex-col gap-8 cursor-pointer "
                  onMouseEnter={() => setStop(true)}
                  onMouseLeave={() => setStop(false)}
                  key={i}
                  onClick={() => setStep(i)}
                >
                  <div className="px-4 py-6 bg-white rounded-xl w-full animate-in fade-in duration-300">
                    <div className="max-w-sm">
                      <h4 className="text-sm text-secondary">Step {i + 1}</h4>
                      {step === i && (
                        <div className="mt-2">
                          <h3 className="mb-1">{s.title}</h3>
                          <p>{s.description}</p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default ResumeReviewSteps
