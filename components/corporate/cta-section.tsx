"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={ref} className="py-24 px-4 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground mb-6 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
        >
          Ready to Plan Your Next Corporate Event?
        </h2>

        <p
          className={`text-xl text-muted-foreground mb-12 transition-all duration-700 delay-100 ${
            "animate-fade-in-up"
          }`}
        >
          Let's discuss your requirements and create an unforgettable experience
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 delay-200 ${
            "animate-fade-in-up"
          }`}
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-accent transition-colors"
          >
            Schedule Consultation
          </Link>
          <Link
            href="/contact"
            className="px-8 py-4 border-2 border-primary text-primary rounded-md font-semibold hover:bg-primary hover:text-white transition-all"
          >
            Download Corporate Brochure
          </Link>
        </div>

        {/* Contact Info */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-10 text-muted-foreground transition-all duration-700 delay-300 ${
            "animate-fade-in-up"
          }`}
        >
          <div>
            <p className="font-semibold text-foreground">Phone</p>
            <p>+91 9846596349</p>
          </div>
          <div>
            <p className="font-semibold text-foreground">Email</p>
            <p>info@prideeventz.in</p>
          </div>
        </div>
      </div>
    </section>
  )
}
