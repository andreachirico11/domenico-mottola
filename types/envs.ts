export class Envs {
  static get firebaseApiKey() {
    return process.env.NEXT_PUBLIC_FIREBASE_PUBLIC_API_KEY!
  }

  static get firebaseAuthDomain() {
    return process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!
  }

  static get firebaseProjectId() {
    return process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!
  }

  static get version() {
    return process.env.NEXT_PUBLIC_VERSION
  }

  static get languages() {
    const lans = process.env.NEXT_PUBLIC_LANGUAGES!
    return lans ? lans.split(',') : ['en']
  }
}
