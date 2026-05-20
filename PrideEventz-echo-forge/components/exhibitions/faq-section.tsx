"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "How much space do I need for an exhibition?",
    answer:
      "Space requirements vary based on your goals and audience. We typically recommend 500-5000 sq.ft. depending on the type of exhibition and number of expected visitors.",
  },
  {
    question: "What's the typical timeline for exhibition planning?",
    answer:
      "We recommend starting 3-4 months before the exhibition for optimal planning, design, and logistics coordination. Rush timelines are possible with additional fees.",
  },
  {
    question: "Do you handle international exhibitions?",
    answer:
      "Yes, we have experience with international exhibitions and can handle logistics, customs, and setup in multiple countries.",
  },
  {
    question: "Can you work within our existing brand guidelines?",
    answer:
      "We work closely with your brand guidelines to ensure consistency while creating innovative and engaging exhibition designs.",
  },
  {
    question: "What's included in your exhibition packages?",
    answer:
      "Our packages include design, fabrication, installation, on-site management, and breakdown. Custom packages can be tailored to your specific needs.",
  },
  {
    question: "Do you provide storage solutions?",
    answer: "Yes, we offer secure storage facilities for exhibition materials before, during, and after the event.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 md:py-32 px-4 bg-muted/30">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Exhibition FAQs</h2>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`bg-background rounded-md border border-border overflow-hidden transition-all duration-700 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${idx * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 py-4 bg-muted/30 border-t border-border">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
