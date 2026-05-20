"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { CheckCircle2, Star, Quote, ArrowRight, MessageCircle } from "lucide-react"

export interface ServicePortfolioItem {
  title: string
  category: string
  description: string
  image: string
  result?: string
}

export interface ServiceFeature {
  title: string
  description: string
}

interface ServicePageLayoutProps {
  title: string
  heroSubheadline: string
  heroImage: string
  detailedOverview: {
    intro: string
    whoFor: string
    problemSolved: string
    whyUs: string
  }
  whatWeOffer: ServiceFeature[]
  ourApproach: ServiceFeature[]
  keyHighlights: ServiceFeature[]
  portfolioItems: ServicePortfolioItem[]
  testimonial: {
    client: string
    quote: string
  }
  ctaHeadline: string
  ctaSubheadline?: string
}

export function ServicePageLayout({
  title,
  heroSubheadline,
  heroImage,
  detailedOverview,
  whatWeOffer,
  ourApproach,
  keyHighlights,
  portfolioItems,
  testimonial,
  ctaHeadline,
  ctaSubheadline,
}: ServicePageLayoutProps) {
  // Removed IntersectionObserver to ensure content is always visible
  
  return (
    <>
      {/* 1. Hero Section */}
      <section
        className="relative w-full h-[70vh] flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `url("${heroImage}")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-16">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in-up tracking-tight">
            {title}
          </h1>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "100ms" }} />
          <p className="text-xl md:text-2xl text-white/90 animate-fade-in-up font-light max-w-3xl mx-auto leading-relaxed" style={{ animationDelay: "200ms" }}>
            {heroSubheadline}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up" style={{ animationDelay: "300ms" }}>
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground font-bold rounded-md hover:bg-accent transition-colors flex items-center gap-2 w-full sm:w-auto justify-center"
            >
              Discuss Your Project <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Service Overview */}
      <section className="py-24 px-4 bg-background border-b border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Overview</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8 leading-tight">Elevating Experiences Through Expert Management</h3>
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              {detailedOverview.intro}
            </p>
            <div className="space-y-6 mt-8">
              <div className="flex gap-4">
                <div className="w-1.5 bg-primary rounded-full" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Who It's For</h4>
                  <p className="text-muted-foreground">{detailedOverview.whoFor}</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-1.5 bg-primary rounded-full" />
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">The Solution</h4>
                  <p className="text-muted-foreground">{detailedOverview.problemSolved}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden border border-border/50 relative z-10">
              <img src={heroImage} alt={title} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-secondary border border-border/50 p-8 rounded-2xl z-20 max-w-sm hidden md:block">
              <h4 className="text-xl font-bold text-foreground mb-2">Why Pride Eventz?</h4>
              <p className="text-muted-foreground text-sm">{detailedOverview.whyUs}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. What We Offer */}
      <section className="py-24 px-4 bg-secondary/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Our Services</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">What We Offer</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whatWeOffer.map((item, index) => (
              <div key={index} className="p-8 rounded-xl bg-card border border-border/50 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors">
                  <CheckCircle2 className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Our Approach */}
      <section className="py-24 px-4 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Methodology</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground">Our Approach</h3>
          </div>
          
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-border/50 -translate-y-1/2 hidden lg:block" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
              {ourApproach.map((step, index) => (
                <div 
                  key={index}
                  className="relative bg-card p-6 rounded-xl border border-border/50 transition-all duration-700 hover:border-primary/50 z-10 animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="text-5xl font-bold text-primary/10 mb-4 absolute -top-4 -right-2">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3 relative z-10 mt-2">{step.title}</h4>
                  <p className="text-sm text-muted-foreground relative z-10">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Key Highlights */}
      <section className="py-24 px-4 bg-secondary border-y border-border/40">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Why Us</h2>
            <h3 className="text-3xl md:text-5xl font-bold text-foreground mb-8">Key Highlights</h3>
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              We don't just manage events; we architect experiences. Our attention to detail and commitment to excellence set us apart in delivering world-class services.
            </p>
            <div className="space-y-6">
              {keyHighlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 items-start border-l-2 border-primary pl-6 py-2">
                  <div>
                    <h4 className="text-lg font-bold text-foreground mb-1">{highlight.title}</h4>
                    <p className="text-muted-foreground text-sm">{highlight.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-4 pt-12">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border/50">
                <img src="/services/layout/elegant-wedding-stage-decoration.jpg" alt="Highlight 1" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="space-y-4">
              <div className="aspect-[4/5] rounded-xl overflow-hidden border border-border/50">
                <img src="/services/layout/mall-event-with-massive-crowd-aerial-view.jpg" alt="Highlight 2" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Portfolio / Past Work Examples */}
      {portfolioItems && portfolioItems.length > 0 && (
        <section className="py-24 px-4 bg-background">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16">
              <div>
                <h2 className="text-sm font-medium uppercase tracking-widest text-primary mb-4">Our Work</h2>
                <h3 className="text-3xl md:text-5xl font-bold text-foreground">Featured Projects</h3>
              </div>
              <Link href="/portfolio" className="text-primary hover:text-accent font-medium inline-flex items-center mt-6 md:mt-0">
                View All Projects <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <div key={index} className="group cursor-pointer rounded-xl overflow-hidden border border-border/50 bg-card">
                  <div className="aspect-video overflow-hidden relative">
                    <img src={item.image} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                    <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-medium text-white border border-white/10 uppercase tracking-wider">
                      {item.category}
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>
                    {item.result && (
                      <div className="pt-4 border-t border-border/50">
                        <span className="text-xs font-bold uppercase text-primary block mb-1">Result</span>
                        <span className="text-sm text-foreground">{item.result}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 7. Client Testimonial */}
      {testimonial && testimonial.quote && (
        <section className="py-24 px-4 bg-secondary/30 border-t border-border/40">
          <div className="max-w-4xl mx-auto text-center">
            <Quote className="w-16 h-16 text-primary/20 mx-auto mb-8" />
            <h2 className="text-2xl md:text-4xl font-light italic text-foreground leading-relaxed mb-8">
              "{testimonial.quote}"
            </h2>
            <div className="flex items-center justify-center gap-2 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-primary text-primary" />
              ))}
            </div>
            <p className="text-xl font-bold text-foreground">{testimonial.client}</p>
          </div>
        </section>
      )}

      {/* 8. CTA Section */}
      <section className="py-24 px-4 bg-background relative overflow-hidden border-t border-border/50">
        <div className="max-w-5xl mx-auto text-center relative z-10 bg-secondary/80 backdrop-blur-sm border border-border/50 p-12 md:p-20 rounded-3xl">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">{ctaHeadline}</h2>
          {ctaSubheadline && (
            <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">{ctaSubheadline}</p>
          )}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-bold text-lg hover:bg-accent transition-colors w-full sm:w-auto"
            >
              Contact Us Today
            </Link>
            <a
              href="https://wa.me/919895690349"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 bg-[#25D366] text-white rounded-md font-bold text-lg hover:bg-[#1ebe5d] transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="w-5 h-5 mr-2" /> WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
