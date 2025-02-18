import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import ScrollToTop from '@/components/ScrollToTop'
import ProgressBar from '@/components/ProgressBar'
import { ThemeProvider } from '@/providers/ThemeProvider'
import ThemeToggle from '@/components/ThemeToggle'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://mlpsu.org'),
  title: 'ML@PSU',
  description: 'Machine Learning Club at Penn State University',
  openGraph: {
    title: 'ML@PSU',
    description: 'Machine Learning Club at Penn State University',
    url: 'https://mlpsu.org',
    siteName: 'ML@PSU',
    images: [
      {
        url: '/preview.png',
        width: 1200,
        height: 630,
        alt: 'ML@PSU - Machine Learning Club at Penn State University'
      }
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ML@PSU',
    description: 'Machine Learning Club at Penn State University',
    images: ['/preview.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <ProgressBar />
          {children}
          <ScrollToTop />
          <ThemeToggle />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
