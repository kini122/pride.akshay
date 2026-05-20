"use client"

import { MapPin, Target, Sparkles } from "lucide-react"

export function MissionStatement() {
  return (
    <section className="bg-background" style={{ padding: "80px 0 68px" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <p className="text-sm font-medium uppercase tracking-widest text-primary mb-4">We are an event management group</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl tracking-tight font-bold text-foreground max-w-2xl">
              Crafting unforgettable events with creativity and style.
            </h2>
          </div>
          <a href="/about" className="text-primary font-semibold hover:text-accent transition-colors mt-4 md:mt-0">
            Learn More About Us →
          </a>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* Left Column - Image */}
          <div className="rounded-md overflow-hidden border border-border/50">
            <img src="/home/mission/mall-exhibition-hall-event-space.jpg" alt="Event space" className="w-full object-cover" style={{ height: "436px" }} />
          </div>

          <div className="space-y-8 flex flex-col justify-center">
            {/* Badges */}
            <div className="flex flex-wrap gap-4">
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-foreground border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.1)]"><MapPin className="w-4 h-4 text-primary" /> Based in Kerala</span>
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-foreground border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.1)]"><Target className="w-4 h-4 text-primary" /> Established in 2010</span>
              <span className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-foreground border border-primary/20 shadow-[0_0_10px_rgba(var(--primary),0.1)]"><Sparkles className="w-4 h-4 text-primary" /> 200+ Projects Done</span>
            </div>

            {/* Body Text */}
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                At Pride Eventz, we specialize in creating unforgettable moments across all event categories. From intimate corporate gatherings to grand wedding celebrations, our comprehensive services include event planning, creative decorations, thematic design, and seamless execution. We transform your vision into reality with meticulous attention to detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
