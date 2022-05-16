import type { NextPage } from 'next'
import { useAuthCtx } from '../context/AuthUserContext'

const Admin: NextPage = () => {
  const { loggedUser } = useAuthCtx()
  return (
    <>
      <h1>admin page</h1>
      <p>{loggedUser?.email} logged in</p>
    </>
  )
}

export default Admin
