import './globals.css'

import { cx } from 'class-variance-authority'
import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin']
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Movie DB',
  description:
    'A pet project to browse and search your favorite movies and TV shows via the TMDB API.'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cx(
        geistSans.variable,
        geistMono.variable,
        'h-full antialiased'
      )}
    >
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  )
}
