"use client"

import { useEffect, useRef, useState } from "react"
import { Check } from "lucide-react"

const packages = [
  {
    name: "Starter Campaign",
    price: "₹50,000",
    recommended: false,
    features: [
      "Single location activation",
      "1-2 days duration",
      "Basic brand setup",
      "Local media coverage",
      "Social media promotion",
      "Event day coordination",
      "Basic reporting",
    ],
  },
  {
    name: "Growth Campaign",
    price: "₹2,00,000",
    recommended: true,
    features: [
      "Multi-location activation",
      "1 week duration",
      "Premium brand experience",
      "Regional media partnerships",
      "Influencer engagement",
      "Professional photography",
      "Detailed analytics",
      "Post-campaign report",
    ],
  },
  {
    name: "Enterprise Campaign",
    price: "Custom",
    recommended: false,
    features: [
      "Pan-India activation",
      "Extended duration",
      "Luxury brand experience",
      "National media coverage",
      "Celebrity partnerships",
      "Full video production",
      "Comprehensive analytics",
      "Dedicated account manager",
    ],
  },
]

export function PricingSection() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-4">Promotional Campaign Packages</h2>
        <p className="text-center text-muted-foreground mb-16">All packages fully customizable based on your requirements</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-background border-2 rounded-md overflow-hidden transition-all duration-700 ${
                pkg.recommended ? "border-orange-500 shadow-none border border-border/50-xl md:scale-105" : "border-border hover:border-orange-300"
              } ${"animate-fade-in-up"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-orange-500 to-orange-600 text-white py-2 text-center font-bold text-sm">
                  RECOMMENDED
                </div>
              )}

              <div className={`p-8 ${pkg.recommended ? "pt-16" : ""}`}>
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-foreground">{pkg.price}</span>
                  {pkg.price !== "Custom" && <span className="text-muted-foreground ml-2">starting from</span>}
                </div>

                <button
                  className={`w-full py-3 rounded-md font-semibold mb-8 transition-all ${
                    pkg.recommended
                      ? "bg-primary text-primary-foreground hover:bg-primary"
                      : "border-2 border-orange-500 text-primary hover:bg-pink-50"
                  }`}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Custom Quote"}
                </button>

                <div className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-muted-foreground text-sm">All packages fully customizable based on your requirements</p>
      </div>
    </section>
  )
}
