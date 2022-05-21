import { createContext, ReactNode, useContext } from 'react'
import { loadingService } from '../utils'

const loadingCtx = createContext<{
  loading: boolean
  startLoading: () => void
  stopLoading: () => void
}>({
  loading: false,
  startLoading: () => {},
  stopLoading: () => {},
})

interface Props {
  children: ReactNode
  isLoading: (trueOrFalse: boolean) => void
}

export const LoadingProvider = ({ children, isLoading }: Props) => {
  return (
    <loadingCtx.Provider value={loadingService(isLoading)}>
      {children}
    </loadingCtx.Provider>
  )
}

export const useLoadingCtx = () => useContext(loadingCtx)
