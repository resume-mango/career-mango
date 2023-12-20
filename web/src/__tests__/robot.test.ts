import robots from "@/app/robots"
import { expect, test, describe } from "vitest"
import configuration from "../../config"

describe("robots", () => {
  test("should generate the robots.txt content correctly", () => {
    const result = robots()

    expect(result).toEqual({
      rules: {
        userAgent: "*",
        allow: "/",
      },
      sitemap: configuration.site.siteUrl + "/sitemap.xml",
    })
  })
})
