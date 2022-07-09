import { useUIStore } from '../../../hooks/use-ui-store'

export const MenuIcon = () => {
  const { isNavOpen } = useUIStore()

  return (
    <div className="space-y-2 ">
      <div
        className={`duration-250 h-0.5 w-8  transform bg-dark transition ease-in-out ${
          isNavOpen && 'translate-y-2.5 rotate-45 bg-light'
        }`}
      />
      <div
        className={`duration-250 h-0.5 w-8  transform bg-dark transition ease-in-out ${
          isNavOpen && 'bg-light opacity-0'
        }`}
      />
      <div
        className={`duration-250 h-0.5 w-8  transform bg-dark transition ease-in-out ${
          isNavOpen && '-translate-y-2.5 -rotate-45 bg-light'
        }`}
      />
    </div>
  )
}
