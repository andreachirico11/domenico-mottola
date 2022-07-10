import { ReactNode } from 'react'

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <div className="absolute bottom-0 grid h-1/3 w-full grid-cols-12 grid-rows-2 gap-4 lg:h-1/2">
      {children}
    </div>
  )
}
