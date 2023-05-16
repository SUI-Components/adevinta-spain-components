import {UseCase} from '@s-ui/domain'

export class MarkErrorTaskUseCase extends UseCase {
  constructor({config, markErrorTaskServiceFactory}) {
    super()
    this._config = config
    this._markErrorTaskServiceFactory = markErrorTaskServiceFactory
  }

  execute({localState} = {}) {
    const result = this._markErrorTaskServiceFactory({
      config: this._config,
      localState
    }).execute()
    return result
  }
}
