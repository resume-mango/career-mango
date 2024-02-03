import BlogCard from "@/components/custom-ui/cards/blog"
import Pagination from "@/components/custom-ui/pagination"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React from "react"
import configuration from "../../../config"
import { AllBlogs } from "@/types/blog"
import format from "date-fns/format"
import MainImg from "./components/mainImg"

export const generateMetadata = async () => {
  const metadata = {
    title: "Insights and inspiration: explore our blogs",
    description:
      "Unlock Your Career Potential with Our All-in-One Job Hunting Platform! Explore our blogs covering expert tips on resumes, cover letters, and more to land your dream job.",
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

const limit = 30

const getData = async (page: number | undefined) => {
  const res = await fetch(
    `${configuration.site.apiUrl}/public/blogs?limit=${
      !page || page == 0 ? limit + 1 : limit
    }&page=${page || 0}`,
    { next: { revalidate: 15 * 60 } }
  )
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as AllBlogs
}
const Page = async ({
  searchParams: { page },
}: {
  searchParams: { page: number }
}) => {
  const data = await getData(page)
  const mainBlog = (!page || page == 0) && data.items[0]

  const rest =
    (mainBlog && data.items.filter((item: any) => item._id !== mainBlog._id)) ||
    data.items
  return (
    <>
      <main className="px-6">
        <section className="max-w-screen-xl mx-auto my-10 md:my-20 space-y-8 md:space-y-[140px]">
          <h1 className="max-w-3xl mx-auto text-start lg:text-center">
            Insights and inspiration: <br />
            explore our blog
          </h1>
          {mainBlog && (
            <div className="grid gap-8 lg:grid-cols-2" key={mainBlog._id}>
              <Link href={`/blogs/${mainBlog.slug}`} passHref>
                <MainImg url={mainBlog.image} title={mainBlog.title} />
              </Link>
              <div className="space-y-3 flex flex-col">
                <p className="text-gray text-xs">
                  {mainBlog.updatedAt &&
                    format(new Date(mainBlog.updatedAt), "dd MMM yyyy")}
                </p>
                <Link href={`/blogs/${mainBlog.slug}`} passHref>
                  <h3 className="line-clamp-2">{mainBlog.title}</h3>
                </Link>
                <p className="line-clamp-[8]">{mainBlog.short_description}</p>
                <Link
                  href={"/blogs/id"}
                  className={cn(
                    buttonVariants({ variant: "link", size: "link" }),
                    "justify-start flex-1 items-end rounded-none"
                  )}
                >
                  Read more
                </Link>
              </div>
            </div>
          )}
          <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-x-8 gap-y-16">
            {rest.map((blog, i) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
          </div>
          <Pagination
            currentPage={data.page}
            total={data.total}
            limit={limit}
          />
        </section>
      </main>
    </>
  )
}

export default Page
