import SpeakerClient from './speaker-client'
import { speakers } from '../speakersData'

export async function generateStaticParams() {
  return speakers.map((speaker) => ({
    slug: speaker.slug,
  }))
}

export async function generateMetadata({ 
  params 
}: { 
  params: { slug: string } 
}) {
  const speaker = speakers.find(s => s.slug === params.slug)
  if (!speaker) {
    return {
      title: 'Speaker Not Found | ML@PSU',
      description: 'This speaker could not be found.',
    }
  }
  return {
    title: `${speaker.name} | ML@PSU Speaker Series`,
    description: `Learn about ${speaker.name}'s talk at ML@PSU.`,
  }
}

export default function Page({ params }: { params: { slug: string } }) {
  const speaker = speakers.find(s => s.slug === params.slug)
  if (!speaker) return <div>Speaker not found</div>
  return <SpeakerClient speaker={speaker} />
}