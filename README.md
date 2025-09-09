# Daily Inspiration Quote Generator
Author: Nho Tomaneath

## Brief Description

Daily Inspo is a web application that displays a new inspirational quote each day. Built with Next.js (React), TypeScript, and Supabase as the backend database.

## Setup Instructions

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd daily-inspo

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a .env.local file in the root directory and add your Supabase credentials:
```bash
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
```
4. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Architecture Explanation
Frontend: Built with Next.js and React, the frontend fetches and displays quotes.
Backend: Supabase serves as the backend, providing a RESTful API and authentication.
Database: Supabase PostgreSQL stores the quotes.
Communication: The frontend uses the Supabase client to securely fetch quotes from the database using the public API keys defined in .env.local
Deploy: On Vercel
