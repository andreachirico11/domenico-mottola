import { createContext, useContext, useEffect, useState } from 'react'
import { loadingService } from '../utils/loadingService'

const loadingCtx = createContext<{
  loading: boolean
  startLoading: () => void
  stopLoading: () => void
}>({
  loading: false,
  startLoading: () => {},
  stopLoading: () => {},
})

export function LoadingProvider({
  children,
  isLoading,
}: {
  children: JSX.Element
  isLoading: (trueOrFalse: boolean) => void
}) {
  return (
    <loadingCtx.Provider value={loadingService(isLoading)}>
      {children}
    </loadingCtx.Provider>
  )
}

export const useLoadingCtx = () => useContext(loadingCtx)
