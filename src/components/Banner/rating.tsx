import { Star } from 'lucide-react'

export default function RatingBadge({ rating }: { rating: string }) {
  return (
    <div className="flex w-fit items-center gap-1.5 rounded-full border border-white/10 bg-black/40 px-3 py-1 backdrop-blur-md">
      <Star size={16} className="fill-amber-500" strokeWidth={0} />
      <span className="text-sm font-bold text-white">{rating}</span>
    </div>
  )
}
