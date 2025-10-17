"use client"

import { useEffect, useMemo, useRef } from "react"
import Link from "next/link"
import { ChevronDown, Mail, Phone, ArrowUp } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services/corporate",
    submenu: [
      { label: "Corporate", href: "/services/corporate" },
      { label: "Promotions", href: "/services/promotions" },
      { label: "Exhibitions", href: "/services/exhibitions" },
      { label: "Private Parties", href: "/services/private-parties" },
      { label: "Weddings", href: "/services/weddings" },
    ],
  },
  { label: "Portfolio", href: "/gallery" },
  { label: "Our Clients", href: "/clients" },
]

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
  // Animations on scroll
  useRevealOnScroll("[data-animate=slide-left]", "animate-slide-in-left")
  useRevealOnScroll("[data-animate=slide-right]", "animate-slide-in-right")
  useRevealOnScroll("[data-animate=fade]", "animate-fade-up")

  // Parallax for beach section background
  const beachBgRef = useRef<HTMLDivElement>(null)
  useParallax(beachBgRef, 0.4)

  const headlineWords = useMemo(
    () => "Creative solutions make you want to stay.".split(" "),
    []
  )

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <main className="bg-white text-[#1F1F1F]">
      {/* Hero Section */}
      <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden">
        {/* Background image with pink overlay and slow zoom */}
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

        {/* Top Navigation */}
        <header className="absolute top-0 left-0 right-0 z-10">
          <div className="mx-auto max-w-[1300px] px-6 lg:px-16 py-5">
            <div className="flex items-center justify-between">
              {/* Left: Logo */}
              <Link href="/" className="flex items-center gap-3 text-[#2D1B1B] hover:opacity-90">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#2D1B1B]">
                  <span className="flex flex-col gap-1.5">
                    <span className="block h-0.5 w-5 bg-[#F97316]" />
                    <span className="block h-0.5 w-5 bg-[#F97316]" />
                    <span className="block h-0.5 w-5 bg-[#F97316]" />
                  </span>
                </span>
                <span className="text-[16px] font-medium tracking-tight">Pride Eventz</span>
              </Link>

              {/* Center: Nav */}
              <nav className="hidden md:flex items-center" aria-label="Primary">
                <ul className="flex items-center gap-[44px] text-[15px] md:text-[16px] font-medium text-[#2D1B1B]/90">
                  {navLinks.map((item) => (
                    <li key={item.label} className="relative group">
                      {item.submenu ? (
                        <>
                          <Link href={item.href} className="flex items-center gap-1">
                            <span>Services</span>
                            <ChevronDown className="h-4 w-4" />
                          </Link>
                          <div className="invisible absolute left-0 mt-3 w-44 rounded-lg border border-[#2D1B1B]/10 bg-white opacity-0 shadow-xl transition-all duration-200 group-hover:visible group-hover:opacity-100">
                            <ul className="py-2 text-[14px] text-[#2D1B1B]">
                              {item.submenu.map((s) => (
                                <li key={s.href}>
                                  <Link
                                    href={s.href}
                                    className="block px-4 py-2 hover:bg-[#FFF5F7] hover:text-[#F97316] transition-colors"
                                  >
                                    {s.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </>
                      ) : (
                        <Link href={item.href} className="hover:text-[#F97316] transition-colors">
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Right: CTA */}
              <div className="hidden md:block">
                <Link
                  href="/contact"
                  className="inline-block rounded-lg border-2 border-[#2D1B1B] px-8 py-3 text-[15px] font-medium text-[#2D1B1B] transition-colors hover:bg-[#FFF5F7]"
                >
                  Let&apos;s work together
                </Link>
              </div>
            </div>
          </div>
        </header>

        {/* Centered Hero Content */}
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
        {/* Parallax Background */}
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

      {/* Footer Section - custom for this page */}
      <footer className="bg-[#F9FAFB]">
        <div className="mx-auto max-w-[1300px] px-6 lg:px-20 py-[70px] grid grid-cols-1 md:grid-cols-4 gap-[70px]">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center gap-3">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-md border-2 border-[#2D1B1B]">
                <span className="flex flex-col gap-1.5">
                  <span className="block h-0.5 w-5 bg-[#F97316]" />
                  <span className="block h-0.5 w-5 bg-[#F97316]" />
                  <span className="block h-0.5 w-5 bg-[#F97316]" />
                </span>
              </span>
              <span className="text-[16px] font-semibold text-[#1F1F1F]">Pride Eventz</span>
            </div>
            <p className="mt-4 max-w-[280px] text-[14px] leading-[1.6] text-[#6B7280]">
              We specialize in creating customized solutions that align with your vision and budget
            </p>
            <div className="mt-6 space-y-3 text-[14px] text-[#6B7280]">
              <a href="tel:+919846596349" className="inline-flex items-center gap-2 hover:text-[#F97316] transition-colors">
                <Phone className="h-4 w-4" /> Tel no.: +91 9846596349
              </a>
              <a href="mailto:info@prideeventz.in" className="inline-flex items-center gap-2 hover:text-[#F97316] transition-colors">
                <Mail className="h-4 w-4" /> Email: info@prideeventz.in
              </a>
            </div>
          </div>

          {/* Column 2: Company */}
          <div>
            <h4 className="mb-4 text-[16px] font-semibold text-[#1F1F1F]">Company</h4>
            <ul className="space-y-2 text-[14px] leading-[2] text-[#6B7280]">
              <li><Link href="/about" className="hover:text-[#F97316] transition-colors">About</Link></li>
              <li><Link href="/services/corporate" className="hover:text-[#F97316] transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-[#F97316] transition-colors">Portfolio</Link></li>
              <li><Link href="/clients" className="hover:text-[#F97316] transition-colors">Our Clients</Link></li>
              <li><Link href="/contact" className="hover:text-[#F97316] transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h4 className="mb-4 text-[16px] font-semibold text-[#1F1F1F]">Social Media</h4>
            <ul className="space-y-2 text-[14px] leading-[2] text-[#6B7280]">
              <li><a href="#" className="hover:text-[#FF1493] transition-colors">Facebook</a></li>
              <li><a href="#" className="hover:text-[#FF1493] transition-colors">Youtube</a></li>
              <li><a href="#" className="hover:text-[#FF1493] transition-colors">Instagram</a></li>
            </ul>
          </div>

          {/* Column 4: Legal & Press */}
          <div>
            <h4 className="mb-4 text-[16px] font-semibold text-[#1F1F1F]">Legal &amp; Press</h4>
            <ul className="space-y-2 text-[14px] leading-[2] text-[#6B7280]">
              <li><Link href="#" className="hover:text-[#F97316] transition-colors">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-[#F97316] transition-colors">Terms &amp; Conditions</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-[#E5E7EB]">
          <div className="mx-auto max-w-[1300px] px-6 lg:px-20 py-6 flex items-center justify-between text-[14px] text-[#6B7280]">
            <span>© Pride Eventz 2025</span>
            <span>Kochi, Kerala</span>
            <button onClick={scrollTop} aria-label="Back to top" className="inline-flex items-center gap-2 text-[#6B7280] hover:text-[#F97316] transition">
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-[#D1D5DB]"><ArrowUp className="h-4 w-4" /></span>
            </button>
          </div>
        </div>
      </footer>
    </main>
  )
}
