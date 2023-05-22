import {Service} from '@s-ui/domain'

export class CancelWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({taskId, workId} = {}) {
    const work = this._taskRepository.getWork(taskId, workId)
    work._status.setCancelled()
    work._finishedAt.setNow()
    return this._taskRepository.updateWork(work)
  }
}
