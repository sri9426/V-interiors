import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Contact() {
  const { register, handleSubmit, reset } = useForm()
  const [sending, setSending] = useState(false)

  // put your key here or use an env var like import.meta.env.VITE_WEB3FORMS_KEY
  const WEB3FORMS_KEY = '0ebf8948-da65-4952-aa42-a3803c0480da'

  const onSubmit = async (data) => {
    try {
      setSending(true)
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          subject: 'New inquiry from V-Interior website',
          from_name: data.name,
          from_email: data.email,
          phone: data.phone || '',
          service: data.service || '',
          budget: data.budget || '',
          message: data.message,
          botcheck: data.botcheck || '',                 // honeypot
          // redirect: 'https://your-site.com/thanks'    // optional
        })
      })
      const json = await res.json()
      if (json.success) {
        alert('Thanks! Your message was sent.')
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

  // Flip this to put the image on the left or right
  const imageOnLeft = true

  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid items-stretch gap-8 md:grid-cols-2">
        {/* Image side */}
        <aside
          className={[
            "relative overflow-hidden rounded-3xl min-h-[320px]",
            imageOnLeft ? "order-1" : "order-2 md:order-2"
          ].join(' ')}
        >
          <img
            src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2000&auto=format&fit=crop"
            alt="Calm interior space with warm light"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
          <div className="relative z-10 p-6 sm:p-8 text-white">
            <span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
              V Interior
            </span>
            <h2 className="mt-3 text-2xl font-semibold sm:text-3xl">
              Let’s shape your space.
            </h2>
            <p className="mt-2 text-white/90 text-sm">
              Share your goals, timeline, and budget—we’ll reply within 1–2 business days.
            </p>
            <div className="mt-6 grid gap-2 text-sm text-white/90">
              <div>📍 Shankarpally</div>
              <div>📞 +91 863-984-7395</div>
              <div>✉️ Vinteriors31@gmail.com</div>
            </div>
          </div>
        </aside>

        {/* Form side */}
        <div className={[imageOnLeft ? "order-2" : "order-1 md:order-1"].join(' ')}>
          <div className="rounded-3xl border bg-white p-6 sm:p-8 shadow-sm">
            <h1 className="text-3xl font-semibold">Contact</h1>
            <p className="mt-2 text-gray-600">
              Tell us a bit about your project and we’ll get back shortly.
            </p>

            <form onSubmit={handleSubmit(onSubmit)} className="mt-6 grid gap-4">
              {/* honeypot (hidden) */}
              <input
                type="text"
                className="hidden"
                tabIndex={-1}
                autoComplete="off"
                {...register('botcheck')}
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
                  placeholder="Name"
                  {...register('name', { required: true })}
                  aria-label="Name"
                />
                <input
                  className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
                  placeholder="Email"
                  type="email"
                  {...register('email', { required: true })}
                  aria-label="Email"
                />
              </div>

              <input
                className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
                placeholder="Phone"
                {...register('phone')}
                aria-label="Phone"
              />

              <div className="grid gap-4 sm:grid-cols-2">
                <select
                  className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
                  {...register('service')}
                  aria-label="Service"
                  defaultValue=""
                >
                  <option value="" disabled>Service</option>
                  <option>Residential</option>
                  <option>Commercial</option>
                  <option>Renovation</option>
                  <option>Styling</option>
                </select>

                <select
                  className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
                  {...register('budget')}
                  aria-label="Budget"
                  defaultValue=""
                >
                  <option value="" disabled>Budget</option>
                  <option>$5k–$15k</option>
                  <option>$15k–$50k</option>
                  <option>$50k–$100k</option>
                  <option>$100k+</option>
                </select>
              </div>

              <textarea
                className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
                rows="5"
                placeholder="Tell us about your space…"
                {...register('message', { required: true })}
                aria-label="Message"
              />

              <button
                disabled={sending}
                className="rounded-xl px-5 py-3 bg-emerald-600 text-white font-medium hover:bg-emerald-700 transition-colors disabled:opacity-60"
              >
                {sending ? 'Sending…' : 'Send message'}
              </button>
            </form>

            <p className="mt-3 text-xs text-gray-500">
              By submitting, you agree to be contacted about your project. We never share your info.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
