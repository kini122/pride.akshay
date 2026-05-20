"use client"

import { useEffect, useRef, useState } from "react"

const milestones = [
  {
    year: "2010",
    title: "Founded in Kerala",
    description: "Pride Eventz was established with a vision to revolutionize event management in Kerala.",
    side: "left",
    image: "/about/timeline/2010-founding-event.jpg",
  },
  {
    year: "2013",
    title: "Expanded to Corporate Events",
    description: "We expanded our services to include comprehensive corporate event management solutions.",
    side: "right",
    image: "/about/timeline/corporate-event-2013.jpg",
  },
  {
    year: "2016",
    title: "100+ Successful Events",
    description: "Reached the milestone of 100+ successfully executed events across Kerala.",
    side: "left",
    image: "/about/timeline/celebration-100-events.jpg",
  },
  {
    year: "2020",
    title: "Virtual & Hybrid Events",
    description: "Adapted to new trends by offering virtual and hybrid event solutions.",
    side: "right",
    image: "/about/timeline/virtual-event-2020.jpg",
  },
  {
    year: "2024",
    title: "200+ Projects Milestone",
    description: "Celebrated our 200+ projects milestone, solidifying our position as Kerala's leading event company.",
    side: "left",
    image: "/about/timeline/celebration-200-projects.jpg",
  },
]

export function TimelineSection() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-4">Our Journey</h2>
          <p className="text-lg text-muted-foreground">From humble beginnings to industry leaders</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-primary/30 -translate-x-1/2" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div
                key={milestone.year}
                className={`transition-all duration-700 ${"animate-fade-in-up"}`}
              >
                <div className={`flex gap-10 items-center ${milestone.side === "right" ? "flex-row-reverse" : ""}`}>
                  {/* Content */}
                  <div className="flex-1">
                    <div className="bg-background p-6 rounded-md border border-border/50 hover:border-primary/50 transition-shadow-none border border-border/50">
                      <div className="text-primary font-bold text-2xl mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-foreground mb-2">{milestone.title}</h3>
                      <p className="text-muted-foreground">{milestone.description}</p>
                    </div>
                  </div>

                  {/* Center Dot */}
                  <div className="flex-shrink-0 w-6 h-6 bg-primary rounded-full border-4 border-white border border-border/50" />

                  {/* Image */}
                  <div className="flex-1">
                    <img
                      src={milestone.image || "/placeholder.svg"}
                      alt={milestone.title}
                      className="w-full h-48 object-cover rounded-md border border-border/50"
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
