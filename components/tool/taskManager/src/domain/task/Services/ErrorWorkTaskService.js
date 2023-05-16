import {Service} from '@s-ui/domain'

export class ErrorWorkTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute({log, workId} = {}) {
    const work = this._taskRepository.getWork(workId)
    work._log.set(log)
    work._status.setValue(this._config.get('AVAILABLE_STATUS').ERROR)
    work._finishedAt.set(new Date())
    const callback = work._onError.get()
    callback(work.toJSON())
    return this._taskRepository.updateWork(work)
  }
}
