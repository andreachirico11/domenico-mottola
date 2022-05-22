import { useState, useMemo, useContext, createContext, useEffect } from 'react'
import { firebaseAuth } from '../utils'
import {
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  User,
} from 'firebase/auth'
import { useRouter } from 'next/router'

interface AuthProps {
  user: User | null
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
}

const AuthContext = createContext<AuthProps>({
  user: null,
  login: async () => {},
  logout: async () => {},
})

interface AuthProviderProps {
  children: React.ReactNode
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const router = useRouter()
  const [user, setUser] = useState<User | null>(null)

  useEffect(
    () =>
      onAuthStateChanged(firebaseAuth, (user) => {
        if (user) {
          setUser(user)
        } else {
          setUser(null)
          router.push('/login')
        }
      }),
    [firebaseAuth]
  )

  const login = async (email: string, password: string) => {
    await signInWithEmailAndPassword(firebaseAuth, email, password).then(
      (userCredential) => {
        setUser(userCredential.user)
        router.push('/admin')
      }
    )
  }

  const logout = async () => {
    signOut(firebaseAuth).then(() => {
      setUser(null)
    })
  }

  const memoedValue = useMemo(() => ({ user, login, logout }), [user])
  return (
    <AuthContext.Provider value={memoedValue}>{children}</AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
