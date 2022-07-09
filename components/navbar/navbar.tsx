import type { NextComponentType } from 'next'
import { useUIDispatch, useUIStore } from '../../hooks/use-ui-store'
import { routes } from '../../utils'
import { NavLink } from './link'
import { List } from './list'
import { NavTrigger } from './trigger'

export const Navbar: NextComponentType = () => {
  const { isNavOpen } = useUIStore()
  const dispatch = useUIDispatch()

  const handleToggleNav = () => {
    dispatch({ type: 'toggleNav' })
  }

  return (
    <nav
      className={`p-4 ${
        isNavOpen ? 'h-screen bg-green-secondary' : 'bg-green-primary'
      }`}
    >
      <NavTrigger onClick={handleToggleNav} />
      <List>
        {routes.map(({ label, to }) => (
          <NavLink href={to} label={label} key={label} />
        ))}
      </List>
    </nav>
  )
}
