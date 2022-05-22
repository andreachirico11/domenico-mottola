import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { AuthProvider } from '../hooks/useAuth'
import { GlobalProvider } from '../hooks/use-global-store'
import { UIProvider } from '../hooks/use-ui-store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <UIProvider>
          <Component {...pageProps} />
        </UIProvider>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default MyApp
