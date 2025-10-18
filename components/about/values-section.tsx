"use client"

import { useEffect, useRef, useState } from "react"
import { Lightbulb, Zap, Target } from "lucide-react"
import { motion, useMotionValue, useSpring } from "framer-motion"

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

const springCard = { damping: 30, stiffness: 100, mass: 2 }
const springCaption = { stiffness: 350, damping: 30, mass: 1 }

function ValueTiltCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  const containerRef = useRef<HTMLDivElement>(null)
  const rotateX = useSpring(0, springCard)
  const rotateY = useSpring(0, springCard)
  const scale = useSpring(1, springCard)
  const tooltipX = useMotionValue(0)
  const tooltipY = useMotionValue(0)
  const tooltipOpacity = useSpring(0, { stiffness: 200, damping: 30 })
  const captionRotate = useSpring(0, springCaption)
  const lastYRef = useRef(0)
  const [disableTilt, setDisableTilt] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return
    const mq = window.matchMedia("(hover: none), (pointer: coarse)")
    const update = () => setDisableTilt(mq.matches)
    update()
    mq.addEventListener?.("change", update)
    return () => mq.removeEventListener?.("change", update)
  }, [])

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    if (disableTilt || !containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const offsetX = e.clientX - rect.left - rect.width / 2
    const offsetY = e.clientY - rect.top - rect.height / 2

    const nextRotateX = (offsetY / (rect.height / 2)) * -14
    const nextRotateY = (offsetX / (rect.width / 2)) * 14

    rotateX.set(nextRotateX)
    rotateY.set(nextRotateY)

    tooltipX.set(e.clientX - rect.left + 12)
    tooltipY.set(e.clientY - rect.top + 12)

    const velocityY = offsetY - lastYRef.current
    captionRotate.set(-velocityY * 0.6)
    lastYRef.current = offsetY
  }

  function handleMouseEnter() {
    if (disableTilt) return
    scale.set(1.12)
    tooltipOpacity.set(1)
  }

  function handleMouseLeave() {
    tooltipOpacity.set(0)
    scale.set(1)
    rotateX.set(0)
    rotateY.set(0)
    captionRotate.set(0)
  }

  return (
    <div
      ref={containerRef}
      className="group relative h-80 w-full cursor-pointer [perspective:800px]"
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={title}
    >
      <motion.div
        className="relative h-full w-full will-change-transform [transform-style:preserve-3d]"
        style={{ rotateX, rotateY, scale }}
      >
        <motion.div
          className="relative h-full w-full bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center justify-center text-center overflow-hidden will-change-transform [transform:translateZ(0)]"
          whileHover={{ boxShadow: "0 20px 40px rgba(0,0,0,0.2)" }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="flex justify-center mb-4 will-change-transform [transform:translateZ(30px)]"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", ...springCard }}
          >
            <div className="p-4 bg-primary/10 rounded-full">
              <Icon className="w-8 h-8 text-primary" />
            </div>
          </motion.div>

          <h3 className="text-2xl font-bold text-foreground mb-3 will-change-transform [transform:translateZ(30px)]">{title}</h3>

          <p className="text-muted-foreground text-sm leading-relaxed will-change-transform [transform:translateZ(30px)]">{description}</p>
        </motion.div>
      </motion.div>

      <motion.span
        className="pointer-events-none absolute left-0 top-0 z-[3] hidden sm:block rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0"
        style={{ x: tooltipX, y: tooltipY, opacity: tooltipOpacity, rotate: captionRotate }}
      >
        {title}
      </motion.span>

      <div className="absolute top-4 left-1/2 -translate-x-1/2 text-center text-sm block sm:hidden">
        {"This effect is optimized for desktop"}
      </div>
    </div>
  )
}

export function ValuesSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(values.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            values.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="py-20 px-4" style={{ backgroundColor: "rgba(249, 179, 111, 0.9)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
          <p className="text-lg text-white/80">The principles that guide everything we do</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={visibleCards[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <ValueTiltCard icon={Icon} title={value.title} description={value.description} />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
