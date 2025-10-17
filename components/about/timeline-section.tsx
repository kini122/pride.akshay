"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "2010",
    title: "Founded in Kerala",
    description: "Pride Eventz was established with a vision to revolutionize event management in Kerala.",
    side: "left",
    image: "/2010-founding-event.jpg",
  },
  {
    year: "2013",
    title: "Expanded to Corporate Events",
    description: "We expanded our services to include comprehensive corporate event management solutions.",
    side: "right",
    image: "/corporate-event-2013.jpg",
  },
  {
    year: "2016",
    title: "100+ Successful Events",
    description: "Reached the milestone of 100+ successfully executed events across Kerala.",
    side: "left",
    image: "/celebration-100-events.jpg",
  },
  {
    year: "2020",
    title: "Virtual & Hybrid Events",
    description: "Adapted to new trends by offering virtual and hybrid event solutions.",
    side: "right",
    image: "/virtual-event-2020.jpg",
  },
  {
    year: "2024",
    title: "200+ Projects Milestone",
    description: "Celebrated our 200+ projects milestone, solidifying our position as Kerala's leading event company.",
    side: "left",
    image: "/celebration-200-projects.jpg",
  },
]

export function TimelineSection() {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(milestones.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            milestones.forEach((_, index) => {
              setTimeout(() => {
                setVisibleItems((prev) => {
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
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">From humble beginnings to industry leaders</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`transition-all duration-700 ${visibleItems[index] ? "opacity-100" : "opacity-0"}`}
              >
                <div className={`flex gap-8 items-center ${milestone.side === "right" ? "flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full border-4 border-white shadow-lg" />

                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      className="w-full h-48 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
