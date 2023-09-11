import { Metadata } from 'next'
import { Fira_Code } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'
import './globals.css'
import 'remixicon/fonts/remixicon.css'

const fira = Fira_Code({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Leonard Laput - Full Stack Developer',
    template: '%s | Leonard Laput - Full Stack Developer',
  },
  description: 'Leonard Laput - Full Stack Developer',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${fira.className} text-size-body text-color-secondary-50`}
      >
        <div className="w- rounded-lg border border-color-line-50 bg-color-primary-100">
          <Header />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
