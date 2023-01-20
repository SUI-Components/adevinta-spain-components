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
  execute({resetPasswordRequest}) {
    return this._passwordRepository
      .resetPassword({
        resetPasswordRequest
      })
      .then(([error, result]) => {
        if (error) {
          throw error
        }
        return result
      })
  }
}
