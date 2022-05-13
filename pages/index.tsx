import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Title } from '../components'
import { loadTranslation } from '../utils'

const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center">
      <Head>
        <title>Domenico Mottola | Official Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-full items-center text-center">
        <Title />
      </main>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const translation = (await loadTranslation(ctx.locale!))['messages']
  return {
    props: {
      translation,
    },
  }
}

export default Home
