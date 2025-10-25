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
        <Script id="safe-fetch" strategy="beforeInteractive">{`(function(){try{const native=window.fetch && window.fetch.bind(window); if(!native) return; window.__nativeFetch = native; window.fetch = function(){ try{ return native.apply(this, arguments); } catch(e) { try{ console.warn('Wrapped fetch failed:', e); return Promise.resolve(new Response(null, { status: 204 })); }catch(err){ return Promise.resolve({ ok: false, status: 204, text: ()=>Promise.resolve('') }); } } }; }catch(e){ console.warn('Safe fetch init failed', e);} })()`}</Script>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
