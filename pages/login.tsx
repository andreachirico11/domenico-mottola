import type {
  GetServerSideProps,
  GetServerSidePropsContext,
  NextPage,
  PreviewData,
} from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { ParsedUrlQuery } from 'querystring'
import { LoginForm } from '../components'

const Login: NextPage = () => {
  const { t } = useTranslation('login')

  return (
    <div className="bg-stone-100 grid h-screen w-screen place-content-center">
      <LoginForm t={t} />
    </div>
  )
}

export default Login

export const getServerSideProps: GetServerSideProps = async (
  props: GetServerSidePropsContext<ParsedUrlQuery, PreviewData>
) => {
  return {
    props: {
      ...(await serverSideTranslations(
        props.locale || props.defaultLocale || 'en',
        ['login'],
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
