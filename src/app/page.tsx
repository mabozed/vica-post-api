import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Home() {
  return (
    <div className="h-[100vh] flex flex-col justify-between items-center">
      <Navbar />
      <div className="flex flex-1 items-center justify-center font-bold text-5xl">
        <p>Home Page</p>
      </div>
      <Footer />
    </div>
  )
}
