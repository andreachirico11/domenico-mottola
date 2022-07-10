import type { AppProps } from 'next/app'
import '../styles/globals.css'
import '@fontsource/poppins/400.css'
import '@fontsource/poppins/500.css'
import '@fontsource/poppins/600.css'
import '@fontsource/poppins/700.css'
import Head from 'next/head'
import { AuthProvider } from '../hooks/useAuth'
import { GlobalProvider } from '../hooks/use-global-store'
import { UIProvider } from '../hooks/use-ui-store'
import { Envs } from '../types/envs'
import { appWithTranslation } from 'next-i18next'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <GlobalProvider>
        <UIProvider>
          <Head>
            <title>Domenico Mottola | Official Website</title>
            <meta name="version" content={Envs.version} />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <Component {...pageProps} />
        </UIProvider>
      </GlobalProvider>
    </AuthProvider>
  )
}

export default appWithTranslation(MyApp)
