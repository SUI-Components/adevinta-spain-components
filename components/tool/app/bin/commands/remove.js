/* eslint-disable no-console */
// Constants
const {PACKAGE_NAME, PROJECT_CONFIG_FILE} = require('../infrastructure/config.js')

// Infra
//   -> files
const {
  getCurrentDirectory,
  removeFile,
  removeDirectory,
  reportError,
  uninstallPackage
} = require('../infrastructure/utils.js')

const removeProject = () => {
  removeFile(`${getCurrentDirectory()}/${PROJECT_CONFIG_FILE}`)
}

const removeAndroid = () => {
  removeDirectory(`${getCurrentDirectory()}/android`)
}

const removeIOS = () => {
  removeDirectory(`${getCurrentDirectory()}/ios`)
}

const uninstallSuiApp = () => {
  uninstallPackage(`${PACKAGE_NAME}`)
}

const uninstallPlugins = () => {
  uninstallPackage('@capgo/capacitor-native-biometric')
  uninstallPackage('@capacitor/local-notifications')
  uninstallPackage('@capgo/capacitor-updater')
  uninstallPackage('@capacitor/app')
  uninstallPackage('@capacitor/browser')
}

// Business logic

const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const removeConfiguration = () => {
  console.log('\n🚚 Removing the project\n')
  const result = removeProject()

  if (result === false) reportError(`\n🚨 Something went wrong while removing the project 🚨\n`)
  else console.log('\n✅ Project has been successfully removed\n')
}

const removeAndroidProject = () => {
  console.log('\n🚚 Removing android\n')
  const result = removeAndroid()

  if (result === false) reportError(`\n🚨 Something went wrong while removing android 🚨\n`)
  else console.log('\n✅ Android has been successfully removed\n')
}

const removeIOSProject = () => {
  console.log('\n🚚 Removing iOS\n')
  const result = removeIOS()

  if (result === false) reportError(`\n🚨 Something went wrong while removing iOS 🚨\n`)
  else console.log('\n✅ iOS has been successfully removed\n')
}

const removeSuiApp = () => {
  console.log('\n🚚 Uninstalling sui-app\n')
  const result = uninstallSuiApp()

  if (result === false) reportError(`\n🚨 Something went wrong while uninstalling sui-app 🚨\n`)
  else console.log('\n✅ sui-app has been successfully uninstalled\n')
}

const removePlugins = () => {
  console.log('\n🚚 Uninstalling plugins\n')
  const result = uninstallPlugins()

  if (result === false) reportError(`\n🚨 Something went wrong while uninstalling plugins 🚨\n`)
  else console.log('\n✅ plugins have been successfully uninstalled\n')
}

// Command
module.exports = () => {
  // If we are not placed on a webapp, we cannot continue
  if (!hasPackageJson()) {
    reportError(
      '\nsui-app should be executed from a web-app project.\nPlease be sure that there is a package.json file in your current directory.\n'
    )
    return
  }

  // If app has already been initialized
  if (!hasCapacitorConfig()) {
    reportError(`\nThis project has not been initialized. sui-app cannot be removed\n`)
  }

  // Remove configuration
  removeConfiguration()

  // Add android project
  removeAndroidProject()

  // Add iOS project
  removeIOSProject()

  // Uninstall sui-app
  removeSuiApp()
  removePlugins()
}
