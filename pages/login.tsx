import type { NextPage } from 'next'
import { LoginForm } from '../components'

const Login: NextPage = () => {
  return (
    <div className="grid h-screen w-screen place-content-center bg-stone-100">
      <LoginForm />
    </div>
  )
}

export default Login
