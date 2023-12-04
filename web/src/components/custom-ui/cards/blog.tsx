import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogCard = () => {
  return (
    <div className="space-y-2">
      <Image
        src={"/homepage/blog.webp"}
        alt="Blog"
        width={400}
        height={400}
        className="object-cover h-[250px] object-center rounded-2xl"
      />
      <p className="text-gray text-xs">28 May 2023</p>
      <h3 className="line-clamp-2">
        How to Find the Perfect Internship: A Comprehensive Guide
      </h3>
      <p className="line-clamp-2">
        Are you a student or recent graduate looking for an internship?
        Congratulations! Internships are everywhere
      </p>
      <Link
        href={"/"}
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
