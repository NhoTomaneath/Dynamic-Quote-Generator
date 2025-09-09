import { Card, CardContent } from "@/components/ui/card"

interface Quote {
  id: number
  text: string
  author: string
  category: string
}

interface QuoteDisplayProps {
  quote: Quote | null
}

export function QuoteDisplay({ quote }: QuoteDisplayProps) {
  if (!quote) return null

  return (
    <Card className="bg-card border-border shadow-lg">
      <CardContent className="p-8">
        <blockquote className="text-xl md:text-2xl font-medium text-card-foreground leading-relaxed text-center mb-6">
            &lsquo;{quote.text}&rsquo;
        </blockquote>
        <div className="text-center space-y-2">
          <p className="text-lg font-semibold text-primary">— {quote.author}</p>
          <p className="text-sm text-muted-foreground uppercase tracking-wide">{quote.category}</p>
        </div>
      </CardContent>
    </Card>
  )
}
