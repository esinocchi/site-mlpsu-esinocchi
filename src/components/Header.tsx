'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const navigation = [
  { name: 'About', href: '#about' },
  { name: 'Events', href: '#events' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [activeSection, setActiveSection] = useState('')
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[id]')
      const scrollPosition = window.scrollY + window.innerHeight / 3

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = section.clientHeight
        const sectionId = section.getAttribute('id')

        if (
          scrollPosition >= sectionTop &&
          scrollPosition < sectionTop + sectionHeight
        ) {
          setActiveSection(`#${sectionId}`)
        }
      })
    }

    handleScroll() // Call once on mount to set initial active section
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const closeMenuOnScroll = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', closeMenuOnScroll)
    return () => window.removeEventListener('scroll', closeMenuOnScroll)
  }, [isMenuOpen])

  return (
    <>
      <div className="scrolling-container">
        <div className="scrolling-text">
          Is consciousness computable? Can AI feel love? What are machine dreams made of? Do neural nets have memories? Are they conscious?
        </div>
      </div>
      <header className="fixed top-12 z-50 w-full bg-black/80 backdrop-blur-md">
        <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="MLPSU Logo"
                  width={32}
                  height={32}
                  className="w-8 h-8"
                  priority
                />
                <span className="font-pixel text-2xl text-primary">ml@psu</span>
              </Link>
            </div>
            
            {/* Desktop navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-pixel text-sm transition-all hover-glow ${
                      activeSection === item.href
                        ? 'text-primary'
                        : 'text-gray-light'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: 'smooth' })
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-900 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <span className="sr-only">Open main menu</span>
                {/* Icon for menu button */}
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                >
                  {isMenuOpen ? (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  ) : (
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile menu */}
          {isMenuOpen && (
            <div className="md:hidden" id="mobile-menu">
              <div className="space-y-1 px-2 pb-3 pt-2 bg-gray-dark">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`block px-3 py-2 font-pixel text-sm transition-all hover-glow ${
                      activeSection === item.href
                        ? 'text-primary'
                        : 'text-gray-light'
                    }`}
                    onClick={(e) => {
                      e.preventDefault()
                      document
                        .querySelector(item.href)
                        ?.scrollIntoView({ behavior: 'smooth' })
                      setIsMenuOpen(false)
                    }}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </nav>
      </header>
    </>
  )
} 