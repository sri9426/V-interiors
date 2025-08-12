import React from 'react'

const imgs = [
  'https://images.unsplash.com/photo-1663811397236-731fb210c817?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJlZHJvb20lMjBkZXNpZ258ZW58MHx8MHx8fDA%3D',
  'https://plus.unsplash.com/premium_photo-1686090448301-4c453ee74718?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmVzdGF1cmFudCUyMGNvdW50ZXJ8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW50ZXJpb3J8ZW58MHx8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1549187774-b4e9b0445b41',
  'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267',
  'https://plus.unsplash.com/premium_photo-1661768390422-b0ea5e89c41e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8bW9kZXJuJTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D'
]

export default function Gallery(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Gallery</h2>
      <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {imgs.map((src, i) => (
          <img key={i} src={`${src}?auto=format&fit=crop&w=900&q=80`} alt="" loading="lazy" className="rounded-2xl h-56 w-full object-cover" />
        ))}
      </div>
    </section>
  )
}


