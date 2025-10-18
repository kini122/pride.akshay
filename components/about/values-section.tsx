"use client"

import { Lightbulb, Zap, Target } from "lucide-react"
import TiltedCard from "./TiltedCard"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We push boundaries and think outside the box to create unique experiences",
    image: "/luxury-event-party-celebration.jpg",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters. We execute with meticulous attention to perfection",
    image: "/corporate-event-exhibition.jpg",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies and ideas",
    image: "/elegant-event-venue-decoration.jpg",
  },
]

export function ValuesSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Values</h2>
          <p className="text-lg text-muted-foreground">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => {
            const Icon = value.icon
            return (
              <div key={value.title} className="flex flex-col items-center">
                <div className="mb-6 h-64 w-64">
                  <TiltedCard
                    imageSrc={value.image}
                    altText={value.title}
                    captionText={value.title}
                    containerHeight="300px"
                    containerWidth="300px"
                    imageHeight="300px"
                    imageWidth="300px"
                    rotateAmplitude={12}
                    scaleOnHover={1.15}
                    showMobileWarning={false}
                    showTooltip={true}
                    displayOverlayContent={true}
                    overlayContent={
                      <div className="w-full h-full flex items-center justify-center bg-black/50 rounded-[15px]">
                        <p className="text-white text-center px-4 font-semibold">{value.title}</p>
                      </div>
                    }
                  />
                </div>
                <div className="text-center">
                  <div className="flex justify-center mb-3">
                    <div className="p-3 bg-primary/10 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm max-w-xs">{value.description}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
