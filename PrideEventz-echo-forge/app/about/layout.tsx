import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Us | Pride Eventz Kerala",
  description: "Meet the team behind Pride Eventz — delivering world-class event management since 2010. Learn our story, mission and values.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
