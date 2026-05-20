import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Portfolio | Pride Eventz – Our Event Work",
  description: "Browse our portfolio of corporate events, weddings, concerts, exhibitions and brand activations delivered across India.",
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
