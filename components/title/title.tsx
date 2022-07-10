import { ReactNode } from 'react'

export const Title = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="dark-shadow z-10 col-span-12 text-center text-6xl font-semibold text-light lg:col-start-8 lg:text-left lg:text-8xl">
      {children}
    </h1>
  )
}
