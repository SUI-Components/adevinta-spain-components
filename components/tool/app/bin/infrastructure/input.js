const confirmQuestion = async message => {
  return new Promise((resolve, reject) => {
    const readline = require('readline')

    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    })

    rl.question(`❓ ${message} (Y/n)`, answer => {
      if (answer.toLowerCase() === 'n') {
        resolve(false)
      } else {
        resolve(true)
      }
      rl.close()
    })
  })
}

module.exports = {
  confirmQuestion
}
