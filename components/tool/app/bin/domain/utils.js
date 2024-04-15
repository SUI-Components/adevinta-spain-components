// Constants
const {PACKAGE_JSON_FILE, PROJECT_CONFIG_FILE} = require('../infrastructure/config.js')

const {
  getCurrentDirectory,
  fileExists,
  fileContains,
  installPackage,
  reportError,
  readJSONFile
} = require('../infrastructure/utils.js')

const hasPackageJson = () => {
  return fileExists(`${getCurrentDirectory()}/${PACKAGE_JSON_FILE}`)
}

const hasCapacitorConfig = () => {
  return fileExists(`${getCurrentDirectory()}/${PROJECT_CONFIG_FILE}`)
}

const hasIosUrlScheme = scheme => {
  // Asumiendo que 'scheme' es el protocolo custom que buscas, como 'myapp'
  const iosPlistPath = `${getCurrentDirectory()}/ios/App/App/Info.plist`
  return fileContains(`<string>${scheme}</string>`, iosPlistPath)
}

const hasAndroidUrlScheme = scheme => {
  // Asumiendo que 'scheme' es el protocolo custom que buscas
  const androidManifestPath = `${getCurrentDirectory()}/android/app/src/main/AndroidManifest.xml`
  const schemePattern = `android:scheme="${scheme}"`
  return fileContains(schemePattern, androidManifestPath)
}

const installDependency = dependency => {
  console.log(`\n🚚 Installing required dependency 👉 ${dependency}\n`)
  const result = installPackage(dependency)

  if (result === false) reportError(`\n🚨 Something went wrong while installing dependencies 🚨\n`)
  else console.log(`\n✅ Dependency has been successfully installed\n`)
}

const hasDependency = dependency => {
  const packageData = readJSONFile(`${getCurrentDirectory()}/${PACKAGE_JSON_FILE}`)
  return packageData.dependencies.hasOwnProperty(dependency)
}

module.exports = {
  hasDependency,
  hasPackageJson,
  hasCapacitorConfig,
  hasIosUrlScheme,
  hasAndroidUrlScheme,
  installDependency
}
