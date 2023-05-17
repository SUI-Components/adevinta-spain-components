import {Service} from '@s-ui/domain'

export class FinishWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({taskId, workId} = {}) {
    const work = this._taskRepository.getWork(taskId, workId)
    work._status.setValue(this._config.get('AVAILABLE_STATUS').COMPLETED)
    work._percentage.set(100)
    work._finishedAt.set(new Date())
    const callback = work._onComplete.get()
    callback(work.toJSON())
    return this._taskRepository.updateWork(work)
  }
}
