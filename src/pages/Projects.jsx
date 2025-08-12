import React from 'react'
import { motion } from 'framer-motion'

const data = [
  // Image items (unchanged)
  { id: 1, type: 'image', title: 'Minimalist Kitchen', img: 'https://images.unsplash.com/photo-1617228069096-4638a7ffc906?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGtpdGNoZW58ZW58MHx8MHx8fDA%3D', tags: ['Kitchen','Renovation']},
  { id: 2, type: 'image', title: 'Scandinavian Living', img: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHNjYW5kaW5hdmlhbiUyMGludGVyaW9yfGVufDB8fDB8fHww', tags: ['Living Room','Styling']},
  { id: 3, type: 'image', title: 'Modern Bedroom', img: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85', tags: ['Bedroom','Makeover']},

  // 🔽 Your previous project videos
  // YouTube example
  { id: 4, type: 'video', title: 'Kitchen Remodel Walkthrough', video: { mp4: '/videos/Kitchen.mp4', poster: '' }, tags: ['Kitchen','Walkthrough']},

  // MP4 example (put file in /public/videos and update path)
  { id: 5, type: 'video', title: 'Scandi Living Tour', video: { mp4: '/videos/Home.mp4', poster: '' }, tags: ['Living Room','Tour']},

  // Another YouTube example
  { id: 6, type: 'video', title: 'Bedroom Makeover Time-lapse', video: { mp4: '/videos/Bedroom.mp4', poster: '' }, tags: ['Bedroom','Timelapse']},
]

function YouTubeEmbed({ id, title }) {
  const src = `https://www.youtube.com/embed/${id}?rel=0&modestbranding=1`
  return (
    <iframe
      title={title}
      src={src}
      loading="lazy"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen
      className="absolute inset-0 h-full w-full rounded-t-2xl"
    />
  )
}

function MP4Player({ src, poster, title }) {
  return (
    <video
      controls
      preload="metadata"
      poster={poster ? `${poster}?auto=format&fit=crop&w=900&q=80` : undefined}
      className="absolute inset-0 h-full w-full rounded-t-2xl object-cover"
      title={title}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  )
}

function Media({ item }) {
  return (
    <div className="relative w-full overflow-hidden rounded-t-2xl" style={{ paddingTop: '56.25%' }}>
      {item.type === 'image' && (
        <img
          src={`${item.img}?auto=format&fit=crop&w=1200&q=80`}
          alt={item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
      {item.type === 'video' && item.video?.youtubeId && (
        <YouTubeEmbed id={item.video.youtubeId} title={item.title} />
      )}
      {item.type === 'video' && item.video?.mp4 && (
        <MP4Player src={item.video.mp4} poster={item.video.poster} title={item.title} />
      )}
    </div>
  )
}

export default function Projects(){
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-semibold mb-6">Projects</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data.map((p, i) => (
          <motion.article
            key={p.id}
            initial={{opacity:0, y:20}}
            whileInView={{opacity:1, y:0}}
            viewport={{once:true}}
            transition={{duration:0.4, delay:i*0.05}}
            className="rounded-2xl overflow-hidden border"
          >
            <Media item={p} />
            <div className="p-4">
              <h3 className="font-medium">{p.title}</h3>
              <div className="text-xs text-gray-500 mt-1">{p.tags.join(' · ')}</div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}
