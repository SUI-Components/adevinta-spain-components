const fs = require('fs')
const plist = require('plist')
const xml2js = require('xml2js')
const {hasIosUrlScheme, hasAndroidUrlScheme} = require('../domain/utils.js') // Asumiendo que estas funciones están implementadas aquí
const {askQuestion} = require('../infrastructure/input.js')

const addIosUrlScheme = scheme => {
  const plistPath = 'ios/App/App/Info.plist'
  const plistFile = fs.readFileSync(plistPath, 'utf8')
  const plistData = plist.parse(plistFile)

  // Añade tu esquema URL aquí
  // Asumiendo que plistData ya tiene CFBundleURLTypes configurado
  const urlScheme = {
    CFBundleTypeRole: 'Editor',
    CFBundleURLName: 'Custom URL',
    CFBundleURLSchemes: [scheme]
  }

  if (!plistData.CFBundleURLTypes) {
    plistData.CFBundleURLTypes = [urlScheme]
  } else {
    plistData.CFBundleURLTypes.push(urlScheme)
  }

  const newPlistData = plist.build(plistData)
  fs.writeFileSync(plistPath, newPlistData)
  console.log('iOS URL Scheme added successfully.')
}

const addAndroidUrlScheme = async scheme => {
  const manifestPath = 'android/app/src/main/AndroidManifest.xml'
  const manifestFile = fs.readFileSync(manifestPath, 'utf8')
  const manifest = await xml2js.parseStringPromise(manifestFile)

  // Añade tu esquema URL aquí
  const intentFilter = {
    action: [{$: {'android:name': 'android.intent.action.VIEW'}}],
    category: [
      {$: {'android:name': 'android.intent.category.DEFAULT'}},
      {$: {'android:name': 'android.intent.category.BROWSABLE'}}
    ],
    data: [{$: {'android:scheme': scheme}}]
  }

  if (!manifest.manifest.application[0].activity[0].hasOwnProperty('intent-filter')) {
    manifest.manifest.application[0].activity[0]['intent-filter'] = [intentFilter]
  } else {
    manifest.manifest.application[0].activity[0]['intent-filter'].push(intentFilter)
  }

  const newManifest = new xml2js.Builder().buildObject(manifest)
  fs.writeFileSync(manifestPath, newManifest)
  console.log('Android URL Scheme added successfully.')
}

module.exports = async () => {
  const scheme = await askQuestion('What custom protocol do you want to use for your URL scheme? ')

  if (hasIosUrlScheme(scheme) || hasAndroidUrlScheme(scheme)) {
    console.log('URL Scheme already configured.')
    return
  }

  addIosUrlScheme(scheme)
  addAndroidUrlScheme(scheme)
}
