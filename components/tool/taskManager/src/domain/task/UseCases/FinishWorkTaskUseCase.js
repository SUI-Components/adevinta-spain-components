import {UseCase} from '@s-ui/domain'

export class FinishWorkTaskUseCase extends UseCase {
  constructor({config, finishWorkTaskServiceFactory}) {
    super()
    this._config = config
    this._finishWorkTaskServiceFactory = finishWorkTaskServiceFactory
  }

  execute({localState, workId} = {}) {
    const result = this._finishWorkTaskServiceFactory({
      config: this._config,
      localState
    }).execute({
      workId
    })
    return result
  }
}
