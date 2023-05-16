import {Service} from '@s-ui/domain'

export class CancelWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({workId} = {}) {
    const work = this._taskRepository.getWork(workId)
    work._status.setValue(this._config.get('AVAILABLE_STATUS').CANCELLED)
    work._finishedAt.set(new Date())
    return this._taskRepository.updateWork(work)
  }
}
