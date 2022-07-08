import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  PreviewData,
} from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { HeroImage, Navbar, Screen, Title } from '../components'

const Home: NextPage = () => {
  const { t } = useTranslation('index')

  return (
    <div className="w-full h-full bg-green-primary">
      <header className="fixed top-0 left-0 z-50 w-full h-19 ">
        <Navbar t={t} />
      </header>
      <main className="h-full font-display sm:px-6">
        <Screen>
          <Title t={t} />
          <HeroImage />
        </Screen>
        <Screen id="about">
          <h4 className="capitalize">{t('navbar.About')}</h4>
        </Screen>
        <Screen id="concerts">
          <h4 className="capitalize">{t('navbar.Concerts')}</h4>
        </Screen>
        <Screen id="contact">
          <h4 className="capitalize">{t('navbar.Contact')}</h4>
        </Screen>
      </main>
    </div>
  )
}

export default Home

export const getServerSideProps: GetServerSideProps = async (
  props: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  return {
    props: {
      ...(await serverSideTranslations(
        props.locale || props.defaultLocale || 'en',
        ['index'],
        {
          i18n: {
            defaultLocale: 'en',
            locales: ['en'],
          },
        }
      )),
    },
  }
}
