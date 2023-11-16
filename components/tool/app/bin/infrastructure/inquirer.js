const inquirer = require('inquirer')

const confirmQuestion = async message => {
  const answer = await inquirer.prompt([
    {
      name: 'confirmQuestion',
      type: 'confirm',
      message
    }
  ])

  return answer.confirmQuestion
}

module.exports = {
  confirmQuestion
}
