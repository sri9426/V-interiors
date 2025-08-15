// WhatsAppButton.jsx
import React from "react"

export default function WhatsappCircleButton({
  phone = "918639847395", // E.164 without "+"
  text = "Hi! I’m interested in an interior design consultation.",
  size = 56,              // diameter in px (circle)
  bottom = 16,            // distance from bottom in px
  right = 16,             // distance from right in px
  pulse = true            // turn the soft pulse ring on/off
}) {
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
  const px = (n) => `${n}px`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed z-50 rounded-full bg-emerald-600 text-white shadow-lg
                 hover:bg-emerald-700 active:scale-95 transition-transform duration-150
                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2"
      style={{
        width: px(size),
        height: px(size),
        bottom: `calc(${px(bottom)} + env(safe-area-inset-bottom, 0px))`,
        right: px(right)
      }}
    >
      {/* soft pulsing ring */}
      {pulse && (
        <span className="absolute inset-0 rounded-full bg-emerald-500/40 animate-ping" />
      )}

      {/* icon centered */}
      <span className="relative grid h-full w-full place-items-center">
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className="w-6 h-6">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.14 1.59 5.95L0 24l6.2-1.63A11.9 11.9 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52ZM12 21.5c-2 0-3.95-.54-5.64-1.56l-.4-.24-3.72.98.99-3.63-.26-.43A9.46 9.46 0 1 1 21.5 12 9.5 9.5 0  0 1 12 21.5Zm5.48-7.12c-.3-.15-1.77-.87-2.05-.97-.28-.1-.48-.15-.69.15-.2.3-.79.97-.96 1.17-.18.2-.36.23-.66.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.68-2.08-.18-.3-.02-.47.13-.62.14-.14.3-.36.45-.54.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.69-1.64-.95-2.24-.25-.6-.5-.51-.69-.52l-.59-.01c-.2 0-.53.08-.81.38-.28.3-1.07 1.05-1.07 2.55 0 1.5 1.1 2.95 1.26 3.15.15.2 2.17 3.32 5.26 4.66.74.32 1.31.5 1.76.64.74.24 1.41.21 1.94.13.59-.09 1.77-.72 2.02-1.41.25-.69.25-1.28.18-1.41-.07-.13-.26-.2-.56-.35Z"/>
        </svg>
        <span className="sr-only">WhatsApp</span>
      </span>
    </a>
  )
}
