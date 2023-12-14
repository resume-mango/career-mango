import { MetadataRoute } from "next"

const siteUrl = process.env.NEXT_PUBLIC_WEB_URL

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
