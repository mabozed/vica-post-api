import type { Metadata } from 'next'

import './globals.css'
// import Navbar from '@/components/Navbar'
// import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | Vica Blog',
    default: 'Vica Blog', // a default is required when creating a template
  },
  description: 'next app blog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Navbar /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  )
}
