/* eslint-disable no-console */

const {reportError} = require('../infrastructure/utils.js')

const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

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
    reportError(`\n\nThis project has not been initialized. sui-app cannot perform a sync operation\n\n`)
  }

  // Sync project
  console.log('\nThis command is still not implemented.\n')
}
