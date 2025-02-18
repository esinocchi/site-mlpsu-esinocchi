'use client'

import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import { FaDiscord, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <Section id="contact">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-8">
          Get in Touch
        </h2>
        <p className="text-lg text-gray-600 mb-8">
          Have questions or want to get involved? Reach out to us through Discord or email.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button
            variant="default"
            size="lg"
            onClick={() => window.open('https://discord.gg/mlpsu', '_blank')}
            className="inline-flex items-center"
          >
            <FaDiscord className="mr-2" size={20} />
            Join our Discord
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            onClick={() => window.open('mailto:contact@mlpsu.org')}
            className="inline-flex items-center"
          >
            <FaEnvelope className="mr-2" size={20} />
            Email Us
          </Button>
        </div>
      </div>
    </Section>
  )
} 