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

### Opening the app

If you have errors while compiling the app, please ensure you have properly opened the project before checking anything else.

Run `npx sui-app open ios` or `npx sui-app open android` in order to start the project.

### Synchronize

After making changes to the web app and building it, both iOS and Android projects need to be synchronized. 

This can be performed by running `npx sui-app sync`.

This command can be added after the standard build task.

## Add url schemes

You can add basic url schemes (not universal links) by running `npx sui-app add-url-scheme`.

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
import {biometric} from '@s-ui/sui-tool-app'

const isAvailable = await biometric.isAvailable()
```

### Set biometric login

After user logs in, credentials can be stored for later usage through biometric API. 
Normally the OS will prompt users to confirm they really want to use biometric auth for login.

```
import {biometric} from '@s-ui/sui-tool-app'

await biometric.setCredentials({
  username: '123',
  password: '456',
  domain: 'pro.coches.net'
})
```

### Get credentials

If the user has previously authorized and registered biometric login, `getCredentials` will prompt users to confirm their identity, and if authentication is successful, the credentials object will be returned.

```
import {biometric} from '@s-ui/sui-tool-app'

const credentials = await biometric.getCredentials({
  domain: 'pro.coches.net',
  reason: 'Log in into the app',
  title: 'Identify with your fingerprint or face',
  subtitle: 'Confirm your identity without having to remember your password',
  description: 'Please use a biometric device to identify yourself',
})

console.log(credentials.username, credentials.password)
```

## Local notifications 

### Android prerequisites

1. Create a `notification.png` icon and put it into the `res/drawable` folder, on the android project. It is also possible to edit `capacitor.config.json` file and change the `smallIcon` property contained inside the `LocalNotifications` node.
2. Add the `SCHEDULE_EXACT_ALARM` permission to the `AndroidManifest.xml`.

```
<uses-permission android:name="android.permission.SCHEDULE_EXACT_ALARM" />
```

### Getting permissions

Before sending notifications, in some operating systems the user has to accept them. This can be easily done by calling to the `prepare` method.

If the `prepare` method is not executed, permissions will be requested when the first notification is scheduled.

```
import {localNotifications} from '@s-ui/sui-tool-app'

await localNotifications.prepare() // Returns true or false
```

### Scheduling a notification

A basic local notification can be scheduled by running the `schedule` command:

```
import {localNotifications} from '@s-ui/sui-tool-app'
const ONE_MINUTE = 1000 * 60
localNotifications.schedule({
    notifications: [
      {
        title: 'Fancy title here',
        body: 'I am a fancy notification. Just click me!',
        id: 1,
        schedule: {at: new Date(Date.now() + ONE_MINUTE)},
        sound: null,
        attachments: null,
        actionTypeId: '',
        extra: null
      }
    ]
  })

```

### Other available methods

There are other methods available to interact with local notifications, that are offered by the original Capacitor plugin and can be accessed directly, without adding custom logic nor altering their behaviour.

```
import {localNotifications} from '@s-ui/sui-tool-app'

// localNotifications.plugin.getPending()
// .registerActionTypes
// .cancel
// .areEnabled
// .createChannel
// .deleteChannel
// .listChannels

```

The exposed API through the `plugin` prop can be reviewed here `https://capacitorjs.com/docs/apis/local-notifications#api`