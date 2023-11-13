// Constants
const {PROJECT_CONFIG_FILE} = require('../infrastructure/config.js')

// Infra
//   -> files
const {
  getCurrentDirectory,
  removeFile,
  removeDirectory,
  reportError
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

// Business logic

const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const removeConfiguration = () => {
  console.log('\n\n🚚 Removing the project\n\n')
  const result = removeProject()

  if (result === false)
    reportError(`\n\n🚨 Something went wrong while removing the project 🚨\n\n`)
  else console.log('\n\n✅ Project has been successfully removed\n\n')
}

const removeAndroidProject = () => {
  console.log('\n\n🚚 Removing android\n\n')
  const result = removeAndroid()

  if (result === false)
    reportError(`\n\n🚨 Something went wrong while removing android 🚨\n\n`)
  else console.log('\n\n✅ Android has been successfully removed\n\n')
}

const removeIOSProject = () => {
  console.log('\n\n🚚 Removing iOS\n\n')
  const result = removeIOS()

  if (result === false)
    reportError(`\n\n🚨 Something went wrong while removing iOS 🚨\n\n`)
  else console.log('\n\n✅ iOS has been successfully removed\n\n')
}

// Command
module.exports = () => {
  // If we are not placed on a webapp, we cannot continue
  if (!hasPackageJson()) {
    reportError(
      '\n\nsui-app should be executed from a web-app project.\nPlease be sure that there is a package.json file in your current directory.\n\n'
    )
    return
  }

  // If app has already been initialized
  if (!hasCapacitorConfig()) {
    reportError(
      `\n\nThis project has not been initialized. sui-app cannot be removed\n\n`
    )
  }

  // Remove configuration
  removeConfiguration()

  // Add android project
  removeAndroidProject()

  // Add iOS project
  removeIOSProject()

  // Uninstall sui-app
  // uninstallSuiApp()
}
