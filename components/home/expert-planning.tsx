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
    <section className="bg-white" style={{ padding: "80px 16px 140px" }}>
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
          <div
            style={{
              display: "grid",
              fontWeight: "400",
              gap: "16px",
              gridTemplateColumns: "repeat(2, minmax(0px, 1fr))",
              padding: "241px 2px 0 0",
            }}
          >
            <img
              alt="DJ setup"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0f18591e64d74651873c54c06db9c3d7"
              style={{
                display: "block",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                fontWeight: "400",
                height: "244px",
                objectFit: "cover",
                width: "100%",
                marginRight: "-2px",
              }}
            />
            <img
              alt="Decorations"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F9088b880cfb84b6987b31afac6b38ba2?format=webp"
              style={{
                display: "block",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                fontWeight: "400",
                height: "176px",
                objectFit: "cover",
                width: "100%",
                marginLeft: "-2px",
              }}
            />
            <img
              alt="Lighting"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2F0204cca0c7114c80b24a5817adb9416b"
              style={{
                display: "block",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                fontWeight: "400",
                height: "192px",
                objectFit: "cover",
                width: "100%",
              }}
            />
            <img
              alt="Atmosphere"
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3"
              style={{
                display: "block",
                backgroundImage:
                  'url("https://cdn.builder.io/api/v1/image/assets%2F39ae946dc8af40c8b70646f61cd45ef0%2Fec6c218f1d534cd2899d6f9dc8afeef3")',
                backgroundPosition: "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                borderRadius: "10px",
                boxShadow:
                  "rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.1) 0px 4px 6px -4px",
                fontWeight: "400",
                height: "273px",
                objectFit: "cover",
                width: "100%",
                paddingBottom: "3px",
                margin: "-76px 0 19px",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
