import { Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  posterSrc?: string
  title: string
  rating: string | number
  movieId: string | number
}

export default function MovieCard({
  posterSrc,
  title,
  rating,
  movieId
}: Props) {
  return (
    <div className="flex w-36 shrink-0 flex-col gap-1 rounded-md">
      <Link href={`/title/${movieId}`}>
        <Image
          src={`https://image.tmdb.org/t/p/w500${posterSrc}`}
          alt={title}
          width={144}
          height={216}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mN8/+ZNPQAIXwMwFByzGgAAAABJRU5ErkJggg=="
          className="rounded-md"
        />
      </Link>

      <div className="space-y-1 py-2">
        <div className="flex gap-2">
          <Star size={20} fill="var(--color-amber-500)" strokeWidth={0} />
          <span>{rating}</span>
        </div>
        <Link
          href={`/title/${movieId}`}
          className="text-md font-bold hover:underline"
        >
          {title}
        </Link>
      </div>
    </div>
  )
}
