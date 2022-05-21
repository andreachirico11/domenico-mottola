import type { NextPage } from 'next'
import Head from 'next/head'
import { Title } from '../components'

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Domenico Mottola | Official Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="items-center w-full text-center">
        <Title />
      </main>
    </div>
  )
}

export default Home
