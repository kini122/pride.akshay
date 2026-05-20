import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Conferences & MICE Services | Pride Eventz",
  description: "Expert MICE event management — delegate coordination, venue sourcing, AV production and more.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
