import {Service} from '@s-ui/domain'

export class SetWorkPercentageTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({taskId, workId, percentage} = {}) {
    const work = this._taskRepository.getWork(taskId, workId)
    work._percentage.set(percentage)
    return this._taskRepository.updateWork(work)
  }
}
