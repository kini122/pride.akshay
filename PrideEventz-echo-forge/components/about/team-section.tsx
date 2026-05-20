"use client"

import { useEffect, useRef, useState } from "react"

const teamMembers = [
  {
    name: "Arun Menon",
    role: "Founder & Creative Director",
    image: "/about/team/professional-headshot.png",
    bio: "Visionary leader with 20+ years in event management",
  },
  {
    name: "Priya Sharma",
    role: "Operations Manager",
    image: "/about/team/corporate-event-exhibition.jpg",
    bio: "Expert in logistics and seamless execution",
  },
  {
    name: "Vikram Kumar",
    role: "Design Lead",
    image: "/about/introduction/elegant-event-venue-decoration.jpg",
    bio: "Creative genius behind stunning event aesthetics",
  },
  {
    name: "Anjali Nair",
    role: "Client Relations",
    image: "/about/introduction/luxury-event-party-celebration.jpg",
    bio: "Dedicated to exceeding client expectations",
  },
]

export function TeamSection() {
  const [isVisible, setIsVisible] = useState(true)
  const sectionRef = useRef<HTMLDivElement>(null)

  

  return (
    <section ref={sectionRef} className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Creative Team</h2>
          <p className="text-lg text-muted-foreground">Talented professionals dedicated to your success</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center transition-all duration-500 ${
                "animate-fade-in-up"
              }`}
            >
              <div className="relative mb-4 overflow-hidden rounded-md h-64">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
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
