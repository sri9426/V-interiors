import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Book() {
  const { register, handleSubmit, reset } = useForm()
  const [sending, setSending] = useState(false)

  const WEB3FORMS_KEY = '0ebf8948-da65-4952-aa42-a3803c0480da' // <-- replace

  const onSubmit = async (data) => {
    try {
      setSending(true)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New booking request – V-Interior',
          from_name: data.name,
          from_email: data.email,
          date: data.date,
          service: data.service,
          notes: data.notes || '',
          botcheck: data.botcheck || '', // honeypot
          // redirect: 'https://your-site.com/thanks' // optional
        })
      })
      const json = await res.json()
      if (json.success) {
        alert('Thanks! Your booking request was sent.')
        reset()
      } else {
        alert('Could not send. Please try again.')
        console.error(json)
      }
    } catch (e) {
      alert('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Book a Consultation</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
        {/* honeypot (hidden) */}
        <input
          type="text"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
          {...register('botcheck')}
        />

        <input
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
          placeholder="Name"
          {...register('name', { required: true })}
        />
        <input
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
          placeholder="Email"
          type="email"
          {...register('email', { required: true })}
        />
        <input
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
          placeholder="Preferred date"
          type="date"
          {...register('date', { required: true })}
        />

        <select
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
          defaultValue="Full service design"
          {...register('service')}
        >
          <option>Full service design</option>
          <option>Kitchen remodel</option>
          <option>Bathroom remodel</option>
          <option>Commercial</option>
        </select>

        <textarea
          className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
          rows="4"
          placeholder="Notes (optional)"
          {...register('notes')}
        />

        <button
          disabled={sending}
          className="rounded-xl px-5 py-3 bg-black text-white font-medium hover:bg-gray-800 transition-colors disabled:opacity-60"
        >
          {sending ? 'Sending…' : 'Request booking'}
        </button>
      </form>
      <p className="mt-3 text-xs text-gray-500">
        We’ll confirm your slot by email within 1–2 business days.
      </p>
    </section>
  )
}
