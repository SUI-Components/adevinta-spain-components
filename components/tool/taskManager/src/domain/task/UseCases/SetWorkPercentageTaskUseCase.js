import {UseCase} from '@s-ui/domain'

export class SetWorkPercentageTaskUseCase extends UseCase {
  constructor({config, setWorkPercentageTaskServiceFactory}) {
    super()
    this._config = config
    this._setWorkPercentageTaskServiceFactory =
      setWorkPercentageTaskServiceFactory
  }

  execute({localState, workId, percentage} = {}) {
    const result = this._setWorkPercentageTaskServiceFactory({
      config: this._config,
      localState
    }).execute({
      workId,
      percentage
    })
    return result
  }
}
