const getCurrentDirectory = () => process.cwd()
const fileExists = file => {
  const fs = require('fs')
  try {
    if (fs.existsSync(file)) {
      return true
    }
  } catch (err) {
    return false
  }
}

const fileContains = (content, file) => {
  const {readFileSync} = require('fs')
  const data = readFileSync(file, 'utf8')
  return data.includes(content)
}

const readJSONFile = file => {
  const {readFileSync} = require('fs')
  const data = readFileSync(file)
  return JSON.parse(data)
}

const saveJSONFile = (json, file) => {
  const {writeFileSync} = require('fs')
  const stringified = JSON.stringify(json, null, 2)
  writeFileSync(file, stringified)
}

const removeFile = file => {
  const {rmSync} = require('fs')
  rmSync(file)
}

const removeDirectory = file => {
  const {rmSync} = require('fs')
  rmSync(file, {recursive: true, force: true})
}

//   -> app
const reportError = error => {
  process.stderr.write(error)
  process.exit(1)
}

const runCommand = command => {
  try {
    const childProcess = require('child_process')
    childProcess.execSync(command, {stdio: [0, 1, 2]})
    return true
  } catch (error) {
    return false
  }
}

const installPackage = packageName => {
  return runCommand(`npm install ${packageName}`)
}

const uninstallPackage = packageName => {
  return runCommand(`npm uninstall ${packageName}`)
}

module.exports = {
  getCurrentDirectory,
  fileExists,
  fileContains,
  readJSONFile,
  saveJSONFile,
  reportError,
  runCommand,
  installPackage,
  removeFile,
  removeDirectory,
  uninstallPackage
}
