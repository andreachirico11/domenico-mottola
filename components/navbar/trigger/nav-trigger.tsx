import { MenuIcon } from './icon'

interface Props {
  onClick: () => void
}

export const NavTrigger = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="md:hidden">
      <MenuIcon />
    </button>
  )
}
