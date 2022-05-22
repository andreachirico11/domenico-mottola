import { createContext, useContext } from 'react'
import { useFirebaseAuth } from '../utils'
import { FirebaseUser } from '../types'

const authUserCtx = createContext<{
  loggedUser: FirebaseUser | null
  login: (email: string, password: string) => Promise<void>
}>({
  loggedUser: null,
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
