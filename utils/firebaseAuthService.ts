import { useState } from 'react'
import IFirebaseUser from '../types/IFIrebaseUser'
import { firebaseAuth } from './firebaseInitializer'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'

export default function useFirebaseAuth() {
  const [loggedUser, setLoggedUser] = useState<IFirebaseUser | null>(null)
  const [loading, setLoading] = useState(false)

  const login = async (userEmail: string, password: string) => {
    setLoading(true)
    try {
      const response = await new Promise<UserCredential>((r) =>
        setTimeout(() => {
          r(signInWithEmailAndPassword(firebaseAuth, userEmail, password))
        }, 3000)
      )
      const { email, uid } = response.user
      if (email) {
        setLoggedUser({
          email,
          uid,
        })
      }
    } catch (error) {
      // error handling
    }
    setLoading(false)
    return
  }

  return {
    loggedUser,
    loading,
    login,
  }
}
