"use client"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination } from "swiper/modules"
import BlogCard from "@/components/custom-ui/cards/blog"
import "swiper/css"
import "swiper/css/pagination"

import { useIsMobile } from "@/context/mobile"
import { SingleBlogList } from "@/types/blog"
const ReadMore = ({ blogs }: { blogs: SingleBlogList[] }) => {
  const isMobile = useIsMobile()
  return (
    <>
      {isMobile ? (
        <div>
          <h3 className="mb-8 leading-none">Read More</h3>
          <Swiper
            modules={[Pagination]}
            spaceBetween={50}
            slidesPerView={1}
            pagination={{
              clickable: true,
              el: "#paginator",
            }}
            className="w-full"
          >
            {blogs.map((blog, i) => (
              <SwiperSlide key={i}>
                <BlogCard blog={blog} readMore />
              </SwiperSlide>
            ))}
            <div
              id="paginator"
              className="mt-8 mb-4 flex gap-2 justify-center"
            ></div>
          </Swiper>
        </div>
      ) : (
        <div className="w-[350px]">
          <h3 className="mb-8 leading-none">Read More</h3>
          <div className="grid gap-8">
            {blogs.map((b, i) => (
              <BlogCard key={i} blog={b} readMore />
            ))}
          </div>
        </div>
      )}
    </>
  )
}

export default ReadMore
