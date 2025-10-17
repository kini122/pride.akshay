"use client"

import { Sparkles, Users, Zap, Clock } from "lucide-react"

const features = [
  {
    number: "01",
    title: "Unique Set Up",
    description: "Custom-designed event spaces that reflect your brand and vision",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Full Support and Guidance",
    description: "Dedicated team available throughout your event planning journey",
    icon: Users,
  },
  {
    number: "03",
    title: "High-End Products",
    description: "Premium equipment, decor, and services for exceptional quality",
    icon: Zap,
  },
  {
    number: "04",
    title: "Availability 24/7",
    description: "Round-the-clock support and design consultation for your needs",
    icon: Clock,
  },
]

export function ExpertPlanning() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Features */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-12">
              Elevate Your Events With Our Expert Planning
            </h2>

            <div className="space-y-8">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="flex gap-6">
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white">
                        <Icon className="w-6 h-6" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-2">
                        {feature.number} {feature.title}
                      </h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right Column - Image Grid */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg?key=expert-1"
              alt="DJ setup"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?key=expert-2"
              alt="Decorations"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?key=expert-3"
              alt="Lighting"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?key=expert-4"
              alt="Atmosphere"
              className="w-full h-48 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
