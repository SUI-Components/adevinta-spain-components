import {Entity} from '@s-ui/domain'
export class WorkTaskEntity extends Entity {
  constructor({
    autoRetry,
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
    updatedAt
  }) {
    super({
      autoRetry,
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

  isQueued() {
    if (this._status.getValue() === this._config.get('AVAILABLE_STATUS').QUEUED)
      return true

    return false
  }

  execute() {
    this._status.setValue(this._config.get('AVAILABLE_STATUS').IN_PROGRESS)

    const startCallback = this._start.get()
    startCallback(this.toJSON())
  }

  toJSON() {
    return {
      autoRetry: this._autoRetry.toJSON(),
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
      updatedAt: this._updatedAt.toJSON()
    }
  }
}
