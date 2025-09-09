import type React from "react"
interface QuoteLayoutProps {
  children: React.ReactNode
}

export function QuoteLayout({ children }: QuoteLayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full space-y-8">{children}</div>
    </div>
  )
}
