export const BASE_URL = 'https://api.themoviedb.org/3'

export default async function apiFetch<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}${endpoint}`, {
    headers: {
      accept: 'application/json',
      Authorization: `Bearer ${process.env.TMDB_API_TOKEN}`
    }
  })

  if (!res.ok) {
    const errorData = await res.json().catch(() => ({}))
    throw new Error(
      `API Error: ${res.status} - ${errorData.status_message || 'Unknown'}`
    )
  }

  return res.json()
}
