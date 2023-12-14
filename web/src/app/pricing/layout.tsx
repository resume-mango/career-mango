import React, { ReactNode } from "react"
export const generateMetadata = async () => {
  const metadata = {
    title: "Pricing and Plans",
    description:
      "Choose a plan that works for you without sacrificing the features you really want.",
  }

  return {
    title: metadata.title,
    description: metadata.description,

    openGraph: {
      type: "article",
      title: metadata.title, //Post Title
      description: metadata.description, //Post Description,
    },
    twitter: {
      description: metadata.description, //Post Description,
      title: metadata.title, //Post Title,
    },
  }
}
const Layout = ({ children }: { children: ReactNode }) => {
  return children
}

export default Layout
