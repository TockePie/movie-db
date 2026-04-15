import ListWithTabs from '@/components/ListWithTabs'
import HorizontalScroll from '@/components/ui/HorizontalScroll'
import MovieCard from '@/components/ui/MovieCard'
import { TMDBTrendingResponse } from '@/types/trending'
import apiFetch from '@/utils/api'

const options = [
  { value: 'day', label: 'Day' },
  { value: 'week', label: 'Week' }
]

export default async function Home() {
  const [dayData, weekData] = await Promise.all([
    apiFetch<TMDBTrendingResponse>('/trending/all/day'),
    apiFetch<TMDBTrendingResponse>('/trending/all/week')
  ])

  const views = {
    day: (
      <HorizontalScroll scrollStep={1160} className="gap-6">
        {dayData.results
          .filter((m) => m.media_type !== 'person')
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              title={'title' in movie ? movie.title : movie.name}
              rating={movie.vote_average}
              posterSrc={movie.poster_path}
            />
          ))}
      </HorizontalScroll>
    ),
    week: (
      <HorizontalScroll scrollStep={1160} className="gap-6">
        {weekData.results
          .filter((m) => m.media_type !== 'person')
          .map((movie) => (
            <MovieCard
              key={movie.id}
              movieId={movie.id}
              title={'title' in movie ? movie.title : movie.name}
              rating={movie.vote_average}
              posterSrc={movie.poster_path}
            />
          ))}
      </HorizontalScroll>
    )
  }

  return (
    <main className="mx-auto w-314 p-4">
      <ListWithTabs label="Trending" options={options} views={views} />
    </main>
  )
}
