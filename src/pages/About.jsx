import React from "react";

export default function About() {
  return (
    <section className="max-w-7xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-3xl">
        <img
          // src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2400&auto=format&fit=crop"
          // src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=1600&q=80"
           src="images/homeimage1.jpg"
          alt="Warm modern interior with natural light"
          className="h-[340px] w-full object-cover sm:h-[420px]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
        <div className="absolute bottom-8 left-6 sm:left-10 max-w-2xl text-white">
          <span className="inline-flex items-center rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur">
            V Interior Studio
          </span>
          <h1 className="mt-3 text-3xl font-semibold sm:text-5xl">
            Spaces that feel natural—built to live in.
          </h1>
          <p className="mt-3 text-sm sm:text-base text-white/90">
            We craft warm, functional interiors by blending architecture, materials, and light—across homes,
            retail, and hospitality.
          </p>
        </div>
      </div>

      {/* Story */}
      <div className="mt-14 grid items-center gap-8 md:grid-cols-2">
        <div className="order-2 md:order-1">
          <h2 className="text-2xl font-semibold">Our Philosophy</h2>
          <p className="mt-3 text-gray-600">
            Every project begins with understanding your rhythm—how you live, host, rest, and work. We design
            for longevity: timeless palettes, tactile materials, and layouts that invite day-to-day ease.
          </p>
          <ul className="mt-6 grid gap-3 text-gray-700">
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Client-centric discovery and transparent collaboration.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Material honesty—wood, stone, and light as first principles.
            </li>
            <li className="flex items-start gap-3">
              <span className="mt-1 inline-block h-2 w-2 rounded-full bg-emerald-500" />
              Practicality first: durable, maintainable, and budget-aware.
            </li>
          </ul>

          {/* Stats */}
          <div className="mt-8 grid grid-cols-3 gap-4">
            {[
              { k: "120+", v: "Projects" },
              { k: "8+", v: "Years" },
              { k: "30+", v: "Vendors" },
            ].map((s) => (
              <div key={s.v} className="rounded-2xl border p-4 text-center">
                <div className="text-2xl font-semibold">{s.k}</div>
                <div className="text-xs text-gray-500">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1489171078254-c3365d6e359f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGludGVyaW9yJTIwaG91c2V8ZW58MHx8MHx8fDA%3D"
              alt="Minimal living space with soft textures"
              className="aspect-[4/3] w-full object-cover"
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5 rounded-3xl" />
          </div>
        </div>
      </div>

      {/* Mosaic */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold">Recent Atmospheres</h3>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
          {[
            "images/image_1.webp",
            "images/image_2.webp",
            "images/image_3.jpg",
            "images/image_4.webp",
            "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=1400&auto=format&fit=crop",
            "https://images.unsplash.com/photo-1501183638710-841dd1904471?q=80&w=1400&auto=format&fit=crop",
          ].map((src, i) => (
            <img
              key={i}
              src={src}
              alt={`Project snapshot ${i + 1}`}
              className="aspect-[4/3] w-full rounded-xl object-cover"
              loading="lazy"
            />
          ))}
        </div>
      </div>

      {/* Team */}
      <div className="mt-14">
        <h3 className="text-xl font-semibold">Team</h3>
        <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              name: "Vinay",
              role: "Principal Designer/ Execution",
              img: "images/Vinay.jpg",
            },
            // {
            //   name: "Srikanth ",
            //   role: "Project Architect",
            //   img: "images/sri_02.png",
            // },
            // {
            //   name: "Rajesh ",
            //   role: "Stylist & Procurement",
            //   img: "images/Rajesh.jpg",
            // },
          ].map((m) => (
            <div key={m.name} className="flex items-center gap-4 rounded-2xl border p-4">
              <img
                src={m.img}
                alt={m.name}
                className="h-14 w-14 rounded-full object-cover"
                loading="lazy"
              />
              <div>
                <div className="font-medium">{m.name}</div>
                <div className="text-sm text-gray-500">{m.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mt-14 rounded-3xl border bg-gradient-to-br from-emerald-50 to-white p-6 sm:p-10">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <h4 className="text-lg font-semibold">Let’s design your next chapter</h4>
            <p className="mt-1 text-gray-600">
              Book a discovery call to discuss scope, budget, and timelines. We’ll send a mood board within 72 hours.
            </p>
          </div>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-3 text-sm font-medium text-white shadow-sm hover:bg-emerald-700"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
