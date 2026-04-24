import { cx } from 'class-variance-authority'
import { Play } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

import RatingBadge from './rating'

interface Props {
  backdropSrc: string
  title: string
  overview: string
  rating: string | number
  movieId: string | number
  mediaType: 'tv' | 'movie'
}

export default function Banner({
  title,
  rating,
  overview,
  backdropSrc,
  movieId,
  mediaType
}: Props) {
  return (
    <div className="group relative aspect-3/4 w-full overflow-hidden rounded-2xl border border-white/10 bg-zinc-900 sm:aspect-video md:aspect-21/9">
      <Image
        src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropSrc}`}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-700 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwMwFByzGgAAAABJRU5ErkJggg=="
      />

      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/60 to-transparent" />

      <div className="absolute bottom-0 flex w-full justify-end p-5 max-md:flex-col md:items-end md:justify-between md:p-12">
        <div className="flex flex-col gap-2 md:gap-4">
          <RatingBadge rating={Number(rating).toFixed(1)} />

          <Link
            href={`/${mediaType}/${movieId}`}
            className="w-fit text-2xl font-black tracking-tighter text-white sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {title}
          </Link>

          <p className="line-clamp-2 max-w-2xl text-sm text-zinc-300 md:line-clamp-3 md:text-lg">
            {overview}
          </p>
        </div>

        <button
          className={cx(
            'flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-white font-bold text-black duration-500 hover:bg-zinc-100',
            'mt-5 h-12 max-md:mb-4 sm:w-fit sm:px-8 md:mt-8'
          )}
        >
          <Play size={20} fill="black" />
          Play trailer
        </button>
      </div>
    </div>
  )
}
