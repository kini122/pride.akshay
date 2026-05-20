import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Concert Management Services | Pride Eventz",
  description: "End-to-end live concert production — stage, sound, lighting, artist management and crowd safety.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
