import {Service} from '@s-ui/domain'

export class ProcessQueuedTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  execute() {
    const tasks = this._taskRepository.getNonStartedTasks()

    const updatedTasks = tasks.map(task => {
      const queuedWork = task.getQueuedWork()

      if (queuedWork.length === 0) {
        task.markAsCompleted()
        return task
      }

      task.markAsInProgress()
      queuedWork[0].execute()
      return task
    })

    return this._taskRepository.updateTasks(updatedTasks)
  }
}
