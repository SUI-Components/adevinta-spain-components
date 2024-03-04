// Constants
const {PACKAGE_JSON_FILE, PROJECT_CONFIG_FILE} = require('../infrastructure/config.js')

const {getCurrentDirectory, fileExists, fileContains} = require('../infrastructure/utils.js')

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

module.exports = {
  hasPackageJson,
  hasCapacitorConfig,
  hasIosUrlScheme,
  hasAndroidUrlScheme
}
