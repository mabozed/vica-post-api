import Link from 'next/link'

const LoginPage = () => {
  return (
    <div className="w-80 h-80 bg-slate-800 text-white font-bold flex flex-col justify-center items-center gap-10">
      LoginForm
      <p>
        Not Registered, Please{' '}
        <Link href="/register" className="font-light underline">
          Register
        </Link>
      </p>
    </div>
  )
}

export default LoginPage
