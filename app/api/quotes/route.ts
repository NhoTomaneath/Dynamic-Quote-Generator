import { createClient } from '@/lib/supabase'

export async function GET() {
  const supabase = createClient()
  
  const { data: quotes, error } = await supabase
    .from('quotes')
    .select('*')
  
  if (error) {
    return Response.json({ error: 'Failed to fetch quotes' }, { status: 500 })
  }
  
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
  return Response.json(randomQuote)
}