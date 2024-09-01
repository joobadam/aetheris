import { useState, useEffect } from 'react'

const MAX_RETRIES = 3
const RETRY_DELAY = 1000 

export function useSanityData<T>(fetchFunction: () => Promise<T>) {
  const [data, setData] = useState<T | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    let retries = 0
    const fetchData = async () => {
      try {
        const result = await fetchFunction()
        setData(result)
        setIsLoading(false)
      } catch (err) {
        if (retries < MAX_RETRIES) {
          retries++
          setTimeout(fetchData, RETRY_DELAY * retries)
        } else {
          setError(err instanceof Error ? err : new Error('An error occurred'))
          setIsLoading(false)
        }
      }
    }

    fetchData()
  }, [fetchFunction])

  return { data, isLoading, error }
}