import {inlineError} from '@s-ui/decorators'
import {UseCase} from '@s-ui/domain'

export class ResetPasswordUseCase extends UseCase {
  constructor({config}) {
    super()
    this._config = config
  }

  @inlineError
  async execute() {
    return Promise.resolve({
      success: true
    })
  }
}
