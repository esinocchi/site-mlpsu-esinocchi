'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Mail, Linkedin } from 'lucide-react'
import { MotionDiv, fadeIn, stagger } from '@/components/motion'
import type { Speaker } from '../speakersData'

export default function SpeakerClient({ speaker }: { speaker: Speaker }) {
  const [footerOffset, setFooterOffset] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      const docHeight = document.documentElement.scrollHeight
      const remainingScroll = docHeight - (scrollPosition + windowHeight)
      const footerHeight = 64
      setFooterOffset(Math.max(0, Math.min(100, remainingScroll)))
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen bg-black relative pb-16">
      <MotionDiv 
        className="max-w-4xl mx-auto px-4 py-8 md:py-16"
        initial="hidden"
        animate="visible"
        variants={stagger}
      >
        {/* Navigation */}
        <MotionDiv 
          variants={fadeIn}
          className="flex flex-wrap justify-center items-center gap-4 md:gap-8 mb-12 pt-8 text-sm md:text-base"
        >
          <Link href="/" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            home <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
          <Link href="/about" className="hover:text-[#FA8072] transition-colors flex items-center gap-1">
            about <ArrowUpRight className="w-4 h-4 text-[#1E90FF]" />
          </Link>
        </MotionDiv>

        {/* Speaker Content */}
        <MotionDiv 
          className="space-y-12"
          variants={fadeIn}
        >
          {/* Speaker Image, Name, and Role */}
          <div className="flex items-center gap-8">
            <div className="relative w-32 h-32">
              <Image
                src={speaker.image}
                alt={speaker.name}
                fill
                className="rounded-full object-cover"
                priority
              />
            </div>
            <div className="space-y-2">
              <h1 className="text-4xl font-bold font-mono">{speaker.name}</h1>
              <p className="text-xl text-gray-400">{speaker.role}</p>
            </div>
          </div>

          {/* Talk Details */}
          <div className="space-y-8">
            <h2 className="text-2xl font-bold text-[#FA8072]">{speaker.talk.title}</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 leading-relaxed">
                {speaker.talk.summary}
              </p>
            </div>
          </div>

          {/* Speaker Links */}
          <div className="pt-8">
            <Link
              href={speaker.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg hover:text-[#FA8072] transition-colors flex items-center gap-1 justify-center"
            >
              Connect with {speaker.name.split(' ')[0]} <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionDiv>
      </MotionDiv>

      {/* Footer */}
      <div 
        className="fixed bottom-0 left-0 right-0 h-16 bg-zinc-900 flex items-center justify-between px-4" 
        style={{ transform: `translateY(${footerOffset}px)` }}
      >
        <Image
          src="/grey_logo.svg"
          alt="ML@PSU Logo"
          width={32}
          height={32}
          priority
        />
        <div className="flex items-center gap-8">
          <Link
            href="https://www.linkedin.com/company/machine-learning-penn-state/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FA8072] transition-colors"
          >
            <Linkedin className="w-6 h-6 text-zinc-400" />
          </Link>
          <Link
            href="mailto:machinelearningpennstate@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FA8072] transition-colors"
          >
            <Mail className="w-6 h-6 text-zinc-400" />
          </Link>
        </div>
      </div>
    </div>
  )
} 