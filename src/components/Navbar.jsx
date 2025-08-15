import React from 'react'
import { Link, NavLink } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
        
        {/* Logo link */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/images/logo3D.svg" // <-- replace with your logo path (e.g., /images/logo.png)
            alt="V-Interior logo"
            className="h-14 w-14 object-contain"
          />
          
          {/* Optional: keep brand text next to logo */}
          <span className="font-semibold text-xl tracking-tight">V Interior's</span>
        </Link>

        <nav className="flex gap-6 text-sm">
          {['/', '/projects', '/about', '/contact', '/book'].map((path, i) => {
            const label = ['Home', 'Projects', 'About', 'Contact', 'Book'][i]
            return (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) =>
                  `hover:underline underline-offset-4 ${isActive ? 'font-semibold' : ''}`
                }
              >
                {label}
              </NavLink>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
