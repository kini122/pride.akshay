"use client"

import { useEffect, useRef, useState } from "react"
import { MessageCircle, Truck, Megaphone } from "lucide-react"

const processSteps = [
  {
    icon: MessageCircle,
    title: "Discussion",
    description:
      "We start by understanding your vision, goals, and requirements. Our team listens carefully to bring your ideas to life.",
  },
  {
    icon: Truck,
    title: "Planning & Coordination",
    description:
      "Detailed planning, vendor coordination, timeline management, and logistics ensure everything runs smoothly.",
  },
  {
    icon: Megaphone,
    title: "Execution & Follow-up",
    description:
      "Flawless execution on the day with our dedicated team on-site, followed by post-event support and feedback.",
  },
]

export function ProcessSection() {
  const [visibleSteps, setVisibleSteps] = useState<boolean[]>(new Array(processSteps.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            processSteps.forEach((_, index) => {
              setTimeout(() => {
                setVisibleSteps((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 200)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">How we work?</h2>
          <p className="text-lg text-muted-foreground">
            Our proven process ensures every event is executed with precision and creativity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {processSteps.map((step, index) => {
            const Icon = step.icon
            return (
              <div
                key={step.title}
                className={`text-center transition-all duration-700 ${
                  visibleSteps[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}
              >
                <div className="flex justify-center mb-6 group">
                  <div className="p-6 bg-primary/10 rounded-full group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                    <Icon className="w-10 h-10 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
