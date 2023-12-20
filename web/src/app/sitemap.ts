// app/sitemap.js

import { AllBlogs } from "@/types/blog"
import { MetadataRoute } from "next"
import configuration from "../../config"

const getData = async () => {
  const res = await fetch(`${configuration.site.apiUrl}/public/blogs`, {
    next: { revalidate: 6 * 60 * 60 },
  })
  if (!res.ok) {
    throw new Error("Failed to fetch data")
  }

  return (await res.json()) as AllBlogs
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Static
  const routes = [
    ["", 1],
    ["/pricing", 0.8],
    ["/resume-review", 0.8],
    ["/templates/resume", 0.8],
    ["/templates/coverletter", 0.8],
    ["/blogs", 0.8],
    ["/privacy-policy", 0.5],
    ["/terms-conditions", 0.5],
  ]

  // Blogs
  console.log({ configuration })
  const data = await getData()
  const blogs = data.items.map((post) => ({
    url: `${configuration.site.siteUrl}/blogs/${post.slug}`,
    lastModified: new Date(post.updatedAt).toISOString(),
    changeFrequency: "",
    priority: 0.5,
  }))

  const staticRoutes = routes.map((r) => ({
    url: (configuration.site.siteUrl! + r[0]) as string,
    lastModified: new Date().toISOString(),
    priority: r[1] as number,
  }))

  return [...staticRoutes, ...blogs]
}
