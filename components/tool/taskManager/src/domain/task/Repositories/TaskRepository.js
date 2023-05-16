import {Repository} from '@s-ui/domain'

export class TaskRepository extends Repository {
  saveTask() {
    throw new Error('[TaskRepository#saveTask] must be implemented')
  }

  getWork() {
    throw new Error('[TaskRepository#getWork] must be implemented')
  }

  updateWork() {
    throw new Error('[TaskRepository#updateWork] must be implemented')
  }

  getNonStartedTasks() {
    throw new Error('[TaskRepository#getNonStartedTasks] must be implemented')
  }

  getInProgressTasks() {
    throw new Error('[TaskRepository#getInProgressTasks] must be implemented')
  }

  updateTasks() {
    throw new Error('[TaskRepository#updateTasks] must be implemented')
  }
}
