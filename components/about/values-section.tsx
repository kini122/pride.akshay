"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Zap, Target } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Lightbulb,
    title: "Creativity",
    description: "We push boundaries and think outside the box to create unique experiences",
  },
  {
    icon: Target,
    title: "Precision",
    description: "Every detail matters. We execute with meticulous attention to perfection",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "We stay ahead of trends and embrace new technologies and ideas",
  },
]

export function ValuesSection() {
  return (
    <section className="py-24 px-4" style={{ backgroundColor: "rgba(249, 179, 111, 0.9)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-lg text-white/80">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                className="group cursor-pointer h-80 perspective"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                whileHover={{ y: -10 }}
              >
                <motion.div
                  className="relative w-full h-full bg-background rounded-md border border-border/50 p-8 flex flex-col items-center justify-center text-center overflow-hidden"
                  whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    className="flex justify-center mb-4"
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div className="p-4 bg-primary/10 rounded-full">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                  </motion.div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">{value.title}</h3>

                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </motion.div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
