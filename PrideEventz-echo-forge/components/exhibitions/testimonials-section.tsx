"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pride Eventz transformed our vision into an incredible exhibition experience. Their attention to detail and professionalism was outstanding.",
    author: "Rajesh Kumar",
    company: "Tech Innovations Ltd",
    rating: 5,
  },
  {
    quote:
      "The team handled every aspect flawlessly. From design to execution, they exceeded our expectations and delivered results beyond our goals.",
    author: "Priya Sharma",
    company: "Global Brands Inc",
    rating: 5,
  },
  {
    quote:
      "Working with Pride Eventz was a game-changer for our product launch. The interactive elements kept visitors engaged throughout the event.",
    author: "Amit Patel",
    company: "Innovation Hub",
    rating: 5,
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Client Experiences</h2>

        {/* Testimonial Carousel */}
        <div className={`transition-all duration-700 ${"animate-fade-in-up"}`}>
          <div className="bg-background rounded-md p-8 md:p-12 border border-border/50">
            {/* Quote */}
            <p className="text-2xl md:text-3xl font-semibold text-foreground mb-8 text-center italic">
              "{testimonials[currentIndex].quote}"
            </p>

            {/* Stars */}
            <div className="flex justify-center gap-1 mb-6">
              {Array(testimonials[currentIndex].rating)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
            </div>

            {/* Author */}
            <div className="text-center mb-8">
              <p className="font-bold text-foreground">{testimonials[currentIndex].author}</p>
              <p className="text-muted-foreground">{testimonials[currentIndex].company}</p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4">
              <button
                onClick={() => setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-muted-foreground" />
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      idx === currentIndex ? "bg-primary w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrentIndex((prev) => (prev + 1) % testimonials.length)}
                className="p-2 hover:bg-muted/50 rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
