import type React from "react"
import "./quote-layout.css"

interface QuoteLayoutProps {
  children: React.ReactNode
}

export function QuoteLayout({ children }: QuoteLayoutProps) {
  return (
    <div className="quote-bg">
      <div className="max-w-2xl w-full space-y-8 p-4">{children}</div>
    </div>
  )
}