import { Metadata } from "next"
import "@/app/globals.css"
import Navbar from "@/components/navbar"
import { Toaster } from "@/components/ui/toaster"
import { siteConfig } from "@/lib/config"

export const metadata: Metadata = {
  title: {
    default: "Pravardhan N Shetty",
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Pravardhan N Shetty",
    "Frontend Developer",
    "MERN Stack Developer",
    "Pravardhan",
  ],
  creator: "Pravardhan N Shetty",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: [siteConfig.ogImage],
    creator: "@ShettyDeveesh",
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  authors: [
    {
      name: "ranjithkumar404",
      url: siteConfig.url,
    },
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-900 text-slate-50">
        <Navbar />
        <div className="py-24 text-base">{children}</div>
        <Toaster />
      </body>
    </html>
  )
}
