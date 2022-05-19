import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../context/AuthUserContext'
import { useEffect, useState } from 'react'
import { Loading } from '../components/loading-spinner'
import { LoadingProvider } from '../context/LoadingContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false)
  return (
    <>
      {isLoading && <Loading />}
      <LoadingProvider isLoading={setIsLoading}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </LoadingProvider>
    </>
  )
}

export default MyApp
