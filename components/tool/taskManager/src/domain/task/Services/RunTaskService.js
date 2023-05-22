import {Service} from '@s-ui/domain'

export class RunTaskService extends Service {
  constructor({config, taskEntityFactory, taskRepository}) {
    super()
    this._config = config
    this._taskEntityFactory = taskEntityFactory
    this._taskRepository = taskRepository
  }

  execute({name, work} = {}) {
    const withConfigWork = work.map(workItem => ({
      ...workItem,
      config: this._config
    }))

    const task = this._taskEntityFactory({
      config: this._config,
      name,
      work: withConfigWork
    })
    return this._taskRepository.saveTask(task)
  }
}
