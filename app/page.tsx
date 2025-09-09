"use client"

import { useState } from "react"
import { QuoteLayout } from "@/app/layouts/quote-layout"
import { QuoteHeader } from "@/app/components/quote-header"
import { QuoteDisplay } from "@/app//components/quote-display"
import { QuoteButton } from "@/app/components/quote-button"
import { QuoteFooter } from "@/app/components/quote-footer"

interface Quote {
  id: number
  text: string
  author: string
  category: string
}

export default function QuotePage() {
  const [quote, setQuote] = useState<Quote | null>(null)
  const [loading, setLoading] = useState(false)

  const fetchRandomQuote = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/quotes")
      if (response.ok) {
        const data = await response.json()
        setQuote(data)
      } else {
        console.error("Failed to fetch quote")
      }
    } catch (error) {
      console.error("Error fetching quote:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <QuoteLayout>
      <QuoteHeader />
      <QuoteDisplay quote={quote} />
      <QuoteButton onClick={fetchRandomQuote} loading={loading} hasQuote={!!quote} />
      <QuoteFooter />
    </QuoteLayout>
  )
}
