import {inlineError} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

export class ValidateEmailPasswordUseCase extends UseCase {
  constructor({config, resetPasswordRequest}) {
    super()
    this._config = config
    this._resetPasswordRequest = resetPasswordRequest
  }

  @inlineError
  async execute({email}) {
    this._resetPasswordRequest({email})
    return true
  }
}
