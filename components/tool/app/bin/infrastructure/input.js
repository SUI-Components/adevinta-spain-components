const readlineSync = require('readline-sync')

const confirmQuestion = async message => {
  return readlineSync.keyInYN(`❓ ${message}`)
}

module.exports = {
  confirmQuestion
}
