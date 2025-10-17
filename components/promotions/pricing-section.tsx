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
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-4">Promotional Campaign Packages</h2>
        <p className="text-center text-gray-600 mb-16">All packages fully customizable based on your requirements</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 rounded-lg overflow-hidden transition-all duration-700 ${
                pkg.recommended ? "border-pink-500 shadow-xl md:scale-105" : "border-gray-200 hover:border-pink-300"
              } ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              {pkg.recommended && (
                <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-pink-500 to-pink-600 text-white py-2 text-center font-bold text-sm">
                  RECOMMENDED
                </div>
              )}

              <div className={`p-8 ${pkg.recommended ? "pt-16" : ""}`}>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">{pkg.price}</span>
                  {pkg.price !== "Custom" && <span className="text-gray-600 ml-2">starting from</span>}
                </div>

                <button
                  className={`w-full py-3 rounded-lg font-semibold mb-8 transition-all ${
                    pkg.recommended
                      ? "bg-pink-500 text-white hover:bg-pink-600"
                      : "border-2 border-pink-500 text-pink-500 hover:bg-pink-50"
                  }`}
                >
                  {pkg.price === "Custom" ? "Contact Sales" : "Get Custom Quote"}
                </button>

                <div className="space-y-4">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-pink-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 text-sm">All packages fully customizable based on your requirements</p>
      </div>
    </section>
  )
}
