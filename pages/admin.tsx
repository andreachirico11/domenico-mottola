import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  PreviewData,
} from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { ConcertForm } from '../components/concert-form'
import { useAuth } from '../hooks/useAuth'

const Admin: NextPage = () => {
  const { user } = useAuth()
  const { t } = useTranslation('admin')
  return (
    <>
      <ConcertForm t={t}></ConcertForm>
    </>
  )
}

export default Admin

export const getServerSideProps: GetServerSideProps = async (
  props: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  return {
    props: {
      ...(await serverSideTranslations(
        props.locale || props.defaultLocale || 'en',
        ['admin'],
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
