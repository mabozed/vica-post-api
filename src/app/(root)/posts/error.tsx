'use client'

// Error boundaries must be Client Components

import { useEffect } from 'react'

export default function PostPageError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="w-full flex flex-col justify-center items-center gap-20">
      <h2 className="text-[4rem] text-slate-400 font-bold">
        Something went wrong!
      </h2>
      <button
        className="bg-red-700 text-white w-36 h-12 rounded font-semibold"
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  )
}
