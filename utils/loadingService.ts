import { useState } from 'react'

export const loadingService = (
  outputIsLoading: (isLoading: boolean) => void
) => {
  const [loading, setLoading] = useState(false)
  const startLoading = () => {
    setLoading(true)
    outputIsLoading(true)
  }

  const stopLoading = () => {
    setLoading(false)
    outputIsLoading(false)
  }
  return {
    loading,
    startLoading,
    stopLoading,
  }
}
