// Constants
const {
  PACKAGE_JSON_FILE,
  PROJECT_CONFIG_FILE
} = require('../infrastructure/config.js')

const {getCurrentDirectory, fileExists} = require('../infrastructure/utils.js')

const hasPackageJson = () => {
  return fileExists(`${getCurrentDirectory()}/${PACKAGE_JSON_FILE}`)
}

const hasCapacitorConfig = () => {
  return fileExists(`${getCurrentDirectory()}/${PROJECT_CONFIG_FILE}`)
}

module.exports = {
  hasPackageJson,
  hasCapacitorConfig
}
