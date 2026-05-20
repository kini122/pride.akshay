"use client" // Error components must be Client Components

import { useEffect } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Runtime Application Error:", error)
  }, [error])

  return (
    <main className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-32">
        <div className="w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-8">
          <svg className="w-10 h-10 text-destructive" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <h2 className="text-3xl font-bold text-foreground mb-4">Something went wrong!</h2>
        <p className="text-muted-foreground max-w-md mb-10">
          We apologize for the inconvenience. An unexpected error occurred while loading this section of the website.
        </p>
        <div className="flex gap-4">
          <button
            onClick={() => reset()}
            className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:bg-primary/90 transition-all duration-300"
          >
            Try again
          </button>
          <a
            href="/"
            className="px-8 py-3 bg-card border border-border/50 text-foreground rounded-md font-semibold hover:bg-muted transition-all duration-300"
          >
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </main>
  )
}
