import {UseCase} from '@s-ui/domain'
export class RunSimpleTaskUseCase extends UseCase {
  constructor({config, runSimpleTaskServiceFactory}) {
    super()
    this._config = config
    this._runSimpleTaskServiceFactory = runSimpleTaskServiceFactory
  }

  execute({localState, isVisible, name, onComplete, onError, start} = {}) {
    const result = this._runSimpleTaskServiceFactory({
      config: this._config,
      localState
    }).execute({
      isVisible,
      name,
      onComplete,
      onError,
      start
    })
    return result
  }
}
