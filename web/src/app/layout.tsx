import type { Metadata } from "next"
import localFont from "next/font/local"

import "./globals.css"
import { getIsSsrMobile } from "@/hooks/isMobile"
import { SsrMobileProvider } from "@/context/mobile"
import { ViewportProvider } from "@/context/viewport"
import configuration from "../../config"
import Script from "next/script"

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
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MESUREMENT_ID}`}
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', '${process.env.NEXT_PUBLIC_GA_MESUREMENT_ID}',{
            page_path: window.location.pathname,
            cookie_domain:'auto'
          });
        `}
      </Script>

      <SsrMobileProvider value={isMobile}>
        <ViewportProvider>
          <body
            className={`${merchant.variable} ${outfit.variable} ${
              outfit.className
            } ${isMobile && "is-mobile"}`}
          >
            {props.children}
          </body>
        </ViewportProvider>
      </SsrMobileProvider>
    </html>
  )
}
