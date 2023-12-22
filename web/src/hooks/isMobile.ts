import MobileDetect from "mobile-detect"
import { headers } from "next/headers"

export const getIsSsrMobile = () => {
  const headersList = headers()

  const md = new MobileDetect(headersList?.get("user-agent") as string)
  return Boolean(md.mobile() || md.tablet())
}
