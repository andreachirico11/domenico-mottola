import { HeroImage, Navbar, Screen, SectionTitle, Title } from '../components'
import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  PreviewData,
} from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { CtaButton } from '../components/cta-button'
import { Heading } from '../components/heading'

const Home: NextPage = () => {
  const { t } = useTranslation('index')

  return (
    <div className="h-full w-full bg-green-primary">
      <header className="fixed top-0 left-0 z-50 h-20 w-screen">
        <Navbar t={t} />
      </header>
      <main className="h-full font-display sm:px-6">
        <Screen>
          <Heading>
            <Title>{t('main_title')}</Title>
            <CtaButton onClick={() => {}}>{t('cta_button')}</CtaButton>
          </Heading>
          <HeroImage />
        </Screen>
        <Screen id="about">
          <SectionTitle>{t('navbar.About')}</SectionTitle>
        </Screen>
        <Screen id="concerts">
          <SectionTitle>{t('navbar.Concerts')}</SectionTitle>
        </Screen>
        <Screen id="contact">
          <SectionTitle>{t('navbar.Contact')}</SectionTitle>
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
