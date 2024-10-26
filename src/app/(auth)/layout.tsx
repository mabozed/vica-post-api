import type { Metadata } from 'next'
import Footer from '@/components/Footer'
import Link from 'next/link'

export const metadata: Metadata = {
  title: {
    template: '%s | Auth',
    default: 'Auth', // a default is required when creating a template
  },
  description: 'next app auth',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div className="px-10 pt-10 pb-2">
        <Link href="/" className="py-2 px-3 bg-slate-800 text-white font-bold">
          Back To Home
        </Link>
      </div>
      <section className="h-[calc(100vh-136px)] w-full flex justify-center items-center">
        {children}
      </section>
      <Footer />
    </>
  )
}
