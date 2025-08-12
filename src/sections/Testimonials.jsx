import React from 'react'

const quotes = [
  { name: 'Ananya R.', text: 'They turned our cluttered flat into a calm haven. Timelines were on point!' },
  { name: 'Marcus L.', text: 'Communication was great, materials were top-notch. Would hire again.' },
]

export default function Testimonials(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Testimonials</h2>
      <div className="grid md:grid-cols-2 gap-6 mt-6">
        {quotes.map(q => (
          <blockquote key={q.name} className="rounded-2xl border p-6">
            <p>“{q.text}”</p>
            <footer className="text-sm text-gray-500 mt-3">— {q.name}</footer>
          </blockquote>
        ))}
      </div>
    </section>
  )
}
