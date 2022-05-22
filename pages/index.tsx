import type { NextPage } from 'next'
import Head from 'next/head'
import { Title } from '../components'

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

export default Home
