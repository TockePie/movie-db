import { TrendingItem } from '@/types/trending'

import MovieCard from '../ui/MovieCard'

export default function MovieList({ movies }: { movies: TrendingItem[] }) {
  return (
    <div className="flex gap-6 overflow-x-auto pb-4">
      {movies.map((movie) => {
        if (movie.media_type === 'person') return null

        return (
          <MovieCard
            key={movie.id}
            movieId={movie.id}
            title={'title' in movie ? movie.title : movie.name}
            rating={movie.vote_average}
            posterSrc={movie.poster_path}
          />
        )
      })}
    </div>
  )
}
