#!/usr/bin/env node
const yargs = require('yargs')

const COMMAND_NAME = 'sui-app'

yargs
  .scriptName(COMMAND_NAME)
  .usage('$0 <cmd> [args]')
  .command(
    'init',
    'inits an already-existing web app to start using sui-app',
    require('./commands/init.js')
  )
  .command(
    'remove',
    'removes sui-app from an already-initialized project',
    require('./commands/remove.js')
  )
  /* .command(
    'asd [name]',
    'welcome ter yargs!',
    yargs => {
      yargs.positional('name', {
        type: 'string',
        default: 'Cambi',
        describe: 'the name to say hello to'
      })
    },
    function (argv) {
      console.log('hello', argv.name, 'welcome to yargs!')
    }
  ) */
  .help()
  .command({
    command: '*',
    handler() {
      yargs.showHelp()
    }
  })
  .parse()
