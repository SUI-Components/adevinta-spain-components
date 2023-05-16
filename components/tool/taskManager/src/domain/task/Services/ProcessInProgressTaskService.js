import {Service} from '@s-ui/domain'

export class ProcessInProgressTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute() {
    const tasks = this._taskRepository.getInProgressTasks()
    const updatedTasks = tasks.map(task => {
      if (task.hasInProgressWork()) return task
      const queuedWork = task.getQueuedWork()

      if (queuedWork.length === 0) {
        task.markAsCompleted()
        return task
      }

      queuedWork[0].execute()
      return task
    })
    return this._taskRepository.updateTasks(updatedTasks)
  }
}
