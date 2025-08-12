import React from 'react'

const steps = [
  { title: 'Consult', text: 'We understand your needs, style, and budget.'},
  { title: 'Design', text: 'Concepts, materials, and 3D renders.'},
  { title: 'Build', text: 'Vendor coordination and execution.'},
  { title: 'Handover', text: 'Final styling and walkthrough.'},
]

export default function Process(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Our Process</h2>
      <ol className="mt-6 grid md:grid-cols-4 gap-4">
        {steps.map((s, i) => (
          <li key={s.title} className="rounded-2xl border p-4">
            <div className="text-sm text-gray-500">Step {i+1}</div>
            <div className="font-medium">{s.title}</div>
            <div className="text-gray-600 text-sm mt-1">{s.text}</div>
          </li>
        ))}
      </ol>
    </section>
  )
}
