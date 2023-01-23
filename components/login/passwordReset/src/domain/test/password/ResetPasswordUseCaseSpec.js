/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Mocker from '@s-ui/mockmock/lib/http'

import Domain from '../../index.js'
import {PasswordError} from '../../password/Errors/PasswordError.js'

describe('[Domain] ResetPasswordUseCase', () => {
  const domain = new Domain()
  const useCase = domain.get('reset_password_use_case')
  const mocker = new Mocker()

  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should successfully start the password reset process', async () => {
    const requestBody = {email: 'someone@adevinta.com'}

    mocker
      .httpMock('http://localhost/')
      .post('v1/ecg/password-reset', requestBody)
      .reply(null, 202)

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.be.null
    expect(result).to.eql(true)
  })

  it('should return an exception if something goes wrong', async () => {
    const requestBody = {
      email: 'something-wrong'
    }

    mocker
      .httpMock('http://localhost/')
      .post('v1/ecg/password-reset', requestBody)
      .reply(null, 400)

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.not.be.null
    expect(error).to.be.an.instanceof(PasswordError)
    expect(error.toString()).to.eql(
      'Error: [PasswordError] Unhandled error occurred'
    )
    expect(result).to.be.null
  })
})
