"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { motion, stagger, useAnimate } from "motion/react"
import Floating, { FloatingElement } from "@/components/ui/parallax-floating"

const exampleImages = [
  "/home/hero/fmcg-product-launch-event.jpg",
  "/home/hero/tech-brand-activation-event.jpg",
  "/home/hero/hero-motocorp-annual-conference-stage-setup.jpg",
  "/home/team/santa-party-decoration-event.jpg",
  "/home/hero/company-anniversary-gala-elegant-setup.jpg",
  "/home/team/exhibition-trade-show-atomfrost.jpg",
  "/home/hero/premium-party-atmosphere.jpg"
]

export function HeroCarousel() {
  const [scope, animate] = useAnimate()

  useEffect(() => {
    animate("img", { opacity: [0, 1] }, { duration: 0.5, delay: stagger(0.15) })
  }, [])

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden pt-16 bg-black">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/home/hero/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
      </div>

      <Floating sensitivity={1.5} className="z-10 flex items-center justify-center">
        {/* Decorative Floating Elements */}
        <FloatingElement depth={1} className="hidden md:block top-[20%] left-[10%]">
          <div className="w-24 h-24 rounded-full bg-primary/20 blur-2xl" />
        </FloatingElement>
        <FloatingElement depth={2} className="hidden md:block bottom-[20%] right-[10%]">
          <div className="w-32 h-32 rounded-full bg-accent/20 blur-2xl" />
        </FloatingElement>

        {/* Content */}
        <FloatingElement depth={0.5} className="relative z-50 text-center px-4 max-w-4xl mx-auto flex flex-col items-center justify-center h-full w-full pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.88, delay: 1.5 }}
            className="flex flex-col items-center pointer-events-auto"
          >
            {/* Main Headline */}
            <h1 className="text-4xl md:text-6xl tracking-tighter font-bold text-white mb-6 leading-tight drop-shadow-lg">
              Creating Unforgettable Parties with Style & Spark!
            </h1>

            {/* Subtext */}
            <p className="text-xl md:text-2xl text-white/90 mb-8 drop-shadow-md">
              Premium event management services crafted for your unforgettable moments
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/about" className="px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-background hover:text-foreground transition-all duration-300">
                Learn More
              </Link>
              <Link href="/contact" className="px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-accent transition-all duration-300">
                Get Started
              </Link>
            </div>
          </motion.div>
        </FloatingElement>

        {/* Floating Images */}
        <div ref={scope} className="absolute inset-0 pointer-events-auto">
          <FloatingElement depth={0.5} className="top-[15%] left-[5%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[0]}
              className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[10%] left-[75%] hidden md:block">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[1]}
              className="w-28 h-28 md:w-40 md:h-40 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={2} className="top-[70%] left-[10%] hidden md:block">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[2]}
              className="w-32 h-48 md:w-48 md:h-64 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1} className="top-[60%] left-[80%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[3]}
              className="w-24 h-24 md:w-36 md:h-36 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={1.5} className="top-[30%] left-[85%] hidden md:block">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[4]}
              className="w-20 h-20 md:w-28 md:h-28 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
          <FloatingElement depth={0.8} className="top-[80%] left-[40%]">
            <motion.img
              initial={{ opacity: 0 }}
              src={exampleImages[5]}
              className="w-28 h-20 md:w-40 md:h-28 object-cover rounded-xl shadow-2xl hover:scale-105 duration-200 cursor-pointer transition-transform"
            />
          </FloatingElement>
        </div>
      </Floating>

    </section>
  )
}
