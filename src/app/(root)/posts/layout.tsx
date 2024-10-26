import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Posts',
  description: 'Blog Posts page',
}

export default function PostsLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
