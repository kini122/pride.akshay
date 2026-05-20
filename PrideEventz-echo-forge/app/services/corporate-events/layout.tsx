import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Corporate Event Management | Pride Eventz",
  description: "Professional corporate event management in India — product launches, team events, conferences. Get a free quote today.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
