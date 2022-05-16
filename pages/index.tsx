import type { NextPage } from 'next'
import { HeroImage, Navbar, Screen, Title } from '../components'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full bg-green-primary">
      <header className="h-19 fixed top-0 left-0 z-50 w-full ">
        <Navbar />
      </header>
      <main className="h-full font-display sm:px-6">
        <Screen>
          <Title />
          <HeroImage />
        </Screen>
        <Screen id="about">About</Screen>
        <Screen id="concerts">Concerts</Screen>
        <Screen id="contact">Contact</Screen>
      </main>
    </div>
  )
}

export default Home
