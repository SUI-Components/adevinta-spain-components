import {inlineError} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

export class ChangePasswordUseCase extends UseCase {
  constructor({config, changePasswordService, changePasswordRequest}) {
    super()
    this._config = config
    this._changePasswordService = changePasswordService
    this._changePasswordRequest = changePasswordRequest
  }

  @inlineError
  async execute({password, token}) {
    const changePasswordRequest = new this._changePasswordRequest({
      password,
      token
    })
    const [error, result] = await this._changePasswordService.execute({
      changePasswordRequest
    })
    if (error) {
      throw error
    }
    return result
  }
}
