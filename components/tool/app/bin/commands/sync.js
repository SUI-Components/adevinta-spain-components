// Infra
//   -> files
const {reportError, runCommand} = require('../infrastructure/utils.js')

const sync = () => {
  runCommand('npx cap sync')
}

// Business logic

const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const syncProjects = () => {
  console.log('\n\n🚚 Performing a sync operation\n\n')
  const result = sync()

  if (result === false) reportError(`\n\n🚨 Something went wrong 🚨\n\n`)
  else console.log('\n\n✅ Project has been successfully synchronized\n\n')
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
      `\n\nThis project has not been initialized. sui-app cannot perform a sync operation\n\n`
    )
  }

  // Sync project
  syncProjects()
}
