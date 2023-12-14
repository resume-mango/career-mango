import Footer from "@/components/custom-ui/footer"
import MainNav from "@/components/custom-ui/main-nav"
import React from "react"
import Link from "next/link"
import configuration from "../../../../config"
import "../../article.css"
import ReadMore from "./components/readMore"
import MainImg from "./components/mainImg"
import { SingleBlog } from "@/types/blog"
import Article from "./components/article"
import Loading from "./loading"

const getData = async (slug: string) => {
  const res = await fetch(`${configuration.site.apiUrl}/public/blog/${slug}`, {
    next: { revalidate: 15 * 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as SingleBlog
}

const Page = async ({ params: { slug } }: { params: { slug: string } }) => {
  const data = await getData(slug)
  return (
    <>
      <main className="px-6 xl:px-0 max-w-screen-xl mx-auto mt-10 mb-20">
        <p className="space-x-1 text-sm mb-4">
          <Link href={"/"}>Home</Link>
          <span>/</span>
          <Link href={"/blogs"}>Blogs</Link>
          <span>/</span>
          <span>{data.title}</span>
        </p>
        <div className="">
          <MainImg />
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 my-10">
            <h2 className="flex-1">
              How to Find the Perfect Internship: A Comprehensive Guide
            </h2>
            <div className="w-[350px] text-start md:text-end text-gray text-sm font-normal">
              <p>28 May 2023</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-12">
          <Article content={data.content} />
          <ReadMore blogs={data.readMore} />
        </div>
      </main>
    </>
  )
}

export default Page
