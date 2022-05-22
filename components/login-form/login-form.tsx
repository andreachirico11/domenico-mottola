import { useState } from 'react'
import { useGlobalDispatch, useGlobalStore } from '../../hooks/use-global-store'
import { useAuth } from '../../hooks/useAuth'
import { ButtonE, InputE } from '../../types'
import { Spinner } from '../spinner'
import { TextInput } from '../text-input'

export const LoginForm = () => {
  const { login } = useAuth()
  const { isLoading } = useGlobalStore()
  const dispatch = useGlobalDispatch()

  const [validationError, setValidationError] = useState({
    email: false,
    password: false,
  })
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  })

  const handleChange = (e: InputE) => {
    const { name, value } = e.currentTarget
    setLoginForm({ ...loginForm, [name]: value })
  }

  const handleSubmit = async (e: ButtonE) => {
    dispatch({ type: 'startLoader' })
    await login(loginForm.email, loginForm.password)
      .catch((error) => alert(error.message))
      .finally(() => dispatch({ type: 'stopLoader' }))
  }

  return (
    <div className="flex w-96 flex-col space-y-4 rounded-md bg-white p-8 shadow-md">
      <TextInput
        value={loginForm.email}
        label="Your email"
        type="email"
        handleChange={handleChange}
        error={validationError.email}
        disabled={isLoading}
      />
      <TextInput
        value={loginForm.password}
        label="Your password"
        type="password"
        handleChange={handleChange}
        error={validationError.password}
        disabled={isLoading}
      />
      {isLoading ? (
        <Spinner />
      ) : (
        <button
          disabled={isLoading}
          className="rounded-md bg-green-200 py-2 hover:bg-green-300"
          onClick={handleSubmit}
        >
          Login
        </button>
      )}
    </div>
  )
}
