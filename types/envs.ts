const addBase = (env: string) => {
  return process.env['NEXT_PUBLIC_' + env]
}

export class Envs {
  static get firebaseApiKey() {
    return addBase('FIREBASE_PUBLIC_API_KEY')
  }

  static get firebaseAuthDomain() {
    return addBase('FIREBASE_AUTH_DOMAIN')
  }

  static get firebaseProjectId() {
    return addBase('FIREBASE_PROJECT_ID')
  }

  static get version() {
    return addBase('VERSION')
  }

  static get languages() {
    const lans = addBase('LANGUAGES')
    console.log(lans.split(','))

    return lans ? lans.split(',') : ['en']
  }
}
