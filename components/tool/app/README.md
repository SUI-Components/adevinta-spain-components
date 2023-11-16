# sui-app

sui-app is a cli tool that allows to easily convert any already-existing web app into an Android and iOS hybrid app.

It makes even more easy to add capacitor to the project, and handles all tricky configuration steps and requirements.

sui-app also provides a set of interesting tools and components to offer a set of features providing an abstraction layer that makes it easier to implement then. These are some of the offered features:

* Real time OTA (over the air updates).
* Biometric authentication.
* Push notifications.

## Prerequisites

* sui-app has been built and tested on macOS Sonoma, with node > 16, other environments may not be supported
* Install Xcode and the iOS development environment and Android Studio and Android SDK.
* Install Xcode Command Line Tools by running `sudo xcode-select --install`
* Install `cocoapods` by running  `sudo gem install cocoapods`.
* If previous command doesn't work, try installing `cocoapods` from `homebrew` by running the following commands:

```
curl -fsSL -o install.sh https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh
/bin/bash install.sh
brew install chruby ruby-install
brew install cocoapods
brew upgrade cocoapods
```

## Installation

```sh
$ npm install @s-ui/sui-tool-app
```

## Usage

### Project initializing

Run `npx sui-app init` to initialize an existing project.

### Remove sui-app

To remove `sui-app` and all configuration files and dependencies, and make  , run `npx sui-app remove`.

### Synchronize

After making changes to the web app and building it, both iOS and Android projects need to be synchronized. 

This can be performed by running `npx sui-app sync`.

This command can be added after the standard build task.

## Biometric login

To add biometric login capabilities (touch id, face id, etc), it is possible to use the biometric login library.

### Android prerequisites

Before start using biometric auth, `USE_BIOMETRIC` permission needs to be added to the `AndroidManifest.xml`

```
<uses-permission android:name="android.permission.USE_BIOMETRIC">
```

### iOS prerequisites

Add something similar to the following to `App/info.plist`:

```
<key>NSFaceIDUsageDescription</key>
<string>For an easier and faster log in.</string>
```

Note that the string will be displayed on the user interface sometimes.

### Check if biometric login is available

```
import {isBiometricLoginAvailable} from '@s-ui/sui-tool-app'

const isAvailable = await isBiometricLoginAvailable()
```

### Set biometric login

After user logs in, credentials can be stored for later usage through biometric API. 
Normally the OS will prompt users to confirm they really want to use biometric auth for login.

```
import {setBiometricLoginCredentials} from '@s-ui/sui-tool-app'

const isAvailable = await setBiometricLoginCredentials({
  username: '123',
  password: '456',
  domain: 'pro.coches.net'
})
```

### Get credentials

If the user has previously authorized and registered biometric login, `getBiometricLoginCredentials` will prompt users to confirm their identity, and if authentication is successful, the credentials object will be returned.

```
import {getBiometricLoginCredentials} from '@s-ui/sui-tool-app'

const isAvailable = await getBiometricLoginCredentials({
  domain: 'pro.coches.net',
  reason: 'Log in into the app',
  title: 'Identify with your fingerprint or face',
  subtitle: 'Confirm your identity without having to remember your password',
  description: 'Please use a biometric device to identify yourself',
})
```

## Local notifications 

### Android prerequisites

1. Create a `notification.png` icon and put it into the `res/drawable` folder, on the android project. It is also possible to edit `capacitor.config.json` file and change the `smallIcon` property contained inside the `LocalNotifications` node.
2. Add the `SCHEDULE_EXACT_ALARM` permission to the `AndroidManifest.xml`.

```
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
```

### Other features

Please refer to the following documentation: `https://capacitorjs.com/docs/apis/local-notifications`