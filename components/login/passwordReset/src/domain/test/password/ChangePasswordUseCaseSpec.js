/* eslint react/jsx-no-undef:0 */
/* eslint no-undef:0 */
import {expect} from 'chai'

import Mocker from '@s-ui/mockmock/lib/http'

import Domain from '../../index.js'
import {PasswordError} from '../../password/Errors/PasswordError.js'

describe('[Domain] ChangePasswordUseCase', () => {
  const domain = new Domain()
  const useCase = domain.get('change_password_use_case')
  const mocker = new Mocker()

  beforeEach(() => {
    mocker.create()
  })

  afterEach(() => {
    mocker.restore()
  })

  it('should successfully change the password and finish the process', async () => {
    const requestBody = {password: 'newPassword', token: '123'}

    mocker
      .httpMock('http://localhost/')
      .post('v1/ecg/password-change', requestBody)
      .reply(null, 204)

    const [error, result] = await useCase.execute(requestBody)
    expect(error).to.be.null
    expect(result).to.eql(true)
  })

  it('should return an exception if something goes wrong', async () => {
    const requestBody = {password: 'newPassword', token: 'invalid'}

    mocker
      .httpMock('http://localhost/')
      .post('v1/ecg/password-change', requestBody)
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
