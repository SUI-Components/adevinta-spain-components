import {UseCase} from '@s-ui/domain'

export class CancelWorkTaskUseCase extends UseCase {
  constructor({config, cancelWorkTaskServiceFactory}) {
    super()
    this._config = config
    this._cancelWorkTaskServiceFactory = cancelWorkTaskServiceFactory
  }

  execute({localState, workId} = {}) {
    const result = this._cancelWorkTaskServiceFactory({
      config: this._config,
      localState
    }).execute({
      workId
    })
    return result
  }
}
