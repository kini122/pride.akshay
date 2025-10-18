"use client"

import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Arun Menon",
    role: "Founder & Creative Director",
    image: "/professional-headshot.png",
    bio: "Visionary leader with 20+ years in event management",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    image: "/corporate-event-exhibition.jpg",
    bio: "Expert in logistics and seamless execution",
  },
  {
    name: "Vikram Kumar",
    role: "Design Lead",
    image: "/beach-wedding-setup.jpg",
    bio: "Creative genius behind stunning event aesthetics",
  },
  {
    name: "Anjali Nair",
    role: "Client Relations",
    image: "/luxury-event-party-celebration.jpg",
    bio: "Dedicated to exceeding client expectations",
  },
]

export function TeamSection() {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(teamMembers.length).fill(false))
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            teamMembers.forEach((_, index) => {
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
    <section ref={sectionRef} className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Creative Team</h2>
          <p className="text-lg text-muted-foreground">Talented professionals dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-500 ${
                visibleCards[index] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative mb-4 overflow-hidden rounded-lg h-64">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
                  <p className="text-white text-center px-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    {member.bio}
                  </p>
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground">{member.name}</h3>
              <p className="text-primary font-semibold">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
