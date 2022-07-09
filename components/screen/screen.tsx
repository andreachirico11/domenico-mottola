import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  id?: string
}

export const Screen = ({ children, id }: Props) => {
  return (
    <section id={id} className="relative min-h-screen overflow-x-hidden">
      {children}
    </section>
  )
}
