import React from 'react'
export default function Footer(){
  return (
    <footer className="mt-auto border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm grid md:grid-cols-3 gap-6">
        <div>
          <div className="font-semibold">V‑Interior</div>
          <p className="text-gray-600 mt-2">Bespoke interior design, renovations, and styling.</p>
        </div>
        <div>
          <div className="font-semibold">Contact</div>
          <p className="text-gray-600 mt-2">Vinteriors31@gmail.com<br/>+91 863-984-7395 </p>
        </div>
        <div>
          <div className="font-semibold">Visit Our Office</div>
          <p className="text-gray-600 mt-2">Shankarpally</p>
        </div>
      </div>
      <div className="text-center text-xs text-gray-500 pb-6">© {new Date().getFullYear()} V‑Interior. All rights reserved.</div>
    </footer>
  )
}
