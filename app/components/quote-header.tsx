import { BookOpen } from "lucide-react"

export function QuoteHeader() {
  return (
    <div className="text-center space-y-4">
      <div className="flex items-center justify-center gap-3">
        <BookOpen className="h-8 w-8 text-primary" />
        <h1 className="text-4xl font-bold text-foreground">Daily Inspiration</h1>
      </div>
      <p className="text-muted-foreground text-lg">Discover wisdom and motivation from great minds</p>
    </div>
  )
}
