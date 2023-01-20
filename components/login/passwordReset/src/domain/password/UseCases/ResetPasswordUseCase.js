import {inlineError} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

export class ResetPasswordUseCase extends UseCase {
  constructor({config, resetPasswordService, resetPasswordRequest}) {
    super()
    this._config = config
    this._resetPasswordService = resetPasswordService
    this._resetPasswordRequest = resetPasswordRequest
  }

  @inlineError
  async execute({email}) {
    const resetPasswordRequest = new this._resetPasswordRequest({email})
    const [error, result] = await this._resetPasswordService.execute({
      resetPasswordRequest
    })
    if (error) {
      throw error
    }
    return result
  }
}
