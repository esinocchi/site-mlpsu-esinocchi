'use client'

import { useInView } from '@/hooks/useInView'
import { motion } from 'framer-motion'

interface SectionProps {
  id: string
  className?: string
  children: React.ReactNode
}

export default function Section({ id, className = '', children }: SectionProps) {
  const [ref, isInView] = useInView({ threshold: 0.1 })

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`min-h-screen py-16 scroll-mt-16 bg-background text-foreground ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.section>
  )
} 