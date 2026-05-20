"use client"

import { useState, useEffect } from "react"

const tabs = [
  { id: "all", label: "All Works" },
  { id: "corporate", label: "Corporate Events" },
  { id: "weddings", label: "Destination Weddings" },
  { id: "concerts", label: "Concerts" },
  { id: "mice", label: "Conferences & MICE" },
  { id: "exhibitions", label: "Exhibitions" },
  { id: "brand-activation", label: "Brand Activation" },
  { id: "rural-marketing", label: "Rural Marketing" },
]

interface FilterTabsProps {
  onFilterChange?: (filter: string) => void
}

export function FilterTabs({ onFilterChange }: FilterTabsProps) {
  const [activeTab, setActiveTab] = useState("all")
  const [isSticky, setIsSticky] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId)
    onFilterChange?.(tabId)
  }

  return (
    <section
      className={`w-full bg-background transition-all duration-300 ${
        isSticky ? "fixed top-16 left-0 right-0 z-40 border border-border/50" : "relative"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Responsive Wrap Menu */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 pb-4 md:pb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`relative px-4 md:px-6 py-2 font-medium text-sm md:text-base transition-all duration-300 ${
                activeTab === tab.id ? "text-primary font-bold" : "text-muted-foreground hover:text-primary"
              }`}
            >
              {tab.label}
              {/* Animated Underline */}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary rounded-full animate-fade-in-up" />
              )}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
