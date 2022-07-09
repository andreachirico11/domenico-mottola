import { ReactNode } from 'react'
import { useUIStore } from '../../../hooks/use-ui-store'

interface Props {
  children: ReactNode
}

export const List = ({ children }: Props) => {
  const { isNavOpen } = useUIStore()
  return (
    <ul
      className={
        isNavOpen
          ? 'flex h-full flex-col justify-center space-y-8 bg-green-secondary'
          : 'hidden flex-row sm:flex'
      }
    >
      {children}
    </ul>
  )
}
