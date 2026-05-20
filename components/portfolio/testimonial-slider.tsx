"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    company: "Tech Startup",
    quote:
      "Pride Eventz transformed our product launch into an unforgettable experience. Their attention to detail was exceptional.",
    rating: 5,
    image: "/portfolio/testimonials/professional-man-headshot.png",
  },
  {
    id: 2,
    name: "Priya Sharma",
    company: "Private Party Client",
    quote: "Our celebration was perfect thanks to Pride Eventz. They made our vision come to life beautifully.",
    rating: 5,
    image: "/portfolio/testimonials/professional-woman-headshot.png",
  },
  {
    id: 3,
    name: "Amit Patel",
    company: "Corporate Client",
    quote:
      "Professional, creative, and reliable. Pride Eventz exceeded all our expectations for our annual conference.",
    rating: 5,
    image: "/placeholder.svg?height=100&width=100",
  },
]

export function TestimonialSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [autoPlay])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
    setAutoPlay(false)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    setAutoPlay(false)
  }

  return (
    <section className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-center text-foreground mb-16">What Our Clients Say</h2>

        {/* Carousel */}
        <div className="relative">
          {/* Testimonial Cards */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-background rounded-md p-8 md:p-12 text-center">
                    {/* Client Photo */}
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full mx-auto mb-6 object-cover"
                    />

                    {/* Quote */}
                    <p className="text-lg text-muted-foreground mb-6 italic">"{testimonial.quote}"</p>

                    {/* Rating */}
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>

                    {/* Client Info */}
                    <h3 className="font-bold text-foreground">{testimonial.name}</h3>
                    <p className="text-muted-foreground text-sm">{testimonial.company}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-primary text-primary-foreground p-2 rounded-full hover:bg-accent transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-primary text-primary-foreground p-2 rounded-full hover:bg-accent transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setCurrentIndex(index)
                  setAutoPlay(false)
                }}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex ? "bg-primary w-8" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
