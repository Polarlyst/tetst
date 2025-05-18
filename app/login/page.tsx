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
      <div className="max-w-md w-full space-y-8 p-8">
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
        <div className="mt-6 text-center text-sm text-neutral-400 space-y-6"> {/* Added space-y-6 for spacing between video blocks */}
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

          {/* Web Search Video */}
          <div className="flex flex-col items-center space-y-2"> {/* Use flex-col and items-center for vertical layout and centering */}
            <p className="text-neutral-300">Web Search</p> {/* Description for the first video */}
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2FPolarlyst%2Fvideos%2F722303663558769%2F&show_text=false&width=560&t=51"
              width="560"
              height="314"
              style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

          {/* Chat with PDF Video */}
          <div className="flex flex-col items-center space-y-2"> {/* Another block for the second video */}
             <p className="text-neutral-300">Chat with PDF</p> {/* Description for the second video */}
            <iframe
              src="https://www.facebook.com/plugins/video.php?height=284&href=https%3A%2F%2Fweb.facebook.com%2FPolarlyst%2Fvideos%2F2060802184418734%2F&show_text=false&width=560&t=0"
              width="560"
              height="284"
              style={{ border: 'none', overflow: 'hidden', maxWidth: '100%' }}
              scrolling="no"
              frameBorder="0"
              allowFullScreen={true}
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            ></iframe>
          </div>

        </div>
      </div>
    </div>
  )
}
