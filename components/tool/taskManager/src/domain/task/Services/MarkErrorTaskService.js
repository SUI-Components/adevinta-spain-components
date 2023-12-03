import {Service} from '@s-ui/domain'

export class MarkErrorTaskService extends Service {
  constructor({config, taskRepository}) {
    super()
    this._config = config
    this._taskRepository = taskRepository
  }

  getErroredWorkFromTask(task) {
    return task._work.getWork().filter(work => work._status.getValue() === this._config.get('AVAILABLE_STATUS').ERROR)
  }

  execute() {
    const tasks = this._taskRepository.getInProgressTasks()

    const updatedTasks = tasks.map(task => {
      const erroredWork = this.getErroredWorkFromTask(task)

      if (erroredWork.length === 0) {
        return task
      }

      task.markAsError()

      return task
    })

    return this._taskRepository.updateTasks(updatedTasks)
  }
}
