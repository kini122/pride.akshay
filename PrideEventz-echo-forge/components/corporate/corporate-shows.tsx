"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function CorporateShows() {
  const [isVisible, setIsVisible] = useState(true)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  

  const slides = ["/corporate/shows/corporate-show-multi-screen-setup-audience-present.jpg", "/corporate/shows/corporate-show-stage-lighting-professional-setup.jpg", "/corporate/shows/corporate-show-audience-engagement-presentation.jpg"]

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Left Column - Image Carousel */}
          <div
            className={`transition-all duration-700 ${
              "animate-fade-in-up"
            }`}
          >
            <div className="relative rounded-md overflow-hidden shadow-none border border-border/50-xl">
              <img
                src={slides[currentSlide] || "/placeholder.svg"}
                alt="Corporate Show"
                className="w-full h-96 object-cover"
              />

              {/* Carousel Controls */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentSlide(i)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === currentSlide ? "bg-primary w-8" : "bg-background/50"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-5 h-5 text-foreground" />
              </button>
              <button
                onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-background/80 hover:bg-background p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-5 h-5 text-foreground" />
              </button>
            </div>
          </div>

          {/* Right Column - Text */}
          <div
            className={`transition-all duration-700 delay-200 ${
              "animate-fade-in-up"
            }`}
          >
            <h3 className="text-4xl font-bold text-foreground mb-6">Corporate Shows</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience exceptional corporate shows designed to engage and inspire. We curate dynamic performances,
              innovative setups, and flawless execution to create events that captivate your audience and highlight your
              brand's message.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
