export interface TMDBTrendingResponse {
  page: number
  results: TrendingItem[]
  total_pages: number
  total_results: number
}

export type TrendingItem = TrendingMovie | TrendingTV | TrendingPerson

interface BaseItem {
  id: number
  adult: boolean
  backdrop_path?: string
  poster_path?: string
  genre_ids?: number[]
  popularity: number
  vote_average: number
  vote_count: number
  original_language: string
  overview: string
}

export interface TrendingMovie extends BaseItem {
  media_type: 'movie'
  title: string
  original_title: string
  release_date: string
  video: boolean
}

export interface TrendingTV extends BaseItem {
  media_type: 'tv'
  name: string
  original_name: string
  first_air_date: string
  origin_country: string[]
}

export interface TrendingPerson {
  id: number
  name: string
  original_name: string
  media_type: 'person'
  adult: boolean
  popularity: number
  gender: number
  known_for_department: string
  profile_path: string | null
  known_for?: (TrendingMovie | TrendingTV)[]
}
