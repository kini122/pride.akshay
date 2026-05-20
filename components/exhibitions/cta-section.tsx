"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Phone, Mail, MessageCircle } from "lucide-react"

export function CTASection() {
  const [isVisible, setIsVisible] = useState(true)
  const ref = useRef(null)

  

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 px-4 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-background rounded-full blur-3xl opacity-10 " />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-background rounded-full blur-3xl opacity-10 " />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2
          className={`text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-white mb-6 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
        >
          Ready to Create an Unforgettable Exhibition?
        </h2>

        <p
          className={`text-xl text-white/90 mb-12 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Let's discuss your vision and bring it to life with innovative exhibition design
        </p>

        {/* Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <Link href="/contact" className="px-8 py-3 bg-background text-primary font-semibold rounded-md hover:border-primary/50-none border border-border/50 hover:-translate-y-1 transition-transform duration-300 transition-all duration-300">
            Schedule Consultation
          </Link>
          <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-semibold rounded-md hover:bg-background/10 transition-all duration-300">
            Download Exhibition Guide
          </Link>
        </div>

        {/* Contact Options */}
        <div
          className={`grid grid-cols-1 md:grid-cols-3 gap-6 transition-all duration-700 ${
            "animate-fade-in-up"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <a
            href="tel:+919846596349"
            className="flex items-center justify-center gap-3 text-white hover:text-white/80 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 9846 596 349</span>
          </a>
          <a
            href="mailto:info@prideeventz.in"
            className="flex items-center justify-center gap-3 text-white hover:text-white/80 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>info@prideeventz.in</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center justify-center gap-3 text-white hover:text-white/80 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Chat Now</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
