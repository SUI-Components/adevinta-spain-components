/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Domain from '../../index.js'
import {EmptyPasswordError} from '../../password/Errors/EmptyPasswordError.js'
import {InvalidPasswordError} from '../../password/Errors/InvalidPasswordError.js'

describe('[Domain] ValidatePasswordUseCase', () => {
  const domain = new Domain()
  const useCase = domain.get('validate_password_use_case')

  it('should return an InvalidPasswordError if password length is lower than 8', async () => {
    const requestBody = {
      password: '1'
    }

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.not.be.null
    expect(error).to.be.an.instanceof(InvalidPasswordError)
    expect(error.toString()).to.eql(
      'Error: [PasswordError] Password is not valid'
    )
    expect(result).to.be.null
  })

  it('should return an EmptyPasswordError if password is empty', async () => {
    const requestBody = {
      password: ''
    }

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.not.be.null
    expect(error).to.be.an.instanceof(EmptyPasswordError)
    expect(error.toString()).to.eql('Error: [PasswordError] Password is empty')
    expect(result).to.be.null
  })

  it('should return true if password is valid', async () => {
    const requestBody = {
      password: '1t3f5s7e'
    }

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.be.null
    expect(result).to.be.true
  })
})
