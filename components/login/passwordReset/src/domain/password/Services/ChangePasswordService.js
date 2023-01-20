import {inlineError} from '@s-ui/decorators'
import {Service} from '@s-ui/domain'

export class ChangePasswordService extends Service {
  constructor({passwordRepository} = {}) {
    super()
    this._passwordRepository = passwordRepository
  }

  @inlineError
  execute({changePasswordRequest}) {
    return this._passwordRepository
      .changePassword({
        changePasswordRequest
      })
      .then(([error, result]) => {
        if (error) {
          throw error
        }
        return result
      })
  }
}
