/* eslint-disable no-console */
// Infra
//   -> files
const {reportError, runCommand} = require('../infrastructure/utils.js')

const open = platform => {
  runCommand(`npx cap open ${platform}`)
}

// Business logic

const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const openProject = platform => {
  console.log('\n\n🚚 Opening the project\n\n')
  const result = open(platform)

  if (result === false) reportError(`\n\n🚨 Something went wrong 🚨\n\n`)
  else console.log('\n\n✅ Project has been successfully opened\n\n')
}

// Command
module.exports = argv => {
  // If we are not placed on a webapp, we cannot continue
  if (!hasPackageJson()) {
    reportError(
      '\n\nsui-app should be executed from a web-app project.\nPlease be sure that there is a package.json file in your current directory.\n\n'
    )
    return
  }

  // If app has already been initialized
  if (!hasCapacitorConfig()) {
    reportError(`\n\nThis project has not been initialized. sui-app cannot perform this operation\n\n`)
  }

  openProject(argv.platform)
}
