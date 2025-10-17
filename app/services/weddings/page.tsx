"use client"

import { useEffect, useMemo, useRef } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

function useParallax(ref: React.RefObject<HTMLDivElement>, speed = 0.4) {
  useEffect(() => {
    const el = ref.current
    if (!el) return
    const onScroll = () => {
      const y = window.scrollY * speed
      el.style.transform = `translate3d(0, ${y}px, 0)`
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [ref, speed])
}

function useRevealOnScroll(selector: string, className = "animate-fade-up", rootMargin = "-10% 0px") {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector))
    if (!nodes.length) return
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add(className)
            io.unobserve(e.target)
          }
        })
      },
      { threshold: 0.15, rootMargin }
    )
    nodes.forEach((n) => io.observe(n))
    return () => io.disconnect()
  }, [selector, className, rootMargin])
}

export default function WeddingsPage() {
  useRevealOnScroll("[data-animate=slide-left]", "animate-slide-in-left")
  useRevealOnScroll("[data-animate=slide-right]", "animate-slide-in-right")
  useRevealOnScroll("[data-animate=fade]", "animate-fade-up")

  const beachBgRef = useRef<HTMLDivElement>(null)
  useParallax(beachBgRef, 0.4)

  const headlineWords = useMemo(
    () => "Creative solutions make you want to stay.".split(" "),
    []
  )

  return (
    <main className="bg-white text-[#1F1F1F] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden pt-16">
        <div
          className="absolute inset-0 animate-bg-zoom-slow"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,182,193,0.3), rgba(255,182,193,0.5)), url('https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "saturate(1)",
          }}
        />

        <div className="relative z-10 mx-auto max-w-[900px] px-6 text-center">
          <div className="mb-6 flex items-center justify-center">
            <span className="inline-block rounded-full border border-[#2D1B1B]/70 px-6 py-2 text-[12px] tracking-wide text-[#2D1B1B] uppercase opacity-0" style={{ animation: "fade-up 0.5s ease-out 0.3s forwards" }}>
              WEDDING
            </span>
          </div>
          <h1 className="mx-auto text-balance text-[56px] leading-[1.15] tracking-[-0.5px] font-extrabold text-[#2D1B1B] md:text-[64px]">
            {headlineWords.map((w, i) => (
              <span
                key={i}
                className="inline-block opacity-0"
                style={{ animation: `fade-up 0.6s ease-out forwards`, animationDelay: `${0.1 * i + 0.4}s` }}
              >
                {w}{" "}
              </span>
            ))}
          </h1>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-20 py-[110px] grid grid-cols-12 gap-x-[80px]">
          <div className="col-span-12 md:col-span-5" data-animate="slide-left">
            <h2 className="text-[38px] md:text-[42px] font-bold leading-[1.2] text-[#1F1F1F]">
              “From Concept to Celebration”
            </h2>
          </div>
          <div className="col-span-12 md:col-span-7 mt-8 md:mt-0" data-animate="slide-right">
            <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#6B7280]">
              At Pride Eventz, we streamline event planning to deliver unforgettable experiences. Whether it&apos;s a corporate gathering or a personal celebration, we guide you through each step for a flawless execution that meets your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Hero Statement Section - Beach Background with Overlay Card */}
      <section className="relative overflow-hidden" style={{ paddingTop: "160px", paddingBottom: "160px" }}>
        <div
          ref={beachBgRef}
          className="absolute inset-0 scale-105"
          style={{
            backgroundImage:
              "linear-gradient(rgba(240,240,240,0.6), rgba(240,240,240,0.7)), url('https://images.unsplash.com/photo-1520854221256-17451cc331bf?q=80&w=2069&auto=format&fit=crop')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "grayscale(100%)",
            willChange: "transform",
          }}
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[1100px] px-6 text-center">
          <p className="text-[11px] uppercase tracking-wide text-[#9CA3AF] mb-4" data-animate="fade">
            DREAM WEDDINGS
          </p>
          <h3 className="text-[44px] md:text-[50px] font-bold leading-[1.2] text-[#1F1F1F] max-w-[900px] mx-auto mb-10" data-animate="fade">
            “Creating Timeless Weddings Filled with Love and Joy.”
          </h3>

          <div className="mt-10 flex justify-center" data-animate="fade">
            <div className="relative inline-block transform transition duration-500 hover:scale-102 animate-soft-float">
              <img
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=1200&auto=format&fit=crop"
                alt="Indian wedding ceremony close-up"
                className="w-[520px] max-w-full rounded-[12px] shadow-[0_15px_50px_rgba(0,0,0,0.25)]"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-0 rounded-[12px] ring-2 ring-white/90" />
            </div>
          </div>
        </div>
      </section>

      {/* Modern Weddings */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-20 py-[110px] grid grid-cols-12 gap-x-[70px] items-center">
          <div className="col-span-12 md:col-span-6" data-animate="slide-left">
            <img
              src="https://images.unsplash.com/photo-1616091093714-05a3e66a5423?q=80&w=1200&auto=format&fit=crop"
              alt="Elegant couple in warm golden lighting"
              className="w-full rounded-[16px] shadow-[0_12px_35px_rgba(0,0,0,0.15)] object-cover"
              style={{ aspectRatio: "3/4" }}
              loading="lazy"
            />
          </div>
          <div className="col-span-12 md:col-span-6 mt-10 md:mt-0" data-animate="slide-right">
            <h3 className="text-[34px] md:text-[36px] font-bold text-[#1F1F1F] mb-6">Modern Weddings</h3>
            <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#4B5563]">
              Here&apos;s a refined version of the text to align with a modern wedding theme you clearly convey what you offer: &apos;We craft unforgettable modern weddings with elegant décor, seamless planning, and personalized touches. From venue styling to flawless execution, we bring your dream celebration to life.&apos;
            </p>
          </div>
        </div>
      </section>

      {/* Traditional Weddings (reversed) */}
      <section className="bg-white">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-20 py-[110px] grid grid-cols-12 gap-x-[70px] items-center">
          <div className="col-span-12 md:col-span-6 order-2 md:order-1 mt-10 md:mt-0" data-animate="slide-left">
            <h3 className="text-[34px] md:text-[36px] font-bold text-[#1F1F1F] mb-6">Traditional Weddings</h3>
            <p className="text-[17px] md:text-[18px] leading-[1.7] text-[#4B5563]">
              We create timeless traditional weddings with rich cultural elements, exquisite decor, and seamless coordination. From rituals to grand celebrations, we bring your heritage to life beautifully.
            </p>
          </div>
          <div className="col-span-12 md:col-span-6 order-1 md:order-2" data-animate="slide-right">
            <img
              src="https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=1200&auto=format&fit=crop"
              alt="Wedding rings with roses in soft light"
              className="w-full rounded-[16px] shadow-[0_12px_35px_rgba(0,0,0,0.15)] object-cover"
              style={{ aspectRatio: "4/5" }}
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
