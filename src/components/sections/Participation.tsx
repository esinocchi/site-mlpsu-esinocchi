'use client'

import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'

const participationWays = [
  {
    title: 'Attend Workshops',
    description: 'Join our weekly workshops to learn about ML concepts and applications.',
  },
  {
    title: 'Join Projects',
    description: 'Collaborate with other members on real-world ML projects.',
  },
  {
    title: 'Present Your Work',
    description: 'Share your research or project with the community.',
  },
]

export default function Participation() {
  return (
    <Section id="participation">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          How to Participate
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          There are many ways to get involved with MLPSU
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {participationWays.map((way, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              {way.title}
            </h3>
            <p className="text-gray-600">{way.description}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <Button
          variant="default"
          size="lg"
          onClick={() => window.open('https://discord.gg/mlpsu', '_blank')}
        >
          Join Our Community
        </Button>
      </div>
    </Section>
  )
} 