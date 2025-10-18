import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Script from "next/script"
import { Analytics } from "@vercel/analytics/next"
import { ScrollToTop } from "@/components/scroll-to-top"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Pride Eventz - Luxury Event Management",
  description: "Resonating Moments, Crafting Experiences. Premium event management services in Kerala.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} font-sans antialiased`}>
        <Script id="store-native-fetch" strategy="beforeInteractive">{`(function(){try{if(window.fetch){window.__nativeFetch=window.fetch.bind(window);} }catch(e){}})()`}</Script>
        <Script id="restore-native-fetch" strategy="afterInteractive">{`(function(){try{const native=window.__nativeFetch; if(!native) return; if(window.fetch!==native){window.fetch=function(){try{return native.apply(this,arguments);}catch(e){return native.apply(this,arguments);}};}}catch(e){}})()`}</Script>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
