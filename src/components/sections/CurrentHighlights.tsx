'use client'

import Section from '@/components/ui/Section'
import Image from 'next/image'
import { motion } from 'framer-motion'

const highlights = [
  {
    title: 'Past Speaker: Greg Feingold',
    description: 'Former ML Engineer at OpenAI, discussed large language models and their applications',
    image: '/speaker_photos/greg-feingold.jpeg',
    link: 'https://www.linkedin.com/in/gregoryfeingold/'
  },
  {
    title: 'Past Speaker: Marmick Chaudhori',
    description: 'Research Scientist at Meta AI, shared insights on computer vision and deep learning',
    image: '/team/marmick.jpeg',
    link: 'https://www.linkedin.com/in/marmick-chaudhori/'
  },
  {
    title: 'Weekly ML Workshops',
    description: 'Join our hands-on sessions covering fundamental and advanced ML concepts',
    image: '/images/workshop.png',
    link: '#events'
  }
]

export default function CurrentHighlights() {
  return (
    <Section id="highlights" className="section-spacing">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display-text font-pixel text-primary mb-4">
            Featured Speakers
          </h2>
          <p className="body-text text-gray-light">
            Learn from industry leaders and researchers
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <div className="group relative">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={highlight.image}
                    alt={highlight.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                </div>
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-pixel text-lg mb-2">{highlight.title}</h3>
                  <p className="text-gray-200 text-sm">{highlight.description}</p>
                  {highlight.link && (
                    <a
                      href={highlight.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block mt-4 text-primary hover:text-secondary transition-colors text-sm animated-underline"
                    >
                      Learn more →
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  )
} 