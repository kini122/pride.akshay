import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

export const metadata: Metadata = {
  title: "Pride Eventz – Event Management Kerala, India",
  description: "Expert corporate events, weddings, concerts, conferences, exhibitions & brand activations across India. 200+ projects delivered.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans antialiased">
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
