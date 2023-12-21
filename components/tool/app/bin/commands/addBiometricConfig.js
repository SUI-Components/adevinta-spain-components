/* eslint-disable no-console */

const fs = require('fs')

const plist = require('plist')
const xml2js = require('xml2js')

const {reportError, fileContains} = require('../infrastructure/utils.js')

const {hasPackageJson, hasCapacitorConfig} = require('../domain/utils.js')

const hasBiometricConfig = () => {
  return fileContains('NSFaceIDUsageDescription', 'ios/App/App/Info.plist')
}

const addiOSBiometricConfig = () => {
  // Read the file
  const plistFile = fs.readFileSync('ios/App/App/Info.plist', 'utf8')

  // Parse the plist file to a JavaScript object
  const plistObject = plist.parse(plistFile)

  // Add the NSFaceIDUsageDescription property
  plistObject.NSFaceIDUsageDescription = 'To log in more quickly'

  // Convert the JavaScript object back to a plist string
  const newPlistFile = plist.build(plistObject)

  // Write the new plist string back to the file
  fs.writeFileSync('ios/App/App/Info.plist', newPlistFile)

  console.log('\n 🍏 iOS biometric permissions have been successfully configured\n')
}

const addAndroidBiometricConfig = async () => {
  // Read the file
  const manifestXML = fs.readFileSync('android/app/src/main/AndroidManifest.xml', 'utf8')

  // Parse XML to JS object
  const manifest = await xml2js.parseStringPromise(manifestXML)

  // Add uses-permission
  manifest.manifest['uses-permission'].push({
    $: {
      'android:name': 'android.permission.USE_BIOMETRIC'
    }
  })

  // Add uses-feature
  manifest.manifest.application[0]['uses-feature'] = {
    $: {
      'android:name': 'android.hardware.fingerprint',
      'android:required': 'false'
    }
  }

  // Convert back to XML
  const newManifest = new xml2js.Builder().buildObject(manifest)

  // Write file
  fs.writeFileSync('android/app/src/main/AndroidManifest.xml', newManifest)

  console.log('\n 🤖 Android biometric permissions have been successfully configured\n')
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
    reportError(`\n\nThis project has not been initialized. sui-app cannot perform configure biometric plugin\n\n`)
  }

  // If biometric has not been added yet
  if (hasBiometricConfig()) {
    reportError(`\nBiometric configuration has already been added to the project\n`)
  }

  // Sync project
  addiOSBiometricConfig()
  addAndroidBiometricConfig()
}
