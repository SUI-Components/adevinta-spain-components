// Constants
const {PACKAGE_JSON_FILE, PACKAGE_NAME} = require('../infrastructure/config.js')

// Infra

const {
  getCurrentDirectory,
  readJSONFile,
  reportError,
  runCommand,
  installPackage,
  saveJSONFile
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

const optimizeConfigurations = () => {
  const config = readJSONFile('./capacitor.config.json')
  config.plugins = {
    CapacitorCookies: {
      enabled: true
    },
    LocalNotifications: {
      smallIcon: 'notification',
      iconColor: '#488AF',
      sound: 'beep.wav'
    },
    CapacitorHttp: {
      enabled: true
    }
  }

  saveJSONFile(config, './capacitor.config.json')
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
  console.log(`\n🚚 Installing required dependency 👉 ${dependency}\n`)
  const result = installPackage(dependency)

  if (result === false)
    reportError(`\n🚨 Something went wrong while installing dependencies 🚨\n`)
  else console.log(`\n✅ Dependency has been successfully installed\n`)
}

const initAppProject = () => {
  console.log('\n🚚 Initializing the project\n')
  const result = initProject()

  if (result === false)
    reportError(`\n🚨 Something went wrong while initializing the project 🚨\n`)
  else console.log('\n✅ Project has been successfully initialized\n')
}

const addAndroidProject = () => {
  console.log('\n🤖 Adding android project\n')
  const result = initAndroid()

  if (result === false)
    reportError(`\n🚨 Something went wrong while configuring android 🚨\n`)
  else console.log('\n✅ Android has been successfully initialized\n')
}

const addIOSProject = () => {
  console.log('\n🍏 Adding iOS project\n')
  const result = initIOS()

  if (result === false)
    reportError(`\n🚨 Something went wrong while configuring iOS 🚨\n`)
  else console.log('\n✅ iOS has been successfully initialized\n')
}

const applyConfigurationOptimizations = () => {
  console.log('\n Applying configuration optimizations\n')
  const result = optimizeConfigurations()

  if (result === false)
    reportError(
      `\n🚨 Something went wrong while applying configuration optimizations 🚨\n`
    )
  else
    console.log(
      '\n✅ Configuration optimizations have been successfully applied\n'
    )
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

  if (!hasDependency(PACKAGE_NAME)) {
    installDependency(PACKAGE_NAME)
  }

  if (!hasDependency('@capgo/capacitor-native-biometric'))
    installDependency('@capgo/capacitor-native-biometric')

  if (!hasDependency('@capacitor/local-notifications'))
    installDependency('@capacitor/local-notifications')

  // If app has already been initialized
  if (hasCapacitorConfig()) {
    reportError(
      `\nThis project has already-been initialized. Please run sui-app remove before initializing again.\n`
    )
  }

  // Init the project
  initAppProject()

  // Add android project
  addAndroidProject()

  // Add iOS project
  addIOSProject()

  // Apply optimizations to capacitor config file
  applyConfigurationOptimizations()
}
