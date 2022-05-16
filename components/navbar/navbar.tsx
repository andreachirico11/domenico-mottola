import type { NextComponentType } from 'next'
import { routes } from '../../utils'
import { NavLink } from './nav-link'

export const Navbar: NextComponentType = () => {
  return (
    <nav className="bg-green-primary p-4">
      <div className="hidden justify-between sm:flex">
        <NavLink href="/" label="DOMENICO MOTTOLA" />
        <ul className="flex">
          {routes.map(({ label, to }) => (
            <NavLink href={to} label={label} key={label} />
          ))}
        </ul>
      </div>
    </nav>
  )
}
