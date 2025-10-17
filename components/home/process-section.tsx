"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const processSteps = [
  {
    number: "01",
    title: "Brief us in Details",
    description:
      "Share your vision, requirements, and expectations. We listen carefully to understand your unique needs and create a customized plan.",
  },
  {
    number: "02",
    title: "Give us a Date of your affair",
    description:
      "Lock in your event date and timeline. We coordinate all logistics and ensure everything is perfectly scheduled for your special day.",
  },
  {
    number: "03",
    title: "Finally, We Bring the Cheer!",
    description:
      "Sit back and enjoy! Our team executes flawlessly, bringing your vision to life with creativity, professionalism, and attention to detail.",
  },
]

export function ProcessSection() {
  const [expandedIndex, setExpandedIndex] = useState(0)

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Left Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg?key=process-1"
              alt="Party scene"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <img
              src="/placeholder.svg?key=process-2"
              alt="Nightclub"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Accordion */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">How we work?</h2>

            <div className="space-y-4">
              {processSteps.map((step, index) => (
                <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setExpandedIndex(expandedIndex === index ? -1 : index)}
                    className="w-full px-6 py-4 flex items-center justify-between bg-white hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-2xl font-bold text-primary">{step.number}</span>
                      <span className="text-lg font-semibold text-foreground">{step.title}</span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-primary transition-transform ${
                        expandedIndex === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {expandedIndex === index && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <button className="mt-8 px-8 py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              LEARN MORE
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
