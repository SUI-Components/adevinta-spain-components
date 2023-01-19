import {inlineError} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

export class ResetPasswordUseCase extends UseCase {
  constructor({config, resetPasswordService}) {
    super()
    this._config = config
    this._resetPasswordService = resetPasswordService
  }

  @inlineError
  async execute({
    email
  }) {
    const [error, result] = await this._resetPasswordService.execute({
      email
    })
    if (error) {
      throw error
    }
    return result
  }
}
