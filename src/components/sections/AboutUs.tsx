import Section from '@/components/ui/Section'

export default function AboutUs() {
  return (
    <Section id="about">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="font-pixel text-3xl mb-8 text-primary">
          About MLPSU
        </h2>
        <div className="space-y-8 text-lg text-gray-light">
          <p>
            We started this club because we wanted a place to meet other cool people interested in ML, invite interesting speakers, and get some funding to support members building awesome projects or attending conferences.
          </p>
          <p>
            We regularly hold events - sometimes it's a guest speaker sharing their work, other times it's casual workshops where we walk through cool ML concepts together. We've got a pretty active Discord server too, where we share everything from research papers to the latest AI news and tools.
          </p>
          <p>
            If you're motivated and curious about ML, we can help you out with resources like subscriptions, and maybe even take you along to conferences. We're all about supporting each other's learning journey!
          </p>
        </div>
      </div>
    </Section>
  )
} 