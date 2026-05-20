"use client"

import { useEffect, useRef, useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqs = [
  {
    question: "What is the typical duration of a promotional campaign?",
    answer:
      "Campaign durations vary based on objectives, ranging from single-day activations to multi-week campaigns. We customize timelines to match your marketing goals and budget.",
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track comprehensive metrics including foot traffic, social media engagement, media impressions, brand sentiment, and ROI. Detailed reports are provided post-campaign.",
  },
  {
    question: "Do you provide brand ambassadors and promoters?",
    answer:
      "Yes, we have a trained team of professional brand ambassadors and promoters who represent your brand with excellence and engage audiences effectively.",
  },
  {
    question: "Can you handle multi-city promotional campaigns?",
    answer:
      "We have nationwide reach and experience managing simultaneous campaigns across multiple cities with consistent brand messaging.",
  },
  {
    question: "What permits and licenses do you manage?",
    answer:
      "We handle all necessary permits, licenses, and permissions required for your promotional event, ensuring full compliance with local regulations.",
  },
  {
    question: "How far in advance should we book?",
    answer:
      "We recommend booking 4-6 weeks in advance for optimal planning and execution. However, we can accommodate rush requests based on availability.",
  },
  {
    question: "Do you offer post-campaign analytics?",
    answer:
      "Yes, we provide comprehensive post-campaign analytics including reach, engagement, conversions, and detailed ROI analysis with actionable insights.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We have experience across FMCG, Technology, Automotive, Fashion, Food & Beverage, Health & Wellness, Banking, and Telecommunications sectors.",
  },
]

export function FAQAccordion() {
  const [isVisible, setIsVisible] = useState(true)
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const ref = useRef(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground text-center mb-16">Frequently Asked Questions</h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`bg-background rounded-md overflow-hidden border border-border/50 hover:border-primary/50-none border border-border/50 transition-all duration-500 ${
                "animate-fade-in-up"
              }`}
              style={{ transitionDelay: `${index * 0.05}s` }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted/30 transition-colors"
              >
                <span className="text-lg font-semibold text-foreground text-left">{faq.question}</span>
                {openIndex === index ? (
                  <Minus className="w-5 h-5 text-primary flex-shrink-0" />
                ) : (
                  <Plus className="w-5 h-5 text-primary flex-shrink-0" />
                )}
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-muted/30">
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
