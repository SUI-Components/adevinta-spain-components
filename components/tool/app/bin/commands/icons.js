// Infra
const {reportError, runCommand} = require('../infrastructure/utils.js')

// Business logic
const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const generateIcons = () => {
  console.log(`\n\n🎨 Generating icons\n\n`)

  if (
    runCommand('npx @capacitor/assets generate ios') === false ||
    runCommand('npx @capacitor/assets generate android') === false
  )
    reportError(
      `\n\n🚨 Something went wrong while installing dependencies 🚨\n\n`
    )
  else console.log(`\n\n✅ Icons successfully generated\n\n`)
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

  generateIcons()
}
