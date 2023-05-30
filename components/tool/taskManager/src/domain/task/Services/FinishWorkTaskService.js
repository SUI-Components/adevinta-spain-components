import {Service} from '@s-ui/domain'

export class FinishWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({taskId, workId, result} = {}) {
    const work = this._taskRepository.getWork(taskId, workId)
    work.markAsCompleted(result)
    return this._taskRepository.updateWork(work)
  }
}
