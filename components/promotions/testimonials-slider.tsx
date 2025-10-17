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
    image: "/professional-headshot.png",
  },
  {
    quote: "The promotional campaign reached our target audience perfectly. The ROI exceeded our expectations by 40%!",
    author: "Priya Sharma",
    designation: "CMO",
    company: "Fashion Retail Co.",
    image: "/professional-headshot.png",
  },
  {
    quote:
      "Outstanding coordination and professional execution. Pride Eventz is our go-to partner for all promotional campaigns.",
    author: "Amit Patel",
    designation: "Brand Director",
    company: "FMCG Solutions",
    image: "/professional-headshot.png",
  },
]

export function TestimonialsSlider() {
  const [current, setCurrent] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">Client Success Stories</h2>

        <div className={`transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          <div className="bg-gray-50 p-8 md:p-12 rounded-lg">
            <p className="text-xl text-gray-700 mb-8 italic">"{testimonials[current].quote}"</p>

            <div className="flex items-center gap-4 mb-6">
              <img
                src={testimonials[current].image || "/placeholder.svg"}
                alt={testimonials[current].author}
                className="w-16 h-16 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-gray-900">{testimonials[current].author}</p>
                <p className="text-sm text-gray-600">{testimonials[current].designation}</p>
                <p className="text-sm text-pink-500 font-semibold">{testimonials[current].company}</p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-pink-500" />
              </button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrent(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === current ? "bg-pink-500 w-8" : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setCurrent((prev) => (prev + 1) % testimonials.length)}
                className="p-2 hover:bg-white rounded-full transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-pink-500" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
