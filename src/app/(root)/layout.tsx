import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function PagesLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Navbar />
      <section className="h-[calc(100vh-128px)] w-full flex">
        {children}
      </section>
      <Footer />
    </>
  )
}
