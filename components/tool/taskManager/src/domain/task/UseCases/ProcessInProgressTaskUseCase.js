import {UseCase} from '@s-ui/domain'

export class ProcessInProgressTaskUseCase extends UseCase {
  constructor({config, processInProgressTaskServiceFactory}) {
    super()
    this._config = config
    this._processInProgressTaskServiceFactory = processInProgressTaskServiceFactory
  }

  execute({localState} = {}) {
    const result = this._processInProgressTaskServiceFactory({
      config: this._config,
      localState
    }).execute()
    return result
  }
}
