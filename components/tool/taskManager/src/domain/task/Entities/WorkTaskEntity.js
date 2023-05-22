import {Entity} from '@s-ui/domain'
export class WorkTaskEntity extends Entity {
  constructor({
    retryAttempts,
    config,
    createdAt,
    finishedAt,
    id,
    log,
    name,
    onComplete,
    onError,
    parentId,
    percentage,
    start,
    status,
    taskId,
    updatedAt
  }) {
    super({
      retryAttempts,
      config,
      createdAt,
      finishedAt,
      id,
      log,
      name,
      onComplete,
      onError,
      parentId,
      percentage,
      start,
      status,
      taskId,
      updatedAt
    })
  }

  isInProgress() {
    if (
      this._status.getValue() ===
      this._config.get('AVAILABLE_STATUS').IN_PROGRESS
    )
      return true

    return false
  }

  isCompleted() {
    if (
      this._status.getValue() === this._config.get('AVAILABLE_STATUS').COMPLETED
    )
      return true

    return false
  }

  isQueued() {
    if (this._status.getValue() === this._config.get('AVAILABLE_STATUS').QUEUED)
      return true

    return false
  }

  areDependenciesMet(siblingWorkList) {
    if (this._parentId.get() === null) return true

    const parent = siblingWorkList.getById(this._parentId)

    if (parent === undefined || parent.isCompleted()) return true

    return false
  }

  retry() {
    this._retryAttempts.decreaseBy(1)
    this._percentage.set(0)
    this._status.setValue(this._config.get('AVAILABLE_STATUS').QUEUED)
  }

  markAsError(log) {
    this._log.set(log)

    if (this._retryAttempts.get() > 0) return this.retry()

    this._status.setValue(this._config.get('AVAILABLE_STATUS').ERROR)
    this._finishedAt.set(new Date())
    const errorCallback = this._onError.get()
    errorCallback(this.toJSON())
  }

  execute() {
    this._status.setValue(this._config.get('AVAILABLE_STATUS').IN_PROGRESS)

    const startCallback = this._start.get()
    startCallback(this.toJSON())
  }

  toJSON() {
    return {
      retryAttempts: this._retryAttempts.toJSON(),
      createdAt: this._createdAt.toJSON(),
      finishedAt: this._finishedAt.toJSON(),
      id: this._id.toJSON(),
      log: this._log.toJSON(),
      name: this._name.toJSON(),
      onComplete: this._onComplete.toJSON(),
      onError: this._onError.toJSON(),
      parentId: this._parentId.toJSON(),
      percentage: this._percentage.toJSON(),
      start: this._start.toJSON(),
      status: this._status.toJSON(),
      taskId: this._taskId.toJSON(),
      updatedAt: this._updatedAt.toJSON()
    }
  }
}
