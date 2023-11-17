#!/usr/bin/env node
const yargs = require('yargs')

const COMMAND_NAME = 'sui-app'

yargs
  .scriptName(COMMAND_NAME)
  .usage('$0 <cmd> [args]')
  .command('init', 'inits an already-existing web app to start using sui-app', require('./commands/init.js'))
  .command('remove', 'removes sui-app from an already-initialized project', require('./commands/remove.js'))
  .command(
    'sync',
    'syncs the compiled version of the web app with the ios and android projects',
    require('./commands/sync.js')
  )
  .command('icons', 'generates and transforms icons both for ios an android', require('./commands/icons.js'))
  .command(
    'add-biometric-config',
    'Configures both iOS and Android to use biometric authentication',
    require('./commands/addBiometricConfig.js')
  )
  .help()
  .command({
    command: '*',
    handler() {
      yargs.showHelp()
    }
  })
  .parse()
