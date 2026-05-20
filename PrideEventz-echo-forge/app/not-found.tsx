"use client"

import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
        <h1 className="text-9xl font-bold text-primary mb-4 tracking-tighter">404</h1>
        <h2 className="text-3xl font-semibold text-foreground mb-6">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md mb-10">
          The page you are looking for doesn't exist or has been moved. 
          Let's get you back on track to exploring our premium event services.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
        >
          Return Home
        </Link>
      </div>
      <Footer />
    </main>
  )
}
