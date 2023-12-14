import Faqs from "@/components/custom-ui/faqs"
import Footer from "@/components/custom-ui/footer"
import MainNav from "@/components/custom-ui/main-nav"

import React from "react"
import configuration from "../../../config"
import Payments from "./components/payments"
import Plan from "./components/plan"

const getData = async () => {
  const res = await fetch(`${configuration.site.apiUrl}/public/plans`, {
    next: { revalidate: 15 * 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as Array<any>
}

const Page = async () => {
  const data = await getData()
  return (
    <>
      <MainNav />
      <main>
        <section className="max-w-screen-xl mx-auto my-20 space-y-[140px]">
          <div className="px-4 xl:p-0">
            <div className="mx-auto max-w-screen-md text-center space-y-2 mb-16">
              <h1>Pricing and Plans</h1>
              <p className="max-w-md mx-auto">
                Choose a plan that works for you without sacrificing the
                features you really want.
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {data.map((p, i) => (
                <Plan plan={p} key={i} idx={i} />
              ))}
            </div>
          </div>
          <Payments />
          <Faqs />
        </section>
      </main>
      <Footer />
    </>
  )
}

export default Page
