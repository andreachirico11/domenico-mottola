import { TFunction } from 'next-i18next'
import { useState } from 'react'
import { useGlobalDispatch, useGlobalStore } from '../../hooks/use-global-store'
import { useAuth } from '../../hooks/useAuth'
import { ButtonE, InputE } from '../../types'
import { Spinner } from '../spinner'
// import { TextInput } from '../form-input'

export const LoginForm = ({ t }: { t: TFunction }) => {
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
  return <></>

  // return (
  // <div className="flex flex-col p-8 space-y-4 bg-white rounded-md shadow-md w-96">
  //   <TextInput
  //     value={loginForm.email}
  //     label={t('form.email')}
  //     type="email"
  //     handleChange={handleChange}
  //     error={validationError.email}
  //     disabled={isLoading}
  //   />
  //   <TextInput
  //     value={loginForm.password}
  //     label={t('form.password')}
  //     type="password"
  //     handleChange={handleChange}
  //     error={validationError.password}
  //     disabled={isLoading}
  //   />
  //   {isLoading ? (
  //     <Spinner />
  //   ) : (
  //     <button
  //       disabled={isLoading}
  //       className="py-2 bg-green-200 rounded-md hover:bg-green-300"
  //       onClick={handleSubmit}
  //     >
  //       {t('form.btn_login')}
  //     </button>
  //   )}
  // </div>
  // )
}
