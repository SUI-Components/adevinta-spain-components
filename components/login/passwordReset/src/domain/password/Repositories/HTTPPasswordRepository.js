import {inlineError} from '@s-ui/decorators'

import {PasswordRepository} from './PasswordRepository.js'

export class HTTPPasswordRepository extends PasswordRepository {
  constructor({config, fetcher, passwordError}) {
    super()
    this._config = config
    this._fetcher = fetcher
    this._passwordError = passwordError
  }

  @inlineError
  changePassword({changePasswordRequest}) {
    const password = changePasswordRequest.getPassword()
    const token = changePasswordRequest.getToken()
    const path = this._config.get('CHANGE_PASSWORD_ENDPOINT')
    return this._fetcher
      .post({path, params: {password, token}})
      .then(() => true)
      .catch(() => {
        throw this._passwordError('Unhandled error occured')
      })
  }

  @inlineError
  resetPassword({resetPasswordRequest}) {
    const email = resetPasswordRequest.getEmail()
    const path = this._config.get('RESET_PASSWORD_ENDPOINT')
    return this._fetcher
      .post({path, params: {email}})
      .then(() => true)
      .catch(() => {
        throw this._passwordError('Unhandled error occured')
      })
  }
}
