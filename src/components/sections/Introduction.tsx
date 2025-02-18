'use client'

import Section from '@/components/ui/Section'
import { motion } from 'framer-motion'

export default function Introduction() {
  return (
    <Section id="intro" className="min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-16"
        >
          <h1 className="text-center">
            <span className="text-gray-800 dark:text-gray-200 font-pixel text-8xl md:text-[12rem] leading-none tracking-wider lowercase">
              ml@psu
            </span>
          </h1>
          
          <div className="max-w-2xl space-y-12">
            <p className="text-2xl text-gray-600 dark:text-white/80 font-serif leading-relaxed">
              "Enter future blurb"{' '}
            </p>

            <div className="flex flex-col sm:flex-row gap-6">
              <motion.a
                href="#events"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-primary text-background font-pixel text-sm transition-all hover:bg-secondary rounded-full w-fit"
              >
                JOIN US
              </motion.a>
              
              <motion.a
                href="https://discord.gg/mlpsu"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-primary text-primary font-pixel text-sm hover:bg-primary hover:text-background transition-all rounded-full w-fit"
              >
                BE A SPEAKER
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  )
} 