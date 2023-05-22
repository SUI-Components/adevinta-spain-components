import {Service} from '@s-ui/domain'

export class ErrorWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({log, taskId, workId} = {}) {
    const work = this._taskRepository.getWork(taskId, workId)
    work.markAsError(log)
    return this._taskRepository.updateWork(work)
  }
}
