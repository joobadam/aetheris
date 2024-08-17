import { useState, useEffect } from 'react'


export function useSanityData<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        const result = await fetchFunction()
        setData(result)
        setIsLoading(false)
      } catch (err) {
        setError(err instanceof Error ? err : new Error('An error occurred'))
        setIsLoading(false)
      }
    }

    fetchData()
  }, [fetchFunction])

  return { data, isLoading, error }
}