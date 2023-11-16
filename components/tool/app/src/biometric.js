import {NativeBiometric} from '@capgo/capacitor-native-biometric'

export const isAvailable = () => NativeBiometric.isAvailable()

export const getCredentials = async ({domain, reason, title, subtitle, description}) => {
  const biometrics = await NativeBiometric.isAvailable()

  if (!biometrics.isAvailable) return null

  const verified = await NativeBiometric.verifyIdentity({
    reason,
    title,
    subtitle,
    description
  })
    .then(() => true)
    .catch(() => false)

  if (!verified) return null

  const credentials = await NativeBiometric.getCredentials({
    server: domain
  })

  return credentials
}

export const setCredentials = async ({username, password, domain}) => {
  const biometrics = await NativeBiometric.isAvailable()

  if (!biometrics.isAvailable) return

  NativeBiometric.deleteCredentials({
    server: domain
  }).then()

  await NativeBiometric.setCredentials({
    username,
    password,
    server: domain
  }).then()
}
