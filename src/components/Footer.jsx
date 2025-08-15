import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin, FaWhatsapp } from 'react-icons/fa'

export default function Footer(){
  return (
    <footer className="mt-auto border-t">
      <div className="max-w-7xl mx-auto px-4 py-8 text-sm grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {/* Brand */}
        <div>
          <div className="font-semibold">V Interior's</div>
          <p className="text-gray-600 mt-2">
            Bespoke interior design, renovations, and styling.
          </p>
        </div>

        {/* Contact */}
        <div>
          <div className="font-semibold">Contact</div>
          <p className="text-gray-600 mt-2">
            <a href="mailto:Vinteriors31@gmail.com" className="hover:underline">
              Vinteriors31@gmail.com
            </a><br/>
            <a href="tel:+918639847395" className="hover:underline">
              +91 863-984-7395
            </a>
          </p>
        </div>

        {/* Office */}
        <div>
          <div className="font-semibold">Visit Our Office</div>
          <p className="text-gray-600 mt-2">Shankarpally</p>
        </div>

        {/* Socials */}
        <div>
          <div className="font-semibold">Follow us on</div>
          <div className="mt-2 flex items-center gap-3">
            <a aria-label="Facebook" href="https://www.facebook.com/vinay.chokkarapu" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-blue-600 transition">
              <FaFacebook className="w-5 h-5" />
            </a>
            <a aria-label="Instagram" href="https://www.instagram.com/vinteriors_/" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-pink-600 transition">
              <FaInstagram className="w-5 h-5" />
            </a>
            <a aria-label="Pinterest" href="https://pinterest.com/yourpage" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-red-600 transition">
              <FaPinterest className="w-5 h-5" />
            </a>
            
            <a aria-label="WhatsApp" href="https://wa.me/918639847395" target="_blank" rel="noopener noreferrer"
               className="text-gray-500 hover:text-green-600 transition">
              <FaWhatsapp className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-gray-500 pb-6">
        © {new Date().getFullYear()} V-Interior. All rights reserved.
      </div>
    </footer>
  )
}
