import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { IBM_Plex_Mono, Outfit, Space_Grotesk } from 'next/font/google'
import { GrainOverlay } from '../components/grain-overlay'
import { Navigation } from '../components/navigation'
import './globals.css'

const display = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600', '700'],
})

const sans = Outfit({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '500', '600'],
})

const mono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  title: 'Ravindra Soyam — Graphic designer',
  description:
    'Graphic designer working in branding, print, catalogues, showroom graphics and digital design.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body className="bg-[var(--background)] text-[var(--warm)] antialiased">
        <GrainOverlay />
        <Navigation />
        {children}
      </body>
    </html>
  )
}
