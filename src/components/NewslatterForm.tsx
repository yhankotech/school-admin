'use client'

import { useState } from 'react'

export function NewsletterForm() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
  }

  return submitted ? (
    <p className="text-[#FF5777] font-medium text-center">Obrigado! Em breve enviaremos novidades 😊</p>
  ) : (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="email"
        required
        placeholder="Seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="border border-[#FF5777] rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#FF5777] cursor-pointer placeholder:text-white"
      />
      <button
        type="submit"
        className="bg-[#FF5777] text-white px-4 py-2 cursor-pointer rounded hover:bg-[#FF5777]"
      >
        Inscrever-se
      </button>
    </form>
  )
}
