import type { NextPage } from 'next'
import { HeroImage, Navbar, Screen, SectionTitle, Title } from '../components'

const Home: NextPage = () => {
  return (
    <div className="h-full w-full bg-green-primary">
      <header className="fixed top-0 left-0 z-50 h-20 w-screen">
        <Navbar />
      </header>
      <main className="h-full font-display sm:px-6">
        <Screen>
          <Title />
          <HeroImage />
        </Screen>
        <Screen id="about">
          <SectionTitle>About</SectionTitle>
        </Screen>
        <Screen id="concerts">
          <SectionTitle>Concerts</SectionTitle>
        </Screen>
        <Screen id="contact">
          <SectionTitle>Contact</SectionTitle>
        </Screen>
      </main>
    </div>
  )
}

export default Home
