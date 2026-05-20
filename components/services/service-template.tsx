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
  const [isVisible, setIsVisible] = useState(true)
  const processRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )
    if (processRef.current) {
      observer.observe(processRef.current)
    }

    return () => observer.disconnect()
  }, [process])

  return (
    <main className="min-h-screen bg-background">
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
          <h1 className="text-3xl md:text-4xl lg:text-5xl tracking-tight lg:text-6xl tracking-tight font-bold text-white">{title}</h1>
          <p className="text-xl text-white/90 mt-4">{subtitle}</p>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 px-4 bg-background">
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
      <section ref={processRef} className="py-24 md:py-32 px-4 bg-background border-t border-border/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8">
            {/* Left Column: Sticky Header */}
            <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
              <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Methodology</p>
              <h2 className="text-4xl md:text-5xl tracking-tight font-bold text-foreground mb-6">
                Our Process.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
                A systematic, architectural approach designed to ensure every detail is executed with absolute precision and creative excellence.
              </p>
            </div>

            {/* Right Column: Architectural Steps */}
            <div className="lg:col-span-7 lg:col-start-6">
              <div className="flex flex-col">
                {process.map((step, index) => {
                  const parts = step.split(":")
                  const title = parts[0]
                  const description = parts.slice(1).join(":").trim()
                  const phaseNumber = (index + 1).toString().padStart(2, "0")

                  return (
                    <div
                      key={index}
                      className={`group relative border-t border-border/50 py-12 md:py-16 transition-all duration-700 ease-out ${
                        "animate-fade-in-up"
                      }`}
                      style={{ transitionDelay: `${index * 150}ms` }}
                    >
                      <div className="flex flex-col md:flex-row md:items-start gap-6 md:gap-12">
                        <div className="md:w-24 shrink-0">
                          <span className="text-5xl md:text-6xl font-bold text-muted-foreground/30 group-hover:text-primary transition-colors duration-500">
                            {phaseNumber}
                          </span>
                        </div>
                        <div>
                          <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 tracking-tight">
                            {title}
                          </h3>
                          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
                            {description || "Process step details are tailored to your specific requirements."}
                          </p>
                        </div>
                      </div>
                    </div>
                  )
                })}
                <div className="border-t border-border/50 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Packages */}
      <section className="py-16 px-4 bg-secondary">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Pricing Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`rounded-md border-2 p-8 transition-all hover:border-primary/50 ${
                  index === 1 ? "border-primary bg-background border border-border/50 scale-105" : "border-border bg-background"
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
                <Link
                  href="/contact"
                  className="block w-full py-3 bg-primary text-primary-foreground rounded-md text-center font-semibold hover:bg-accent transition-colors"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-12 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-border rounded-md overflow-hidden">
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
      <section className="py-16 px-4 bg-primary text-primary-foreground text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Plan Your Event?</h2>
        <p className="text-lg mb-8 text-white/90">Let's create something extraordinary together</p>
        <Link
          href="/contact"
          className="inline-block px-8 py-3 bg-background text-primary rounded-md font-semibold hover:bg-secondary transition-colors"
        >
          Contact Us Today
        </Link>
      </section>
    </main>
  )
}
