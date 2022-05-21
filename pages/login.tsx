import type { NextPage } from 'next'
import { LoginForm } from '../components'
import { Loading } from '../components/loading-spinner'

const Login: NextPage = () => {
  return (
    <>
      <div className="grid w-screen h-screen place-content-center bg-stone-100">
        <LoginForm />
      </div>
    </>
  )
}

export default Login
