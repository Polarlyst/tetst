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
        <div className="mt-6 text-center text-sm text-neutral-400">
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
        </div>
      </div>
    </div>
  )
}
