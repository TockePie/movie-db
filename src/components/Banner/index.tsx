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
    <div className="group relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-zinc-900 shadow-2xl md:aspect-21/9">
      <Image
        src={`https://media.themoviedb.org/t/p/w1920_and_h800_multi_faces${backdropSrc}`}
        alt={title}
        fill
        priority
        className="object-cover transition-transform duration-500 group-hover:scale-105"
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwMwFByzGgAAAABJRU5ErkJggg=="
      />

      <div className="absolute inset-0 bg-linear-to-t from-zinc-950 via-zinc-950/40 to-transparent" />

      <div className="absolute bottom-0 flex w-full items-end justify-between p-6 md:p-12">
        <div className="flex flex-col gap-3">
          <RatingBadge rating={Number(rating).toFixed(1)} />

          <Link
            href={`/${mediaType}/${movieId}`}
            className="w-fit text-3xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl"
          >
            {title}
          </Link>

          <p className="line-clamp-3 max-w-2xl text-gray-200 md:text-lg">
            {overview}
          </p>
        </div>

        <button className="flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 font-bold text-black transition-colors hover:bg-zinc-200">
          <Play size={20} fill="black" />
          Play trailer
        </button>
      </div>
    </div>
  )
}
