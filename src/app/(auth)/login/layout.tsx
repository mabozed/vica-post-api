import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Login',
  description: 'next app auth',
}

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
