"use client";
import BlogCard from "@/components/custom-ui/cards/blog";
import { buttonVariants } from "@/components/ui/button";
import { useIsMobile } from "@/context/mobile";
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Blog = () => {
  const isMobile = useIsMobile();

  const button = (
    <Link
      href={"/"}
      className={cn(
        buttonVariants({ variant: "secondary" }),
        "w-full sm:w-fit"
      )}
    >
      Explore More
    </Link>
  );

  return (
    <section className="mx-auto max-w-screen-xl px-6">
      <h2 className="max-w-xl mb-4">
        The Career Mango blog - expert job hunting advice and insights
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
            {[...Array(3)].map((blog, i) => (
              <SwiperSlide key={i}>
                <BlogCard />
              </SwiperSlide>
            ))}
            <div
              id="paginator"
              className="mt-8 mb-4 flex gap-2 justify-center"
            ></div>
          </Swiper>
        ) : (
          <div className="grid grid-cols-3 gap-8">
            {[...Array(3)].map((blog, i) => (
              <BlogCard key={i} />
            ))}
          </div>
        )}
      </div>
      {isMobile && <div className="my-8">{button}</div>}
    </section>
  );
};

export default Blog;
