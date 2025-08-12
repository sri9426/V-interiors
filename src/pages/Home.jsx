import React from 'react'
import Hero from '../sections/Hero.jsx'
import Services from '../sections/Services.jsx'
import Gallery from '../sections/Gallery.jsx'
import Process from '../sections/Process.jsx'
import Testimonials from '../sections/Testimonials.jsx'
import CTA from '../sections/CTA.jsx'

export default function Home(){
  return (
    <main>
      <Hero />
      <Services />
      <Gallery />
      <Process />
      <Testimonials />
      <CTA />
      
    </main>
  )
}
