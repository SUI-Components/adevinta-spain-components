import {TaskRepository} from './TaskRepository.js'

export class LocalStateTaskRepository extends TaskRepository {
  constructor({config, localState, taskEntityFactory, workTaskEntityFactory}) {
    super()
    this._config = config
    this._localState = localState
    this._taskEntityFactory = taskEntityFactory
    this._workTaskEntityFactory = workTaskEntityFactory
  }

  saveTask(task) {
    const updatedState = {
      ...this._localState,
      tasks: [...this._localState.tasks]
    }

    updatedState.tasks.unshift(task.toJSON())

    return updatedState
  }

  getWork(taskId, workId) {
    const parentTask = this._localState.tasks.find(task => task.id === taskId)
    if (parentTask === undefined) return null

    const work = parentTask.work.find(work => work.id === workId)
    if (work === undefined) return null

    const workEntity = this._workTaskEntityFactory({
      config: this._config,
      ...work
    })

    return workEntity
  }

  updateWork(workEntity) {
    const updatedState = {
      ...this._localState,
      tasks: [...this._localState.tasks]
    }

    const parentTaskIndex = updatedState.tasks.findIndex(
      task => task.id === workEntity._taskId.get()
    )

    if (parentTaskIndex === -1) return this._localState

    const currentWorkIndex = updatedState.tasks[parentTaskIndex].work.findIndex(
      work => work.id === workEntity._id.get()
    )
    if (currentWorkIndex === -1) return this._localState

    updatedState.tasks[parentTaskIndex].work[currentWorkIndex] =
      workEntity.toJSON()

    return updatedState
  }

  _getTasksFilteredByStatus(status) {
    const tasks = this._localState.tasks
      .filter(task => task.status === status)
      .map(task => this._taskEntityFactory({config: this._config, ...task}))
    return tasks
  }

  getNonStartedTasks() {
    return this._getTasksFilteredByStatus(
      this._config.get('AVAILABLE_STATUS').QUEUED
    )
  }

  getInProgressTasks() {
    return this._getTasksFilteredByStatus(
      this._config.get('AVAILABLE_STATUS').IN_PROGRESS
    )
  }

  updateTasks(tasks) {
    const updatedState = {
      ...this._localState,
      tasks: [...this._localState.tasks]
    }

    tasks.forEach(task => {
      const parentTaskIndex = updatedState.tasks.findIndex(
        existingTask => existingTask.id === task._id.get()
      )
      if (parentTaskIndex !== -1) {
        updatedState.tasks[parentTaskIndex] = task.toJSON()
      }
    })
    return updatedState
  }
}
