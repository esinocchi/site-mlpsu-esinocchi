'use client'

import NextImage from 'next/image'
import { useState } from 'react'

interface ProgressiveImageProps {
  src: string
  alt: string
  className?: string
  width?: number
  height?: number
  priority?: boolean
}

export default function ProgressiveImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
}: ProgressiveImageProps) {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div className={`relative overflow-hidden ${className}`}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={priority}
        className={`
          duration-700 ease-in-out
          ${isLoading ? 'scale-110 blur-lg' : 'scale-100 blur-0'}
        `}
        onLoadingComplete={() => setIsLoading(false)}
      />
    </div>
  )
} 