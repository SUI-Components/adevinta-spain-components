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