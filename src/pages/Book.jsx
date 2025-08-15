import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

export default function Book() {
  const { register, handleSubmit, reset } = useForm()
  const [sending, setSending] = useState(false)

  const WEB3FORMS_KEY = '0ebf8948-da65-4952-aa42-a3803c0480da' // replace if needed

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
          // NEW fields
          budget: data.budget,
          client_name: data.clientName,
          location: data.location,
          apartment_size_sqft: data.apartmentSize || '',
          botcheck: data.botcheck || '' // honeypot
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
    <section className="max-w-7xl mx-auto px-4 py-12 ">
      <h1 className="text-3xl font-semibold mb-8">Book a Consultation</h1>

      {/* 2-column layout: form left, image right */}
      <div className="grid md:grid-cols-2 items-start gap-8 md:gap-12 lg:gap-16">

        {/* LEFT: FORM */}
        <form onSubmit={handleSubmit(onSubmit)} className="grid gap-4">
          {/* honeypot (hidden) */}
          <input
            type="text"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
            {...register('botcheck')}
          />

          {/* Name */}
          <input
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            placeholder="Name"
            {...register('name', { required: true })}
          />

          {/* Email */}
          <input
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            placeholder="Email"
            type="email"
            {...register('email', { required: true })}
          />

          <div className="grid gap-4 sm:grid-cols-2">
             {/* NEW: Budget */}
            <select
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            
            defaultValue=""
            {...register('budget', { required: true })}
          >
            <option value="" disabled>Budget</option>
            <option>Under ₹1L</option>
            <option>₹1L – ₹3L</option>
            <option>₹3L – ₹5L</option>
            <option>₹5L – ₹10L</option>
            <option>₹10L+</option>
          </select>

          
          {/* Preferred date */}
          <input
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            placeholder="Preferred date"
            type="date"
            {...register('date', { required: true })}
          />
          </div>
         
          

          {/* NEW: Apartment / Individual Name */}
          <input
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            placeholder="Apartment / Individual Name"
            {...register('clientName', { required: true })}
          />

          {/* NEW: Location */}
          <input
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            placeholder="Location (City / Area)"
            {...register('location', { required: true })}
          />

        <div className="grid gap-4 sm:grid-cols-2">
          {/* NEW: Apartment size (sq ft) */}
          <input
            className="border rounded-xl p-3 outline-none focus:ring-2 focus:ring-emerald-500/60"
            placeholder="Apartment size (sq ft)"
            type="number"
            min="0"
            {...register('apartmentSize')}
          />

          {/* Service */}
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
        </div>
          

          {/* Notes */}
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

          <p className="mt-1 text-xs text-gray-500">
            We’ll confirm your slot by email within 1–2 business days.
          </p>
        </form>

        {/* RIGHT: IMAGE */}
        {/* <div className="relative">
          <img
            src="/images/Vlogo.jpg"     
            alt="Consultation booking"
           className="w-full h-56 sm:h-72 md:h-96 lg:h-[32rem] object-cover object-top rounded-2xl "
          />
        </div> */}

        {/* RIGHT: IMAGE */}
{/* RIGHT: IMAGE */}
{/* <div className="relative mt-12 md:mt-0 md:pl-16 lg:pl-24"> */}
  <div className="relative hidden md:block md:pl-16 lg:pl-24">
  
  <img
    src="/images/Vlogo.jpg"
    alt="Consultation booking"
    className="w-full h-56 sm:h-72 md:h-96 lg:h-[32rem] object-cover object-top rounded-2xl"
  />
</div>


      </div>
    </section>
  )
}
