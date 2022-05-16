import { createContext, useContext } from 'react'
import useFirebaseAuth from '../utils/firebaseAuthService'
import IFirebaseUser from '../types/IFIrebaseUser'

const authUserCtx = createContext<{
  loggedUser: IFirebaseUser | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
}>({
  loggedUser: null,
  loading: false,
  login: async () => {},
})

export function AuthProvider({ children }: { children: JSX.Element }) {
  return (
    <authUserCtx.Provider value={useFirebaseAuth()}>
      {children}
    </authUserCtx.Provider>
  )
}

export const useAuthCtx = () => useContext(authUserCtx)
