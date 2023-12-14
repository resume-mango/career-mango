import Footer from "@/components/custom-ui/footer"
import MainNav from "@/components/custom-ui/main-nav"
import React, { ReactNode } from "react"

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
