import { ReactNode } from 'react'

interface Props {
  children: ReactNode
  onClick: () => void
}

export const CtaButton = ({ children, onClick }: Props) => {
  return (
    <button
      onClick={onClick}
      className="light-box-shadow z-10 col-span-8 col-start-3 h-16 bg-green-secondary text-2xl text-light hover:bg-dark active:translate-x-0.5 active:translate-y-0.5 active:shadow-none lg:col-span-4 lg:col-start-8 lg:mt-6"
    >
      {children}
    </button>
  )
}
