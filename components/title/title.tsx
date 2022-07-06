import type { NextComponentType } from 'next'

export const Title: NextComponentType = () => {
  return (
    <div className="absolute bottom-0 grid h-1/3 w-full grid-cols-12 lg:h-1/2">
      <h1 className="dark-shadow z-10 col-span-12 text-center text-6xl font-semibold text-light lg:col-start-8 lg:text-left lg:text-8xl">
        DOMENICO MOTTOLA
      </h1>
    </div>
  )
}
