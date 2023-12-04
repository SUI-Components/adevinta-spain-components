import {Entity} from '@s-ui/domain'
export class WorkTaskEntity extends Entity {
  constructor({
    canBeInterrupted,
    config,
    createdAt,
    finishedAt,
    id,
    isVisible,
    log,
    name,
    onComplete,
    onError,
    parentId,
    percentage,
    result,
    retryAttempts,
    start,
    status,
    taskId,
    updatedAt
  }) {
    super({
      canBeInterrupted,
      config,
      createdAt,
      finishedAt,
      id,
      isVisible,
      log,
      name,
      onComplete,
      onError,
      parentId,
      percentage,
      result,
      retryAttempts,
      start,
      status,
      taskId,
      updatedAt
    })
  }

  isInProgress() {
    if (this._status.getValue() === this._config.get('AVAILABLE_STATUS').IN_PROGRESS) return true

    return false
  }

  isCompleted() {
    if (this._status.getValue() === this._config.get('AVAILABLE_STATUS').COMPLETED) return true

    return false
  }

  isQueued() {
    if (this._status.getValue() === this._config.get('AVAILABLE_STATUS').QUEUED) return true

    return false
  }

  isVisible() {
    return this._isVisible
  }

  areDependenciesMet(siblingWorkList) {
    if (this._parentId.isEmpty()) return true

    const parent = siblingWorkList.getById(this._parentId)

    if (parent === undefined || parent.isCompleted()) return true

    return false
  }

  retry() {
    this._retryAttempts.decreaseBy(1)
    this._percentage.set(0)
    this._status.setQueued()
  }

  markAsError(log) {
    this._log.set(log)

    if (this._retryAttempts.get() > 0) return this.retry()

    this._status.setError()
    this._finishedAt.setNow()
    const errorCallback = this._onError.get()
    errorCallback(this.toJSON())
  }

  markAsCompleted(result) {
    this._status.setCompleted()
    this._percentage.set(100)
    this._finishedAt.setNow()
    this._result.set(result)

    const callback = this._onComplete.get()
    callback(this.toJSON())
  }

  execute() {
    this._status.setInProgress()

    const startCallback = this._start.get()
    startCallback(this.toJSON())
  }

  toJSON() {
    return {
      canBeInterrupted: this._canBeInterrupted,
      createdAt: this._createdAt.toJSON(),
      finishedAt: this._finishedAt.toJSON(),
      id: this._id.toJSON(),
      isVisible: this._isVisible,
      log: this._log.toJSON(),
      name: this._name.toJSON(),
      onComplete: this._onComplete.toJSON(),
      onError: this._onError.toJSON(),
      parentId: this._parentId.toJSON(),
      percentage: this._percentage.toJSON(),
      result: this._result.toJSON(),
      retryAttempts: this._retryAttempts.toJSON(),
      start: this._start.toJSON(),
      status: this._status.toJSON(),
      taskId: this._taskId.toJSON(),
      updatedAt: this._updatedAt.toJSON()
    }
  }
}
