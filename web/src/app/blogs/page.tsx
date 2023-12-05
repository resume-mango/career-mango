import BlogCard from "@/components/custom-ui/cards/blog";
import Footer from "@/components/custom-ui/footer";
import MainNav from "@/components/custom-ui/main-nav";
import Pagination from "@/components/custom-ui/pagination";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <>
      <MainNav />
      <main className="px-6">
        <section className="max-w-screen-xl mx-auto my-10 md:my-20 space-y-8 md:space-y-[140px]">
          <h1 className="max-w-3xl mx-auto text-start lg:text-center">
            Insights and inspiration: <br />
            explore our blog
          </h1>
          <div className="grid gap-8 lg:grid-cols-2">
            <Link href={"/blogs/id"} passHref>
              <Image
                src={"/example/blog.png"}
                alt={"Blog"}
                width={630}
                height={300}
                className="object-cover object-center overflow-hidden h-[300px] rounded-xl bg-lightGray/30"
              />
            </Link>
            <div className="space-y-3 flex flex-col">
              <p className="text-gray text-xs">28 May 2023</p>
              <Link href={"/blogs/id"} passHref>
                <h3 className="line-clamp-2">
                  How to Find the Perfect Internship: A Comprehensive Guide
                </h3>
              </Link>
              <p className="line-clamp-[8]">
                Are you a student or recent graduate looking for an internship?
                Congratulations! Internships are everywhere Are you a student or
                recent graduate looking for an internship? Congratulations!
                Internships are everywhere Are you a student or recent graduate
                looking for an internship? Congratulations! Internships are
                everywhere
              </p>
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
          <div className="grid grid-cols-[repeat(auto-fill,minmax(350px,1fr))] gap-8">
            {[...Array(3)].map((blog, i) => (
              <BlogCard key={i} />
            ))}
          </div>
          <Pagination currentPage={55} totalCount={100} />
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Page;
