"use client"

import { useEffect, useRef, useState } from "react"
import dynamic from "next/dynamic"
import { Carousel, TestimonialCard } from "@/components/ui/retro-testimonial"

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
    avatar: "",
    position: "left",
  },
  {
    id: 2,
    quote:
      "The pride Eventz has a very well trained and maintained a very humble with the customer and has a very well trained employees",
    name: "Gfruhik a",
    title: "Local Elite Now",
    avatar: "",
    position: "right",
  },
  {
    id: 3,
    quote:
      "Exceptional service and creativity! Pride Eventz transformed our vision into reality with professionalism and attention to detail. Highly recommended for any event.",
    name: "Priya Sharma",
    title: "Event Organizer",
    avatar: "",
    position: "left",
  },
  {
    id: 4,
    quote:
      "On-time delivery and outstanding execution. Pride Eventz's team went above and beyond to make our corporate event a huge success. Will definitely work with them again!",
    name: "Rajesh Kumar",
    title: "Corporate Manager",
    avatar: "",
    position: "right",
  },
]

export function TestimonialsSection() {
  const [visibleTestimonials, setVisibleTestimonials] = useState<number[]>([])
  const containerRef = useRef<HTMLDivElement>(null)

  

  return (
    <section className="py-24 px-4 bg-secondary" style={{ marginLeft: "-1px" }}>
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-center text-foreground mb-16">
          We're trusted by leading worldwide experts.
        </h2>

        <div className="py-6">
          {/* Use retro carousel component */}
          {/* Build items for the Carousel using existing testimonial data */}
          <div className="max-w-5xl mx-auto px-4">
            {/* Dynamically import components to avoid SSR issues if needed */}
            {/* Create cards array expected by Carousel */}
            {(() => {
              const cards = testimonials.map((t, i) => (
                <TestimonialCard key={t.id} testimonial={{
                  name: t.name,
                  designation: t.title,
                  description: t.quote,
                  profileImage: '/placeholder.svg'
                }} index={i} />
              ))

              return <Carousel items={cards} />
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
