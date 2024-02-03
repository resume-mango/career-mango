import Icons from "@/components/icons"
import React from "react"

const loading = () => {
  return (
    <main className="px-6 animate-in fade-in-25 delay-300">
      <section className="max-w-screen-xl mx-auto my-10 md:my-20 space-y-8 md:space-y-[140px]">
        <h1 className="max-w-3xl mx-auto text-start lg:text-center">
          Insights and inspiration: <br />
          explore our blog
        </h1>
        <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="w-[400px] h-[250px] bg-lightGray/20 rounded-xl animate-pulse"
            ></div>
          ))}
        </div>
      </section>
    </main>
  )
}

export default loading
