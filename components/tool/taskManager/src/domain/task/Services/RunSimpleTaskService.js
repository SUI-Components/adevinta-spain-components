import {streamify} from '@s-ui/decorators'
import {Service} from '@s-ui/domain'
@streamify('execute')
export class RunSimpleTaskService extends Service {
  constructor({config, taskEntityFactory, taskRepository}) {
    super()
    this._config = config
    this._taskEntityFactory = taskEntityFactory
    this._taskRepository = taskRepository
  }

  execute({isVisible, name, onComplete, onError, start} = {}) {
    const work = {
      config: this._config,
      isVisible,
      name,
      onComplete,
      onError,
      start
    }

    const task = this._taskEntityFactory({
      config: this._config,
      name,
      work: [work]
    })
    return this._taskRepository.saveTask(task)
  }
}
