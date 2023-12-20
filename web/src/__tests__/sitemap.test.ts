import sitemap from "@/app/sitemap"
import { expect, test, vi, describe, beforeEach } from "vitest"
import configuration from "../../config"

// vi.mock("node-fetch", async () => {
//     const actual = await vi.importActual("node-fetch");

//     return {
//       ...actual,
//       default: vi.fn()
//     };
//   });

//   const fetch = vi.mocked(nodeFetch.default);
// vi.importActual("../../config")

describe("sitemap", () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })

  test("should generate the sitemap correctly", async () => {
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue({
        items: [
          { slug: "blog-post-1", updatedAt: "2023-01-01" },
          { slug: "blog-post-2", updatedAt: "2023-01-02" },
        ],
      }),
    }

    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    const result = await sitemap()

    expect(result.length).greaterThan(0)
    expect(fetch).toHaveBeenCalledWith(
      configuration.site.apiUrl + "/public/blogs",
      {
        next: { revalidate: 6 * 60 * 60 },
      }
    )
  })

  test("should throw an error if fetching data fails", async () => {
    const mockResponse = { ok: false }

    global.fetch = vi.fn().mockResolvedValue(mockResponse)

    await expect(sitemap()).rejects.toThrow("Failed to fetch data")

    expect(fetch).toHaveBeenCalledWith(
      configuration.site.apiUrl + "/public/blogs",
      {
        next: { revalidate: 6 * 60 * 60 },
      }
    )
  })
})
