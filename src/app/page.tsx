import ListWithTabs from '@/components/ListWithTabs'
import MovieList from '@/components/MovieList'
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
    day: <MovieList movies={dayData.results} />,
    week: <MovieList movies={weekData.results} />
  }

  return (
    <main className="mx-auto w-300 p-4">
      <div className="space-y-6">
        <h2 className="text-2xl font-bold">Trending</h2>

        <ListWithTabs options={options} views={views} />
      </div>
    </main>
  )
}
