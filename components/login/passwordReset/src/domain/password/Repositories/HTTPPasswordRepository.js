import {inlineError} from '@s-ui/decorators'

import {PasswordRepository} from './PasswordRepository.js'

export class HTTPPasswordRepository extends PasswordRepository {
  constructor({config, fetcher}) {
    super()
    this._config = config
    this._fetcher = fetcher
  }

  @inlineError
  resetPassword({resetPasswordRequest}) {
    const email = resetPasswordRequest.getEmail()
    const path = this._config.get('RESET_PASSWORD_ENDPOINT')
    return this._fetcher
      .post({path, params: {email}})
      .then(() => true)
      .catch(() => {
        throw new Error('Unhandled error ocurred')
      })
  }
}
