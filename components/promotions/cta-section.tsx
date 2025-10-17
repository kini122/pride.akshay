"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, Phone, MessageCircle } from "lucide-react"

export function CTASection() {
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
    <section
      ref={ref}
      className="py-24 px-4 bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 relative overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <h2
          className={`text-4xl md:text-5xl font-bold text-white mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Ready to Amplify Your Brand?
        </h2>

        <p
          className={`text-xl text-white/90 mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.1s" }}
        >
          Let's create a promotional campaign that gets your brand noticed
        </p>

        <div
          className={`flex flex-col md:flex-row gap-4 justify-center mb-12 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.2s" }}
        >
          <button className="px-8 py-3 bg-white text-pink-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors">
            Start Your Campaign
          </button>
          <button className="px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-colors">
            Download Media Kit
          </button>
        </div>

        {/* Contact Info */}
        <div
          className={`flex flex-col md:flex-row gap-8 justify-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "0.3s" }}
        >
          <a
            href="tel:+919846596349"
            className="flex items-center gap-3 text-white hover:text-gray-100 transition-colors"
          >
            <Phone className="w-5 h-5" />
            <span>+91 9846596349</span>
          </a>
          <a
            href="mailto:info@prideeventz.in"
            className="flex items-center gap-3 text-white hover:text-gray-100 transition-colors"
          >
            <Mail className="w-5 h-5" />
            <span>info@prideeventz.in</span>
          </a>
          <a
            href="https://wa.me/919846596349"
            className="flex items-center gap-3 text-white hover:text-gray-100 transition-colors"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  )
}
