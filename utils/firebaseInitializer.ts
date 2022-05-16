import { initializeApp, getApps } from 'firebase/app'
import { Envs } from '../types'
import { getAuth } from 'firebase/auth'

const app =
  getApps().length === 0
    ? initializeApp({
        apiKey: Envs.firebaseApiKey,
        authDomain: Envs.firebaseAuthDomain,
        projectId: Envs.firebaseProjectId,
      })
    : getApps()[0]

export const firebaseAuth = getAuth(app)
