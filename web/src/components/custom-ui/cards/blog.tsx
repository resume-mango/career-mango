"use client"
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Image from "next/image"
import Link from "next/link"
import React, { useState } from "react"
import format from "date-fns/format"
import { SingleBlogList } from "@/types/blog"

const BlogCard = ({
  blog,
  readMore,
}: {
  blog: SingleBlogList
  readMore?: boolean
}) => {
  const [loading, setLoading] = useState(true)
  if (!blog) return null
  return (
    <div className="space-y-3" data-testid="blog-card">
      <Link href={`/blogs/${blog.slug}`} passHref title={blog.title}>
        <Image
          src={blog.image}
          alt={blog.title}
          width={400}
          height={400}
          className={cn(
            "object-cover h-[250px] object-center rounded-2xl bg-lightGray/30 text-center",
            loading && "animate-pulse"
          )}
          onLoad={() => setLoading(false)}
        />
        <p className="text-gray text-xs">
          {blog.updatedAt && format(new Date(blog.updatedAt), "dd MMM yyyy")}
        </p>
        <span>
          {readMore ? (
            <h4 className="line-clamp-2">{blog.title}</h4>
          ) : (
            <h3 className="line-clamp-2">{blog.title}</h3>
          )}
        </span>
        {!readMore && <p className="line-clamp-2">{blog.short_description}</p>}
        <span
          className={cn(
            buttonVariants({ variant: "link", size: "link" }),
            "mt-6"
          )}
        >
          Read more
        </span>
      </Link>
    </div>
  )
}

export default BlogCard
