import { getIsSsrMobile } from "@/hooks/isMobile"
import { expect, test, vi, describe, afterEach } from "vitest"
import { headers } from "next/headers"

vi.mock("next/headers")

describe("getIsSsrMobile", () => {
  afterEach(() => {
    vi.clearAllMocks()
  })

  test("should return true for a mobile user agent", () => {
    const userAgent =
      "Mozilla/5.0 (iPhone; CPU iPhone OS 14_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/14.1 Mobile/15E148 Safari/604.1"

    vi.mocked(headers as any).mockReturnValueOnce({
      get: vi.fn().mockReturnValueOnce(userAgent),
    })

    const result = getIsSsrMobile()
    expect(result).toBe(true)
  })

  test("should return false for a non-mobile user agent", () => {
    const userAgent =
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36"

    vi.mocked(headers as any).mockReturnValueOnce({
      get: vi.fn().mockReturnValueOnce(userAgent),
    })

    const result = getIsSsrMobile()

    expect(result).toBe(false)
  })
})
