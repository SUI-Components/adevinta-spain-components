import {NativeBiometric} from '@capgo/capacitor-native-biometric'

// Delete user's credentials
/* NativeBiometric.deleteCredentials({
  server: "www.example.com",
}).then(); */

export const isBiometricLoginAvailable = () => NativeBiometric.isAvailable()

export const getBiometricLoginCredentials = async ({
  domain,
  reason,
  title,
  subtitle,
  description
}) => {
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

export const setBiometricLoginCredentials = async ({
  username,
  password,
  domain
}) => {
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
