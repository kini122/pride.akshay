"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold: 0.1 },
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready to Plan Your Next Corporate Event?
        </h2>

        <p
          className={`text-xl text-gray-600 mb-12 transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Let's discuss your requirements and create an unforgettable experience
        </p>

        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-8 transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Link
            href="/contact"
            className="px-8 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-accent transition-colors"
          >
            Schedule Consultation
          </Link>
          <Link
            href="#"
            className="px-8 py-4 border-2 border-primary text-primary rounded-lg font-semibold hover:bg-primary hover:text-white transition-all"
          >
            Download Corporate Brochure
          </Link>
        </div>

        {/* Contact Info */}
        <div
          className={`flex flex-col sm:flex-row justify-center gap-8 text-gray-600 transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <p className="font-semibold text-gray-900">Phone</p>
            <p>+91 9846596349</p>
          </div>
          <div>
            <p className="font-semibold text-gray-900">Email</p>
            <p>info@prideeventz.in</p>
          </div>
        </div>
      </div>
    </section>
  )
}
