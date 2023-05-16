import {UseCase} from '@s-ui/domain'
export class RunTaskUseCase extends UseCase {
  constructor({config, runTaskServiceFactory}) {
    super()
    this._config = config
    this._runTaskServiceFactory = runTaskServiceFactory
  }

  execute({localState, name, priority, work} = {}) {
    const result = this._runTaskServiceFactory({
      config: this._config,
      localState
    }).execute({
      name,
      priority,
      work
    })
    return result
  }
}
