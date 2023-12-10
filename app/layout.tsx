import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: 'Narenj | نارنج',
  description: 'طراحی سایت و اپلیکیشن',
}

const fontPrimary = localFont({
  src: "../public/assets/fonts/estedad.woff2",
  variable: "--font-estedad"
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" dir="rtl">
      <body className={fontPrimary.variable}>
        {children}
        <SpeedInsights />
      </body>
    </html>
  )
}
