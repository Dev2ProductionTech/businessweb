import React, { useRef, useState } from 'react'
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react'

export default function ContactForm() {
  const formRef = useRef(null)
  const [status, setStatus] = useState(null)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)

    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001'

    try {
      const form = formRef.current
      const formData = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
      }

      const response = await fetch(`${apiUrl}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      })

      const data = await response.json()

      if (data.success) {
        setStatus('success')
        form.reset()
      } else {
        setStatus('error')
      }
    } catch (err) {
      console.error('Form submission error:', err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
          Name *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
          placeholder="Your full name"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows="5"
          className="w-full bg-white/5 border border-brand-cyan/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-brand-cyan focus:ring-2 focus:ring-brand-cyan/50 transition-all resize-none"
          placeholder="Tell us about your project or question..."
        />
      </div>

      <div>
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-brand-orange to-brand-orange-warm text-white px-6 py-4 rounded-lg font-semibold shadow-glow-orange hover:shadow-glow-orange-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <span>Send Message</span>
          )}
        </button>
      </div>

      {status && (
        <div
          className={'text-sm p-4 rounded-lg flex items-center gap-2 ' + (
            status === 'success'
              ? 'bg-green-500/10 text-green-400 border border-green-500/30'
              : 'bg-red-500/10 text-red-400 border border-red-500/30'
          )}
        >
          {status === 'success' ? (
            <>
              <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              <span>
                Message sent successfully! Check your email for confirmation. We'll respond within 4 business hours.
              </span>
            </>
          ) : (
            <>
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <span>
                Failed to send message. Please try again or email us directly at sajjadali@dev2production.tech
              </span>
            </>
          )}
        </div>
      )}
    </form>
  )
}
