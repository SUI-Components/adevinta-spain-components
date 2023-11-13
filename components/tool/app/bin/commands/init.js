// Constants
const PACKAGE_NAME = '@s-ui/sui-tool-app'
const PACKAGE_JSON_FILE = 'package.json'

// Infra
//   -> files
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

const readJSONFile = file => {
  const {readFileSync} = require('fs')
  const data = readFileSync(file)
  return JSON.parse(data)
}

//   -> app
const reportError = error => {
  process.stderr.write(error)
  process.exit(1)
}

const installPackage = packageName => {
  try {
    console.log('Installing ', packageName)
    // var child_process = require('child_process');
    // child_process.execSync(`npm install ${packageName}`,{stdio:[0,1,2]});
    return true
  } catch (error) {
    return false
  }
}

// Business logic
const hasPackageJson = () => {
  return fileExists(`${getCurrentDirectory()}/${PACKAGE_JSON_FILE}`)
}

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

// Command
module.exports = () => {
  // If we are not placed on a nodejs, we cannot continue
  if (!hasPackageJson()) {
    reportError(
      '\n\nsui-app should be executed from a web-app project.\nPlease be sure that there is a package.json file in your current directory.\n\n'
    )
    return
  }

  // Añadir al package.json la dependencia @s-ui/sui-tool-app si no está
  if (!hasDependency(PACKAGE_NAME)) {
    installDependency(PACKAGE_NAME)
  }
  console.log('asdasdasd')
  // Ejecutar npx cap init

  // Ejecutar npx cap android

  // Ejecutar npx cap ios

  // Añadir al script de compilado sui-app sync
}
