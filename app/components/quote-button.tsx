"use client"

import { Button } from "@/components/ui/button"
import { BookOpen, RefreshCw } from "lucide-react"

interface QuoteButtonProps {
  onClick: () => void
  loading: boolean
  hasQuote: boolean
}

export function QuoteButton({ onClick, loading, hasQuote }: QuoteButtonProps) {
  return (
    <div className="text-center">
      <Button
        onClick={onClick}
        disabled={loading}
        size="lg"
        className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3 text-lg font-semibold"
      >
        {loading ? (
          <>
            <RefreshCw className="mr-2 h-5 w-5 animate-spin" />
            Loading...
          </>
        ) : (
          <>
            <BookOpen className="mr-2 h-5 w-5" />
            {hasQuote ? "Get Another Quote" : "Get Inspired"}
          </>
        )}
      </Button>
    </div>
  )
}
