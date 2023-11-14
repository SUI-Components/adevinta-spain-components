export default function SuiApp() {
  throw new Error(
    'sui-app is a set of tools and is not intended to be renderized as a React component'
  )
}

export {
  isBiometricLoginAvailable,
  getBiometricLoginCredentials,
  setBiometricLoginCredentials
} from './biometric.js'
