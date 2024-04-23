import * as biometric from './biometric.js'
import * as core from './core.js'
import * as liveUpdates from './liveUpdates.js'
import * as localNotifications from './localNotifications.js'

export default function SuiApp() {
  throw new Error('sui-app is a set of tools and is not intended to be renderized as a React component')
}

export {biometric, core, liveUpdates, localNotifications}
