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
        <Script id="safe-fetch" strategy="beforeInteractive">{`(function(){try{ // preserve original fetch
  var originalFetch = window.fetch;
  if(!originalFetch) return;
  window.__nativeFetch = originalFetch.bind(window);
  // safe wrapper that catches sync and async errors
  var safeFetch = function(){
    try{
      var p = window.__nativeFetch.apply(this, arguments);
      if(p && typeof p.then === 'function'){
        return p.catch(function(e){ console.warn('fetch promise rejected', e); try{ return new Response(null, { status: 204 }); }catch(err){ return Promise.resolve({ ok:false, status:204, text:function(){return Promise.resolve('')} }); } });
      }
      return p;
    }catch(e){ console.warn('fetch sync error', e); try{ return Promise.resolve(new Response(null, { status: 204 })); }catch(err){ return Promise.resolve({ ok:false, status:204, text:function(){return Promise.resolve('')} }); } }
  };
  try{
    Object.defineProperty(window, 'fetch', { value: safeFetch, writable: false, configurable: false });
  }catch(e){ try{ window.fetch = safeFetch; }catch(err){} }
  // global handlers to suppress noisy third-party errors
  window.addEventListener('error', function(ev){ try{ if(ev && ev.filename && (ev.filename.includes('fullstory') || ev.filename.includes('edge.fullstory'))) { ev.preventDefault && ev.preventDefault(); return false; } }catch(e){} }, true);
  window.addEventListener('unhandledrejection', function(ev){ try{ var reason = ev && ev.reason && (ev.reason.stack || ev.reason.message || ''); if(reason && (reason.indexOf && (reason.indexOf('fullstory') !== -1 || reason.indexOf('edge.fullstory') !== -1))) { ev.preventDefault && ev.preventDefault(); return false; } }catch(e){} }, true);
}catch(e){ console.warn('Safe fetch init failed', e);} })()`}</Script>
        {children}
        <ScrollToTop />
        <Analytics />
      </body>
    </html>
  )
}
