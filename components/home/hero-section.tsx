"use client"

import { useEffect, useState } from "react"
import { ChevronDown, ChevronLeft, ChevronRight } from "lucide-react"
import Link from "next/link"

const heroImages = ["/placeholder.svg?key=hero-1", "/placeholder.svg?key=hero-2", "/placeholder.svg?key=hero-3"]

export function HeroSection() {
  const [displayedText, setDisplayedText] = useState("")
  const fullText = "Resonating Moments, Crafting Experiences"
  const [charIndex, setCharIndex] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    if (charIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[charIndex])
        setCharIndex((prev) => prev + 1)
      }, 50)
      return () => clearTimeout(timer)
    }
  }, [charIndex])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const goToImage = (index: number) => {
    setCurrentImageIndex(index)
  }

  const goToPrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  const goToNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
  }

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url("${image}")`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-transparent" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Main Tagline with Letter Reveal */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
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
          className="inline-block px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-all duration-300 animate-pulse-glow mb-12"
          style={{ animationDelay: "1.5s" }}
        >
          Plan Your Event
        </Link>
      </div>

      {/* Carousel Controls */}
      <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex gap-4 items-center">
        <button
          onClick={goToPrevious}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <div className="flex gap-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => goToImage(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentImageIndex ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={goToNext}
          className="p-2 rounded-full bg-white/20 hover:bg-white/40 transition-colors text-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <ChevronDown className="w-8 h-8 text-white animate-scroll-bounce" />
      </div>
    </section>
  )
}
