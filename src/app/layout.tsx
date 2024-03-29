import '../styles/globals.css'

import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'

import { Header } from '@/components/header'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <div className="flex min-h-screen flex-col items-center justify-start">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
