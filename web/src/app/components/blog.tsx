"use client"
import BlogCard from "@/components/custom-ui/cards/blog"
import { buttonVariants } from "@/components/ui/button"
import { useIsMobile } from "@/context/mobile"
import { cn } from "@/lib/utils"
import Link from "next/link"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/pagination"
import { Pagination } from "swiper/modules"
import { SingleBlogList } from "@/types/blog"

const Blog = ({ blogs }: { blogs: SingleBlogList[] }) => {
  const isMobile = useIsMobile()

  if (!blogs || blogs.length === 0) return null

  const button = (
    <Link
      href={"/blogs"}
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "w-full sm:w-fit"
      )}
    >
      Explore More
    </Link>
  )

  return (
    <section id="blog-section" className="mx-auto max-w-screen-xl px-6">
      <h2 className="max-w-xl mb-4">
        The CareerMango blog - expert job hunting advice and insights
      </h2>
      <div className="flex items-center justify-between mb-16">
        <p className="max-w-2xl">
          Discover the latest tips, trends, and strategies for landing your
          dream job in the USA and Canada.
        </p>
        {!isMobile && button}
      </div>
      <div>
        {isMobile ? (
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: "#paginator",
            }}
          >
            {blogs.map((blog, i) => (
              <SwiperSlide key={i}>
                <BlogCard blog={blog} />
              </SwiperSlide>
            ))}
            <div
              id="paginator"
              className="mt-8 mb-4 flex gap-2 justify-center"
            ></div>
          </Swiper>
        ) : (
          <div id="blog-list" className="grid grid-cols-3 gap-8">
            {blogs.map((blog, i) => (
              <BlogCard key={i} blog={blog} />
            ))}
          </div>
        )}
      </div>
      {isMobile && <div className="my-8">{button}</div>}
    </section>
  )
}

export default Blog
