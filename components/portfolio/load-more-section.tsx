"use client"

import { useState } from "react"

export function LoadMoreSection() {
  const [isLoading, setIsLoading] = useState(false)

  const handleLoadMore = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 600)
  }

  return (
    <section className="py-12 px-4 bg-background">
      <div className="max-w-7xl mx-auto flex justify-center">
        <button
          onClick={handleLoadMore}
          className="px-8 py-3 border-2 border-primary text-primary font-semibold rounded-md hover:bg-primary hover:text-white transition-all duration-300 transform hover:-translate-y-1 transition-transform duration-300"
        >
          {isLoading ? "Loading..." : "LOAD MORE"}
        </button>
      </div>
    </section>
  )
}
