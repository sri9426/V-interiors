import React from 'react'
import { Link } from 'react-router-dom'

export default function CTA(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-16 text-center">
      <h2 className="text-3xl font-semibold">Ready to redesign your space?</h2>
      <p className="text-gray-600 mt-2">Book a free 15‑minute discovery call.</p>
      <Link to="/book" className="inline-block mt-6 rounded-xl bg-black text-white px-6 py-3">Book now</Link>
    </section>
  )
}
