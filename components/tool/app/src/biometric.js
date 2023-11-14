import {NativeBiometric} from 'capacitor-native-biometric'

export const isBiometricLoginAvailable = () => NativeBiometric.isAvailable()

export const getBiometricLoginCredentials = async ({
  domain,
  reason,
  title,
  subtitle,
  description
}) => {
  const biometrics = await NativeBiometric.isAvailable()

  if (biometrics.isAvailable) {
    const credentials = await NativeBiometric.getCredentials({
      server: domain
    })

    await NativeBiometric.verifyIdentity({
      reason,
      title,
      subtitle,
      description
    })

    return credentials
  }

  return null
}

export const setBiometricLoginCredentials = async ({
  username,
  password,
  domain
}) => {
  await NativeBiometric.setCredentials({
    username,
    password,
    server: domain
  })
}
