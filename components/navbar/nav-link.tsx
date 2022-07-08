import Link, { LinkProps } from 'next/link'
import { useRouter } from 'next/router'

type Props = LinkProps & {
  label: string
  textStyle: 'uppercase' | 'lowercase' | 'capitalize' | 'normal-case'
}

export const NavLink = ({ label, href, textStyle }: Props) => {
  const router = useRouter()
  const isActive = router.asPath === `/${href}`

  return (
    <li className="px-3 py-2 text-xl font-medium list-none hover:link-style">
      <Link href={href}>
        <a
          className={(isActive ? 'link-style underline' : '') + ' ' + textStyle}
        >
          {label}
        </a>
      </Link>
    </li>
  )
}
