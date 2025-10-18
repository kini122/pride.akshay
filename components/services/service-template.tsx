"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, ChevronRight } from "lucide-react"

interface ServiceTemplateProps {
  title: string
  subtitle: string
  description: string
  heroImage: string
  whatIncluded: string[]
  process: string[]
  packages: Array<{
    name: string
    price: string
    features: string[]
  }>
  faqs: Array<{
    question: string
    answer: string
  }>
}

export function ServiceTemplate({
  title,
  subtitle,
  description,
  heroImage,
  whatIncluded,
  process,
  packages,
  faqs,
}: ServiceTemplateProps) {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [visibleProcess, setVisibleProcess] = useState<boolean[]>(new Array(process.length).fill(false))
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            process.forEach((_, index) => {
              setTimeout(() => {
                setVisibleProcess((prev) => {
                  const newVisible = [...prev]
                  newVisible[index] = true
                  return newVisible
                })
              }, index * 150)
            })
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.1 },
    )

    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => observer.disconnect()
  }, [process])

  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        className="relative w-full h-96 flex items-center justify-center overflow-hidden pt-16"
        style={{
          backgroundImage: `url("${heroImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white">{title}</h1>
          <p className="text-xl text-white/90 mt-4">{subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <p className="text-xl text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">What's Included</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatIncluded.map((item, index) => (
              <div key={index} className="flex gap-3 items-start">
                <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section ref={processRef} className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Our Process</h2>
          <div className="space-y-8">
            {process.map((step, index) => (
              <div
                key={index}
                className={`flex gap-6 transition-all duration-500 ${
                  visibleProcess[index] ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
              >
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {index + 1}
                  </div>
                  {index < process.length - 1 && <div className="w-1 h-16 bg-border mt-2" />}
                </div>
                <div className="pb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{step.split(":")[0]}</h3>
                  <p className="text-muted-foreground">{step.split(":")[1]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-xl border-2 p-8 transition-all hover:shadow-xl ${
                  index === 1 ? "border-primary bg-white shadow-lg scale-105" : "border-border bg-white"
                }`}
              >
                <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                <p className="text-3xl font-bold text-primary mb-6">{pkg.price}</p>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex gap-2 items-start">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div>
                  <FlowButton href="/contact" text="Get Started" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary transition-colors"
                >
                  <span className="font-semibold text-foreground text-left">{faq.question}</span>
                  <ChevronRight
                    className={`w-5 h-5 text-primary transition-transform ${expandedFaq === index ? "rotate-90" : ""}`}
                  />
                </button>
                {expandedFaq === index && (
                  <div className="px-6 py-4 bg-secondary border-t border-border">
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-primary text-white text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
        <p className="text-lg mb-8 text-white/90">Let's create something extraordinary together</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-white text-primary rounded-lg font-semibold hover:bg-secondary transition-colors"
        >
          Contact Us Today
        </Link>
      </section>
    </main>
  )
}
