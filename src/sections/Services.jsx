import React from 'react'
import { motion } from 'framer-motion'
import { LuLightbulb, LuRuler} from 'react-icons/lu'
import { FaHome } from "react-icons/fa"; 

const services = [
  { icon: <LuLightbulb />, title: 'Concept & Moodboarding', text: 'Ideas, palettes, materials and lighting studies.'},
  { icon: <LuRuler />, title: 'Planning & 3D', text: 'Space planning, 3D mockups, and working drawings.'},
  { icon: <FaHome />, title: 'Execution', text: 'Vendor coordination, site supervision, handover.'},
]

export default function Services(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-2xl font-semibold">Services</h2>
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.4, delay:i*0.05}}
            className="rounded-2xl border p-6"
          >
            <div className="text-2xl">{s.icon}</div>
            <div className="font-medium mt-3">{s.title}</div>
            <div className="text-gray-600 text-sm mt-2">{s.text}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
