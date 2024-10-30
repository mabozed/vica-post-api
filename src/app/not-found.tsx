import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

const NotFound = () => {
  return (
    <div className=" h-[100vh] flex flex-col ">
      <Navbar />
      <div className="w-[100vw] flex flex-1 flex-col justify-center items-center">
        <p className="text-[8rem] text-red-300 font-bold mb-0">404</p>
        <p className=" text-slate-300 font-bold flex flex-col items-center gap-8">
          <span className="text-[6rem]">Not Found</span>{' '}
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default NotFound
