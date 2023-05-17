import {UseCase} from '@s-ui/domain'

export class ErrorWorkTaskUseCase extends UseCase {
  constructor({config, errorWorkTaskServiceFactory}) {
    super()
    this._config = config
    this._errorWorkTaskServiceFactory = errorWorkTaskServiceFactory
  }

  execute({localState, log, workId, taskId} = {}) {
    const result = this._errorWorkTaskServiceFactory({
      config: this._config,
      localState
    }).execute({
      log,
      taskId,
      workId
    })
    return result
  }
}
