'use client'

import { cx } from 'class-variance-authority'
import { Children, useEffect, useState } from 'react'

export default function BannerCarousel({
  children
}: {
  children: React.ReactNode
}) {
  const [currentSlide, setCurrentSlide] = useState<number>(0)
  const [isSlidingPaused, setIsSlidingPaused] = useState<boolean>(false)

  const arrayChildren = Children.toArray(children)
  const totalSlides = arrayChildren.length

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isSlidingPaused) {
        setCurrentSlide((i) => (i + 1) % totalSlides)
      }
    }, 5000)

    return () => clearInterval(interval)
  }, [totalSlides, isSlidingPaused, currentSlide])

  return (
    <div
      className="group relative overflow-hidden"
      onMouseEnter={() => setIsSlidingPaused(true)}
      onMouseLeave={() => setIsSlidingPaused(false)}
    >
      {arrayChildren.map((child, index) => (
        <div
          key={index}
          className={cx(
            'transition-opacity duration-1000',
            index === currentSlide
              ? 'relative opacity-100'
              : 'pointer-events-none absolute inset-0 opacity-0'
          )}
        >
          {child}
        </div>
      ))}

      <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-5">
        {arrayChildren.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={cx(
              'relative h-1 w-5 cursor-pointer rounded-full transition-all',
              'after:absolute after:-inset-4 after:content-[""]',
              currentSlide === index ? 'scale-125 bg-white' : 'bg-white/50'
            )}
          />
        ))}
      </div>
    </div>
  )
}
