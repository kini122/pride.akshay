"use client"

import { useEffect, useRef, useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQSection() {
  const [isVisible, setIsVisible] = useState(true)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const ref = useRef<HTMLDivElement>(null)

  

  const faqs = [
    {
      question: "How far in advance should we book a corporate event?",
      answer:
        "We recommend booking 2-3 months in advance for corporate events. However, we can accommodate shorter timelines based on availability.",
    },
    {
      question: "What's included in your corporate event packages?",
      answer:
        "Our packages include venue coordination, AV setup, catering, event day coordination, and photography. Premium packages include video production and dedicated project management.",
    },
    {
      question: "Can you handle hybrid (in-person + virtual) events?",
      answer:
        "Yes, we have extensive experience managing hybrid events with live streaming, virtual attendee engagement, and technical support.",
    },
    {
      question: "Do you provide event insurance?",
      answer:
        "We can guide you on event insurance options and help coordinate coverage. We recommend discussing this during the planning phase.",
    },
    {
      question: "What is your cancellation policy?",
      answer:
        "Our cancellation policy is flexible and depends on the timing. We typically offer full refunds if cancelled 60+ days before the event.",
    },
    {
      question: "Can you manage multi-city corporate events?",
      answer:
        "We have experience managing events across multiple cities and can coordinate logistics, vendors, and execution seamlessly.",
    },
    {
      question: "Do you handle international corporate events?",
      answer:
        "Yes, we can manage international events with multilingual support, international vendor coordination, and guest accommodation arrangements.",
    },
    {
      question: "What audio-visual equipment do you provide?",
      answer:
        "We provide state-of-the-art AV equipment including projection systems, sound systems, lighting rigs, and live streaming capabilities.",
    },
  ]

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`border-2 border-border rounded-md overflow-hidden transition-all duration-300 ${
                "animate-fade-in-up"
              }`}
              style={{
                transitionDelay: isVisible ? `${index * 50}ms` : "0ms",
              }}
            >
              <button
                onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <span className="font-semibold text-foreground text-left">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    expandedFaq === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {expandedFaq === index && (
                <div className="px-6 py-4 bg-muted/30 border-t-2 border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
