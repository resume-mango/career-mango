"use client";
import Footer from "@/components/custom-ui/footer";
import MainNav from "@/components/custom-ui/main-nav";
import Image from "next/image";
import React from "react";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Link from "next/link";
import BlogCard from "@/components/custom-ui/cards/blog";
import { useIsMobile } from "@/context/mobile";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "../../article.css";
import "swiper/css";
import "swiper/css/pagination";

const Page = () => {
  const isMobile = useIsMobile();

  return (
    <>
      <MainNav />
      <main className="px-6 xl:px-0 max-w-screen-xl mx-auto mt-10 mb-20">
        <p className="space-x-1 text-sm mb-4">
          <Link href={"/"}>Home</Link>
          <span>/</span>
          <Link href={"/"}>Blogs</Link>
          <span>/</span>
          <Link href={"/"}>Blog Name</Link>
        </p>
        <div className="">
          <AspectRatio ratio={isMobile ? 1 / 1 : 16 / 7}>
            <Image
              src={"/example/blog.png"}
              alt="Image"
              className="overflow-hidden object-cover rounded-2xl"
              fill={true}
            />
          </AspectRatio>
          <div className="flex flex-col md:flex-row gap-2 md:gap-8 my-10">
            <h2 className="flex-1">
              How to Find the Perfect Internship: A Comprehensive Guide
            </h2>
            <div className="w-[350px] text-start md:text-end text-gray text-sm font-normal">
              <p>28 May 2023</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row gap-20 lg:gap-8">
          <article className="flex-1">
            <h3>Start Early</h3>
            <p>
              Are you a student or recent graduate looking for an internship?
              Congratulations! Internships are an excellent way to gain hands-on
              experience in your field of interest, build your professional
              network, and increase your chances of landing a job after
              graduation. However, finding the perfect internship can be
              challenging. In this guide, we&apos;ll discuss some tips and
              tricks to help you find and secure your dream internship.
            </p>{" "}
            <h3>Start Early</h3>
            <p>
              Are you a student or recent graduate looking for an internship?
              Congratulations! Internships are an excellent way to gain hands-on
              experience in your field of interest, build your professional
              network, and increase your chances of landing a job after
              graduation. However, finding the perfect internship can be
              challenging. In this guide, we&apos;ll discuss some tips and
              tricks to help you find and secure your dream internship.
            </p>{" "}
            <h3>Start Early</h3>
            <p>
              Are you a student or recent graduate looking for an internship?
              Congratulations! Internships are an excellent way to gain hands-on
              experience in your field of interest, build your professional
              network, and increase your chances of landing a job after
              graduation. However, finding the perfect internship can be
              challenging. In this guide, we&apos;ll discuss some tips and
              tricks to help you find and secure your dream internship.
            </p>{" "}
            <h3>Start Early</h3>
            <p>
              Are you a student or recent graduate looking for an internship?
              Congratulations! Internships are an excellent way to gain hands-on
              experience in your field of interest, build your professional
              network, and increase your chances of landing a job after
              graduation. However, finding the perfect internship can be
              challenging. In this guide, we&apos;ll discuss some tips and
              tricks to help you find and secure your dream internship.
            </p>{" "}
            <h3>Start Early</h3>
            <p>
              Are you a student or recent graduate looking for an internship?
              Congratulations! Internships are an excellent way to gain hands-on
              experience in your field of interest, build your professional
              network, and increase your chances of landing a job after
              graduation. However, finding the perfect internship can be
              challenging. In this guide, we&apos;ll discuss some tips and
              tricks to help you find and secure your dream internship.
            </p>
          </article>
          {isMobile ? (
            <div>
              <h3 className="mb-6">Read More</h3>
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
            </div>
          ) : (
            <div className="w-[350px]">
              <h3 className="mb-6">Read More</h3>
              <div className="grid gap-8">
                {[...Array(3)].map((b, i) => (
                  <BlogCard key={i} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Page;
