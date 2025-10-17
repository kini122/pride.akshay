"use client"

import { useEffect, useRef, useState } from "react"

interface Testimonial {
  id: number
  quote: string
  name: string
  title: string
  avatar: string
  position: "left" | "right"
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "I loved the way of work of pride eventz. Will feel that youngsters energy and very budgetive eventz. Done a event with pride eventz and its awesome quality. Thank you pride Eventz And keep on going on guys.",
    name: "Janeen babu",
    title: "Google Reviewer",
    avatar: "👨‍💼",
    position: "left",
  },
  {
    id: 2,
    quote:
      "The pride Eventz has a very well trained and maintained a very humble with the customer and has a very well trained employees",
    name: "Gfruhik a",
    title: "Local Elite Now",
    avatar: "👨‍💻",
    position: "right",
  },
  {
    id: 3,
    quote:
      "Exceptional service and creativity! Pride Eventz transformed our vision into reality with professionalism and attention to detail. Highly recommended for any event.",
    name: "Priya Sharma",
    title: "Event Organizer",
    avatar: "👩‍💼",
    position: "left",
  },
  {
    id: 4,
    quote:
      "On-time delivery and outstanding execution. Pride Eventz's team went above and beyond to make our corporate event a huge success. Will definitely work with them again!",
    name: "Rajesh Kumar",
    title: "Corporate Manager",
    avatar: "👨‍🔧",
    position: "right",
  },
]

export function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const testimonialId = Number.parseInt(entry.target.getAttribute("data-testimonial-id") || "0")
            setVisibleTestimonials((prev) => [...new Set([...prev, testimonialId])])
          }
        })
      },
      { threshold: 0.2 },
    )

    const testimonials = containerRef.current?.querySelectorAll("[data-testimonial-id]")
    testimonials?.forEach((testimonial) => observer.observe(testimonial))

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-20 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-foreground mb-16">
          We're trusted by leading worldwide experts.
        </h2>

        <div ref={containerRef} className="space-y-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              data-testimonial-id={testimonial.id}
              className={`flex flex-col ${testimonial.position === "left" ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center ${
                visibleTestimonials.includes(testimonial.id) ? "animate-fade-in-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Avatar */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 rounded-full bg-blue-100 flex items-center justify-center text-5xl">
                  {testimonial.avatar}
                </div>
              </div>

              {/* Quote Card */}
              <div className="flex-1 bg-white p-8 rounded-2xl shadow-lg">
                <p className="text-lg text-muted-foreground leading-relaxed mb-4">"{testimonial.quote}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
