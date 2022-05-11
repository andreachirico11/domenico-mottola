import { useState } from 'react'
import { ButtonE, InputE } from '../../types'
import { TextInput } from '../text-input'

export const LoginForm = () => {
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

  const handleSubmit = (e: ButtonE) => {
    e.preventDefault()
    // add validation
    setValidationError({ email: true, password: true })
    console.log(loginForm)
  }

  return (
    <div className="flex w-96 flex-col space-y-4 rounded-md bg-white p-8 shadow-md">
      <TextInput
        value={loginForm.email}
        label="Your email"
        type="email"
        handleChange={handleChange}
        error={validationError.email}
      />
      <TextInput
        value={loginForm.password}
        label="Your password"
        type="password"
        handleChange={handleChange}
        error={validationError.password}
      />
      <button
        className="rounded-md bg-green-200 py-2 hover:bg-green-300"
        onClick={handleSubmit}
      >
        Login
      </button>
    </div>
  )
}
