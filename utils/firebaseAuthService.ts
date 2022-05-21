import { useState } from 'react'
import FirebaseUser from '../types/FIrebaseUser'
import { firebaseAuth } from './firebaseInitializer'
import { signInWithEmailAndPassword, UserCredential } from 'firebase/auth'
import { useLoadingCtx } from '../context/LoadingContext'

export default function useFirebaseAuth() {
  const [loggedUser, setLoggedUser] = useState<FirebaseUser | null>(null)
  const { startLoading, stopLoading } = useLoadingCtx()

  const login = async (userEmail: string, password: string) => {
    startLoading()
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
    stopLoading()
    return
  }

  return {
    loggedUser,
    login,
  }
}
