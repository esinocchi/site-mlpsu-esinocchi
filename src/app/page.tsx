import { Metadata } from 'next'
import Header from '@/components/Header'
import Introduction from '@/components/sections/Introduction'
import CurrentHighlights from '@/components/sections/CurrentHighlights'
import AboutUs from '@/components/sections/AboutUs'
import Events from '@/components/sections/Events'
import Participation from '@/components/sections/Participation'
import OurTeam from '@/components/sections/OurTeam'
import Contact from '@/components/sections/Contact'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: 'MLPSU - Machine Learning @ Penn State University',
  description: 'Machine Learning community at Penn State University',
}

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Introduction />
        <CurrentHighlights />
        <AboutUs />
        <Events />
        <Participation />
        <OurTeam />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}
