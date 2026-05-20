"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const testimonials = [
  {
    quote:
      "Pride Eventz transformed our brand activation into an unforgettable experience. Their team's creativity and execution were exceptional!",
    author: "Rajesh Kumar",
    designation: "Marketing Manager",
    company: "TechBrand India",
    image: "/promotions/testimonials/professional-headshot.png",
  },
  {
    quote: "The promotional campaign reached our target audience perfectly. The ROI exceeded our expectations by 40%!",
    author: "Priya Sharma",
    designation: "CMO",
    company: "Fashion Retail Co.",
    image: "/promotions/testimonials/professional-headshot.png",
  },
  {
    quote:
      "Outstanding coordination and professional execution. Pride Eventz is our go-to partner for all promotional campaigns.",
    author: "Amit Patel",
    designation: "Brand Director",
    company: "FMCG Solutions",
    image: "/promotions/testimonials/professional-headshot.png",
  },
]

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Client Success Stories</h2>

        <div className={`transition-all duration-700 ${"animate-fade-in-up"}`}>
          <div className="bg-muted/30 p-8 md:p-12 rounded-md">
            <p className="text-xl text-muted-foreground mb-8 italic">"{testimonials[current].quote}"</p>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-foreground">{testimonials[current].author}</p>
                <p className="text-sm text-muted-foreground">{testimonials[current].designation}</p>
                <p className="text-sm text-primary font-semibold">{testimonials[current].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 hover:bg-background rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-primary" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current ? "bg-primary w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="p-2 hover:bg-background rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-primary" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
