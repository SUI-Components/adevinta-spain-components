import {Service} from '@s-ui/domain'

export class FinishWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({taskId, workId} = {}) {
    const work = this._taskRepository.getWork(taskId, workId)
    work._status.setCompleted()
    work._percentage.set(100)
    work._finishedAt.setNow()
    const callback = work._onComplete.get()
    callback(work.toJSON())
    return this._taskRepository.updateWork(work)
  }
}
