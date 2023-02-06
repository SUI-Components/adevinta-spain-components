import {inlineError} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

export class ValidatePasswordUseCase extends UseCase {
  constructor({config, changePasswordRequest}) {
    super()
    this._config = config
    this._changePasswordRequest = changePasswordRequest
  }

  @inlineError
  async execute({password}) {
    this._changePasswordRequest({
      password
    })
    return true
  }
}
