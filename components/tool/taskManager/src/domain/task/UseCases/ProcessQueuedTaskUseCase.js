import {UseCase} from '@s-ui/domain'

export class ProcessQueuedTaskUseCase extends UseCase {
  constructor({config, processQueuedTaskServiceFactory}) {
    super()
    this._config = config
    this._processQueuedTaskServiceFactory = processQueuedTaskServiceFactory
  }

  execute({localState} = {}) {
    const result = this._processQueuedTaskServiceFactory({
      config: this._config,
      localState
    }).execute()
    return result
  }
}
