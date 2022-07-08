import { TFunction } from 'next-i18next'
import { routes } from '../../utils'
import { NavLink } from './nav-link'

export const Navbar = ({ t }: { t: TFunction }) => {
  return (
    <nav className="p-4 bg-green-primary">
      <div className="justify-between hidden sm:flex">
        <NavLink href="/" label={t('navbar.Home')} textStyle="uppercase" />
        <ul className="flex">
          {routes.map(({ label, to }) => (
            <NavLink
              href={to}
              label={t('navbar.' + label)}
              key={label}
              textStyle="capitalize"
            />
          ))}
        </ul>
      </div>
    </nav>
  )
}
