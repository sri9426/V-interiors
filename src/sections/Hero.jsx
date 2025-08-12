import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export default function Hero(){
  return (
    <section className="relative">
      <img
        src="https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2400&auto=format&fit=crop"
        // src="images/homeimage1.jpg"
        alt="Interior hero"
        className="h-[70vh] w-full object-cover"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="absolute inset-0 flex items-center">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true}} transition={{duration:0.5}}
            className="text-white text-4xl md:text-6xl font-semibold max-w-3xl"
          >
            Design that feels like home.
          </motion.h1>
          <div className="mt-6 flex gap-4">
            <Link to="/projects" className="rounded-xl bg-white px-5 py-3">View projects</Link>
            <Link to="/book" className="rounded-xl bg-white/20 text-white px-5 py-3 border border-white/60">Book a consult</Link>
          </div>
        </div>
      </div>
    </section>
  )
}
