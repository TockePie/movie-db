'use client'

import { cx } from 'class-variance-authority'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { PropsWithChildren, useRef, useState } from 'react'

interface Props extends PropsWithChildren {
  className?: string
  scrollStep?: number
}

export default function HorizontalScroll({
  children,
  className,
  scrollStep = 600
}: Props) {
  const elementRef = useRef<HTMLDivElement>(null)
  const scrollTarget = useRef(0)
  const [arrowDisable, setArrowDisable] = useState(true)

  const handleHorizantalScroll = (distance: number) => {
    const element = elementRef.current
    if (!element) return

    let newTarget = scrollTarget.current + distance

    const maxScroll = element.scrollWidth - element.clientWidth
    newTarget = Math.max(0, Math.min(newTarget, maxScroll))

    scrollTarget.current = newTarget
    element.scrollTo({
      left: newTarget,
      behavior: 'smooth'
    })

    setArrowDisable(newTarget <= 0)
  }

  return (
    <div className="flex items-center gap-4 overflow-x-auto pb-4">
      <button
        className="size-4 rounded-lg bg-stone-100"
        onClick={() => {
          handleHorizantalScroll(-scrollStep)
        }}
        disabled={arrowDisable}
      >
        <ChevronLeft size={20} />
      </button>
      <div
        ref={elementRef}
        className={cx(className, 'flex overflow-x-auto scroll-smooth')}
      >
        {children}
      </div>
      <button
        onClick={() => {
          handleHorizantalScroll(scrollStep)
        }}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  )
}
