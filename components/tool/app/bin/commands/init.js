// Constants
const {PACKAGE_JSON_FILE, PACKAGE_NAME} = require('../infrastructure/config.js')

// Infra

const {
  getCurrentDirectory,
  readJSONFile,
  reportError,
  runCommand,
  installPackage
} = require('../infrastructure/utils.js')

const initProject = () => {
  return runCommand(`npx cap init`)
}

const initAndroid = () => {
  return runCommand(`npx cap add android`)
}

const initIOS = () => {
  return runCommand(`npx cap add ios`)
}

// Business logic
const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const hasDependency = dependency => {
  const packageData = readJSONFile(
    `${getCurrentDirectory()}/${PACKAGE_JSON_FILE}`
  )
  return packageData.dependencies.hasOwnProperty(dependency)
}

const installDependency = dependency => {
  console.log(`\n\n🚚 Installing required dependency 👉 ${dependency}\n\n`)
  const result = installPackage(dependency)

  if (result === false)
    reportError(
      `\n\n🚨 Something went wrong while installing dependencies 🚨\n\n`
    )
  else console.log(`\n\n✅ Dependency has been successfully installed\n\n`)
}

const initAppProject = () => {
  console.log('\n\n🚚 Initializing the project\n\n')
  const result = initProject()

  if (result === false)
    reportError(
      `\n\n🚨 Something went wrong while initializing the project 🚨\n\n`
    )
  else console.log('\n\n✅ Project has been successfully initialized\n\n')
}

const addAndroidProject = () => {
  console.log('\n\n🤖 Adding android project\n\n')
  const result = initAndroid()

  if (result === false)
    reportError(`\n\n🚨 Something went wrong while configuring android 🚨\n\n`)
  else console.log('\n\n✅ Android has been successfully initialized\n\n')
}

const addIOSProject = () => {
  console.log('\n\n🍏 Adding iOS project\n\n')
  const result = initIOS()

  if (result === false)
    reportError(`\n\n🚨 Something went wrong while configuring iOS 🚨\n\n`)
  else console.log('\n\n✅ iOS has been successfully initialized\n\n')
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

  if (!hasDependency(PACKAGE_NAME)) {
    installDependency(PACKAGE_NAME)
  }

  // If app has already been initialized
  if (hasCapacitorConfig()) {
    reportError(
      `\n\nThis project has already-been initialized. Please run sui-app remove before initializing again.\n\n`
    )
  }

  // Init the project
  initAppProject()

  // Add android project
  addAndroidProject()

  // Add iOS project
  addIOSProject()

  // Add sui-app sync to post-compile
}
