import {inlineError} from '@s-ui/decorators'
import {Service} from '@s-ui/domain'

export class ResetPasswordService extends Service {
  constructor({passwordRepository} = {}) {
    super()
    this._passwordRepository = passwordRepository
  }

  /**
   * @param {String} request
   */
  @inlineError
  execute({email}) {
    if (email === 'something-wrong') {
      throw new Error('Unhandled error ocurred')
    }
    return Promise.resolve(true)
  }
}
