import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { getIsSsrMobile } from "@/hooks/isMobile"
import { SsrMobileProvider } from "@/context/mobile"
import { ViewportProvider } from "@/context/viewport"
import configuration from "../../config"

export const merchant = localFont({
  src: [
    {
      path: "../../public/fonts/merchant-variable.ttf",
    },
  ],
  variable: "--font-merchant",
})

export const outfit = localFont({
  src: [
    {
      path: "../../public/fonts/outfit-variable.ttf",
    },
  ],
  variable: "--font-outfit",
})

export const metadata: Metadata = {
  title: {
    default: configuration.site.title,
    template: `%s | ${configuration.site.name}`,
  },
  description: configuration.site.description,
  icons: {
    apple: "/favicon/apple-touch-icon.png",
    icon: ["/favicon/favicon-16x16.png", "/favicon/favicon-32x32.png"],
    shortcut: "/favicon/favicon.ico",
  },
  manifest: "/favicon/site.webmanifest",
  metadataBase:
    (configuration.site.siteUrl && new URL(configuration.site.siteUrl)) ||
    undefined,
  openGraph: {
    type: "website",
    url: configuration.site.siteUrl,
    title: configuration.site.name,
    description: configuration.site.description,
  },
  twitter: {
    card: "summary",
    description: configuration.site.description,
    title: configuration.site.name,
    creator: configuration.site.twitterHandle,
  },
}

export default function RootLayout(props: any) {
  const isMobile = getIsSsrMobile()
  return (
    <html lang="en">
      <SsrMobileProvider value={isMobile}>
        <ViewportProvider>
          <body
            className={`${merchant.variable} ${outfit.variable} ${outfit.className}`}
          >
            {props.children}
          </body>
        </ViewportProvider>
      </SsrMobileProvider>
    </html>
  )
}
