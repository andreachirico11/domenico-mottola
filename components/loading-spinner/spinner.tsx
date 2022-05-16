import type { NextComponentType } from 'next'
import { useAuthCtx } from '../../context/AuthUserContext'

export const Loading: NextComponentType = () => {
  const { loading } = useAuthCtx()
  return <>{loading && <p>loading..............</p>}</>
}
