"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export function ClientTestimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentSlide, setCurrentSlide] = useState(0)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  const testimonials = [
    {
      quote:
        "Pride Eventz transformed our annual conference into an unforgettable experience. Their attention to detail and professionalism was exceptional.",
      author: "Rajesh Kumar",
      designation: "Event Manager",
      company: "Hero MotoCorp",
      rating: 5,
    },
    {
      quote:
        "Working with Pride Eventz for our product launch was seamless. They managed every aspect perfectly and exceeded our expectations.",
      author: "Priya Sharma",
      designation: "Marketing Director",
      company: "Tech Innovations Ltd",
      rating: 5,
    },
    {
      quote:
        "The team's creativity and execution for our company gala was outstanding. Our guests are still talking about it!",
      author: "Amit Patel",
      designation: "CEO",
      company: "Global Solutions Inc",
      rating: 5,
    },
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
          What Our Corporate Clients Say
        </h2>

        <div className="relative max-w-3xl mx-auto">
          {/* Testimonial Card */}
          <div
            className={`bg-white rounded-2xl p-8 md:p-12 shadow-lg transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {Array.from({ length: testimonials[currentSlide].rating }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>

            {/* Quote */}
            <p className="text-xl text-gray-700 mb-8 leading-relaxed">"{testimonials[currentSlide].quote}"</p>

            {/* Author */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="text-primary font-bold">{testimonials[currentSlide].author[0]}</span>
              </div>
              <div>
                <p className="font-bold text-gray-900">{testimonials[currentSlide].author}</p>
                <p className="text-sm text-gray-600">
                  {testimonials[currentSlide].designation}, {testimonials[currentSlide].company}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrentSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronLeft className="w-6 h-6 text-primary" />
            </button>

            {/* Dots */}
            <div className="flex gap-2 items-center">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentSlide(i)}
                  className={`w-2 h-2 rounded-full transition-all ${
                    i === currentSlide ? "bg-primary w-8" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setCurrentSlide((prev) => (prev + 1) % testimonials.length)}
              className="p-2 rounded-full bg-white shadow-lg hover:shadow-xl transition-all"
            >
              <ChevronRight className="w-6 h-6 text-primary" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
