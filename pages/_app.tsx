import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { initTranslation } from '../utils'
import { i18n } from '@lingui/core'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import { I18nProvider } from '@lingui/react'

initTranslation(i18n)

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter()
  const locale = router.locale || router.defaultLocale || 'en'
  const firstRender = useRef(true)

  if (pageProps.translation && firstRender.current) {
    i18n.load(locale, pageProps.translation)
    i18n.activate(locale)
    firstRender.current = false
  }
  return (
    <I18nProvider i18n={i18n}>
      <Component {...pageProps} />
    </I18nProvider>
  )
}

export default MyApp
