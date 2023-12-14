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
import format from "date-fns/format"

const getData = async (slug: string) => {
  const res = await fetch(`${configuration.site.apiUrl}/public/blog/${slug}`, {
    next: { revalidate: 15 * 60 },
  })

  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as SingleBlog
}

export const generateMetadata = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = params.slug && (await getData(params.slug))
  if (!post) return

  return {
    title: post.title, //Post Title
    description: post.short_description, //Post Description,

    alternates: {
      canonical: post.slug, // Post Canonical
    },
    openGraph: {
      type: "article",
      title: post.title, //Post Title
      description: post.short_description, //Post Description,
      publishedTime: post.updatedAt, //Update
      images: post.image, //Post Image Url,
    },
    twitter: {
      description: post.short_description, //Post Description,
      title: post.title, //Post Title,
      images: post.image, //Post Image Url,
    },
  }
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
          <MainImg url={data.image} title={data.title} />
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 my-10">
            <h2 className="flex-1">{data.title}</h2>
            <div className="w-[350px] text-start md:text-end text-gray text-sm font-normal">
              <p> {format(new Date(data.updatedAt), "dd MMM yyyy")}</p>
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
