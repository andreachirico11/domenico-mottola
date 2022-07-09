import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'
import { useUIDispatch } from '../../../hooks/use-ui-store'

type Props = LinkProps & {
  label: string
}

export const NavLink = ({ label, href }: Props) => {
  const router = useRouter()
  const isActive = router.asPath === `/${href}`
  const dispatch = useUIDispatch()

  return (
    <li
      onClick={() => dispatch({ type: 'closeNav' })}
      className="hover:link-style list-none py-2 px-3 text-center text-4xl font-medium sm:text-left sm:text-xl sm:first:flex-1"
    >
      <Link href={href}>
        <a className={isActive ? 'link-style underline' : ''}>{label}</a>
      </Link>
    </li>
  )
}
