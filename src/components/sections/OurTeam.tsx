'use client'

import Section from '@/components/ui/Section'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { FaLinkedin, FaEnvelope } from 'react-icons/fa'

const team = [
  {
    name: 'Pranav Karra',
    role: 'President',
    image: '/team/pranav.jpeg',
    linkedin: 'https://www.linkedin.com/in/pranav-karra/',
    email: 'pranav@psu.edu'
  },
  {
    name: 'Vanisha Gupta',
    role: 'Vice President',
    image: '/team/vanisha.jpeg',
    linkedin: 'https://www.linkedin.com/in/vanisha-gupta/',
    email: 'vanisha@psu.edu'
  },
  {
    name: 'Ian Yee',
    role: 'Treasurer',
    image: '/team/ian.jpg',
    linkedin: 'https://www.linkedin.com/in/ian-yee/',
    email: 'ian@psu.edu'
  },
  {
    name: 'Krishna Pagrut',
    role: 'Tech Lead',
    image: '/team/krishna.jpeg',
    linkedin: 'https://www.linkedin.com/in/krishna-pagrut/',
    email: 'krishna@psu.edu'
  },
  {
    name: 'Pihu Agarwal',
    role: 'Secretary',
    image: '/team/pihu.jpeg',
    linkedin: 'https://www.linkedin.com/in/pihu-agarwal/',
    email: 'pihu@psu.edu'
  },
  {
    name: 'Manit Garg',
    role: 'Event Planner',
    image: '/team/manit.jpeg',
    linkedin: 'https://www.linkedin.com/in/manit-garg/',
    email: 'manit@psu.edu'
  },
  {
    name: 'Evan Sinocchi',
    role: 'Software Engineer',
    image: '/team/evan.jpg',
    linkedin: 'https://www.linkedin.com/in/evan-sinocchi/',
    email: 'esinocchi@psu.edu'
  },
  {
    name: 'Dhruva Nagesh',
    role: 'Software Engineer',
    image: '/team/dhruvah.jpeg',
    linkedin: 'https://www.linkedin.com/in/dhruva-nagesh/',
    email: 'dhruva@psu.edu'
  },
  {
    name: 'Andre Marinak',
    role: 'Outreach Chair',
    image: '/team/andre.jpeg',
    linkedin: 'https://www.linkedin.com/in/andre-marinak/',
    email: 'andre@psu.edu'
  }
]

export default function OurTeam() {
  return (
    <Section id="team" className="section-spacing">
      <div className="content-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <h2 className="display-text font-pixel text-primary mb-4">
            Our Team
          </h2>
          <p className="body-text text-gray-light max-w-2xl mx-auto">
            A diverse group of students passionate about machine learning and its applications
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-x-8 gap-y-16">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-square mb-4 overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="relative">
                <motion.h3 
                  className="font-pixel text-sm text-primary mb-1 truncate"
                  whileHover={{ x: 10 }}
                >
                  {member.name}
                </motion.h3>
                <p className="text-gray-light text-xs mb-2">{member.role}</p>
                
                <div className="flex space-x-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-secondary transition-colors"
                    aria-label={`${member.name}'s LinkedIn profile`}
                    whileHover={{ y: -2 }}
                  >
                    <FaLinkedin size={16} />
                  </motion.a>
                  <motion.a
                    href={`mailto:${member.email}`}
                    className="text-gray-light hover:text-primary transition-colors"
                    aria-label={`Email ${member.name}`}
                    whileHover={{ y: -2 }}
                  >
                    <FaEnvelope size={16} />
                  </motion.a>
                </div>
              </div>

              <div className="absolute -inset-4 border border-primary/0 group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-24"
        >
          <a
            href="mailto:mlpsu@psu.edu"
            className="inline-flex items-center space-x-2 text-gray-light hover:text-primary transition-colors animated-underline"
          >
            <span className="font-pixel text-sm">Join Our Team</span>
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </Section>
  )
} 