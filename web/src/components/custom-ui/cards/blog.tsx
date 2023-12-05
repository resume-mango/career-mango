import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="space-y-2">
      <Link href={"/blogs/id"} passHref>
        <Image
          src={"/homepage/blog.webp"}
          alt="Blog"
          width={400}
          height={400}
          className="object-cover h-[250px] object-center rounded-2xl bg-lightGray/30 text-center"
        />
      </Link>
      <p className="text-gray text-xs">28 May 2023</p>
      <Link href={"/blogs/id"} passHref>
        <h3 className="line-clamp-2">
          How to Find the Perfect Internship: A Comprehensive Guide
        </h3>
      </Link>
      <p className="line-clamp-2">
        Are you a student or recent graduate looking for an internship?
        Congratulations! Internships are everywhere
      </p>
      <Link
        href={"/blogs/id"}
        className={cn(
          buttonVariants({ variant: "link", size: "link" }),
          "mt-6"
        )}
      >
        Read more
      </Link>
    </div>
  );
};

export default BlogCard;
