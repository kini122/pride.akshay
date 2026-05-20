"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"
import Floating, { FloatingElement } from "@/components/ui/floating"

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Resonating Moments, Crafting Experiences"
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [charIndex])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Video */}
      <div className="absolute inset-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="https://assets.mixkit.co/videos/preview/mixkit-crowd-in-a-concert-1897-large.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
      </div>

      <Floating sensitivity={1.5} className="z-10 flex items-center justify-center">
        {/* Decorative Floating Elements */}
        <FloatingElement depth={1} className="hidden md:block top-[20%] left-[10%]">
          <div className="w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
        </FloatingElement>
        <FloatingElement depth={2} className="hidden md:block bottom-[20%] right-[10%]">
          <div className="w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
        </FloatingElement>

        {/* Main Content */}
        <FloatingElement depth={0.5} className="relative text-center px-4 max-w-4xl mx-auto w-full flex flex-col items-center justify-center h-full pt-16">
          {/* Main Tagline with Letter Reveal */}
          <h1 className="text-4xl md:text-6xl tracking-tighter font-bold text-white mb-6 leading-tight">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up" style={{ animationDelay: "1s" }}>
            Premium event management services crafted for your unforgettable moments
          </p>

          {/* CTA Button */}
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-accent transition-all duration-300 mb-12"
            style={{ animationDelay: "1.5s" }}
          >
            Plan Your Event
          </Link>
        </FloatingElement>
      </Floating>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white " />
      </div>
    </section>
  )
}
