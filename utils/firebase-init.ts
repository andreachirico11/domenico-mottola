import { initializeApp, getApps, getApp } from 'firebase/app'
import { Envs } from '../types'
import { getAuth } from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'

const app =
  getApps().length === 0
    ? initializeApp({
        apiKey: Envs.firebaseApiKey,
        authDomain: Envs.firebaseAuthDomain,
        projectId: Envs.firebaseProjectId,
        databaseURL: Envs.firebaseDatabaseURL,
      })
    : getApp()

export const firebaseAuth = getAuth(app)

export const db = {
  concerts: collection(getFirestore(app), 'concerts'),
}
