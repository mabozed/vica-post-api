import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About',
  description: 'Blog About page',
}

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
