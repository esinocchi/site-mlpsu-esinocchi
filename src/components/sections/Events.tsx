'use client'

import { useEffect, useState } from 'react'
import Section from '@/components/ui/Section'
import Button from '@/components/ui/Button'
import Image from 'next/image'

interface LumaEvent {
  name: string
  start_at: string
  cover_url: string
  description: string
  url: string
}

export default function Events() {
  const [events, setEvents] = useState<LumaEvent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch('https://api.lu.ma/v1/organization/mlpsu/events')
        if (!res.ok) throw new Error('Failed to fetch events')
        const data = await res.json()
        setEvents(data.events || [])
      } catch (err) {
        setError('Unable to load events. Please try again later.')
        console.error('Error fetching events:', err)
      } finally {
        setLoading(false)
      }
    }

    fetchEvents()
  }, [])

  return (
    <Section id="events">
      <div className="text-center mb-12">
        <h2 className="font-pixel text-3xl mb-4 text-primary">
          Upcoming Events
        </h2>
        <p className="text-gray-light text-lg">
          Join us for our upcoming workshops and presentations
        </p>
      </div>

      {loading ? (
        <div className="flex justify-center items-center min-h-[200px]">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary" />
        </div>
      ) : error ? (
        <div className="text-center text-primary">{error}</div>
      ) : events.length === 0 ? (
        <div className="text-center text-gray-light">
          No upcoming events. Check back soon!
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-gray-dark border border-primary/20 rounded-none overflow-hidden hover:border-primary transition-colors duration-300"
            >
              {event.cover_url && (
                <div className="relative h-48">
                  <Image
                    src={event.cover_url}
                    alt={event.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="p-6">
                <h3 className="font-pixel text-lg text-primary mb-2">
                  {event.name}
                </h3>
                <p className="text-gray-light mb-4">
                  {new Date(event.start_at).toLocaleDateString('en-US', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                    hour: 'numeric',
                    minute: 'numeric',
                  })}
                </p>
                <Button
                  variant="outline"
                  size="default"
                  onClick={() => window.open(event.url, '_blank')}
                >
                  Register on Lu.ma
                </Button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="text-center mt-12">
        <Button
          variant="ghost"
          size="lg"
          onClick={() => window.open('https://lu.ma/mlpsu', '_blank')}
        >
          View All Events
        </Button>
      </div>
    </Section>
  )
} 