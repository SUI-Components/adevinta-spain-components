import {inlineError} from '@s-ui/decorators'

import {PasswordRepository} from './PasswordRepository.js'

export class HTTPPasswordRepository extends PasswordRepository {
  constructor({config, fetcher}) {
    super({config})
    this._fetcher = fetcher
  }

  @inlineError
  resetPassword({resetPasswordRequest}) {
    return new Promise((resolve, reject) => {
      const email = resetPasswordRequest.getEmail()
      if (email === 'something-wrong') {
        reject('Error: Unhandled error ocurred')
      }
      resolve(true)
    })

    //const url = this._config.get('RESET_PASSWORD_ENDPOINT')
    //return this._fetcher.post(url, {email})
  }
}
