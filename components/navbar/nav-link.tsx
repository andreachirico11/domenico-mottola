import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = LinkProps & {
  label: string
}

export const NavLink = ({ label, href }: Props) => {
  const router = useRouter()
  const isActive = router.asPath === `/${href}`

  return (
    <li className="hover:link-style list-none py-2 px-3 text-xl font-medium">
      <Link href={href}>
        <a className={isActive ? 'link-style underline' : ''}>{label}</a>
      </Link>
    </li>
  )
}
