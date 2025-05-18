'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function LoginPage() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        router.push('/')
        router.refresh()
      } else {
        setError('Invalid password')
      }
    } catch (err) {
      setError('An error occurred')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full space-y-8 p-8"> {/* Overall container is max-w-md */}
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold text-white">
            Early Access
          </h2>
          <p className="mt-2 text-center text-sm text-neutral-400">
            Thank you for your trial.
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="password" className="sr-only">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="appearance-none rounded-lg relative block w-full px-4 py-2 border border-neutral-800 bg-neutral-900 text-white placeholder-neutral-600 focus:outline-none focus:ring-2 focus:ring-neutral-700 focus:border-transparent"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm text-center">{error}</div>
          )}

          <div>
            <button
              type="submit"
              className="w-full bg-white hover:bg-neutral-100 text-black font-medium py-2 px-4 rounded-lg transition-colors cursor-pointer"
            >
              Login
            </button>
          </div>
        </form>
        {/* Promotions Section */}
        <div className="mt-6 text-center text-sm text-neutral-400 space-y-6">
          <p>
            You can be early access, 50% off all plans.
            <a
              href="https://web.facebook.com/Polarlyst"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-white hover:text-neutral-300 underline ml-1"
            >
              DM us on Facebook
            </a>.
          </p>

          {/* Container for videos, allowing them to be horizontal and wrap */}
          {/* On very small screens, they will stack due to max-w-md and iframe widths */}
          <div className="flex flex-row flex-wrap justify-around items-start gap-x-4 gap-y-8">
            
            {/* Web Search Video Block */}
            <div className="flex flex-col items-center space-y-2 w-full"> {/* Each video block takes full width of its flex slot before wrapping */}
              <p className="font-semibold text-neutral-200">Web Search</p>
              <div className="w-full max-w-[560px] mx-auto aspect-[560/314] rounded overflow-hidden bg-neutral-900">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FPolarlyst%2Fvideos%2F722303663558769%2F&show_text=false&width=560&t=51"
                  className="w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            {/* Chat with PDF Video Block */}
            <div className="flex flex-col items-center space-y-2 w-full">
              <p className="font-semibold text-neutral-200">Chat with PDF</p>
              <div className="w-full max-w-[560px] mx-auto aspect-[560/284] rounded overflow-hidden bg-neutral-900">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=284&href=https%3A%2F%2Fweb.facebook.com%2FPolarlyst%2Fvideos%2F2060802184418734%2F&show_text=false&width=560&t=0"
                  className="w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>

            {/* Deep Insights Video Block */}
            <div className="flex flex-col items-center space-y-2 w-full">
              <p className="font-semibold text-neutral-200">Deep Insights</p>
              <div className="w-full max-w-[560px] mx-auto aspect-[560/284] rounded overflow-hidden bg-neutral-900">
                <iframe
                  src="https://www.facebook.com/plugins/video.php?height=284&href=https%3A%2F%2Fweb.facebook.com%2FPolarlyst%2Fvideos%2F694600339744184%2F&show_text=false&width=560&t=0"
                  className="w-full h-full"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allowFullScreen={true}
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                ></iframe>
              </div>
            </div>
          </div> {/* End of videos container */}
        </div> {/* End of promotions section */}
      </div> {/* End of max-w-md container */}
    </div>
  )
}
