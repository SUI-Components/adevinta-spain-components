/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Domain from '../../index.js'
import {EmptyEmailPasswordError} from '../../password/Errors/EmptyEmailPasswordError.js'
import {InvalidEmailPasswordError} from '../../password/Errors/InvalidEmailPasswordError.js'

describe('[Domain] ValidateEmailPasswordUseCase', () => {
  const domain = new Domain()
  const useCase = domain.get('validate_email_password_use_case')

  it('should return an InvalidEmailPasswordError if email has a wrong format', async () => {
    const requestBody = {
      email: 'something-wrong'
    }

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.not.be.null
    expect(error).to.be.an.instanceof(InvalidEmailPasswordError)
    expect(error.toString()).to.eql(
      'Error: [PasswordError] E-mail is not valid'
    )
    expect(result).to.be.null
  })

  it('should return an EmptyEmailPasswordError if email is empty', async () => {
    const requestBody = {
      email: ''
    }

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.not.be.null
    expect(error).to.be.an.instanceof(EmptyEmailPasswordError)
    expect(error.toString()).to.eql('Error: [PasswordError] E-mail is empty')
    expect(result).to.be.null
  })

  it('should return true if email is valid', async () => {
    const requestBody = {
      email: 'valid@adevinta.com'
    }

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.be.null
    expect(result).to.be.true
  })
})
