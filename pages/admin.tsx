import type { NextPage } from 'next'
import { useAuth } from '../hooks/useAuth'

const Admin: NextPage = () => {
  const { user } = useAuth()
  return (
    <>
      <h1>admin page</h1>
      <p>{user?.email} logged in</p>
    </>
  )
}

export default Admin
