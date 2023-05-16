import {Entity} from '@s-ui/domain'

export class TaskEntity extends Entity {
  constructor({
    config,
    createdAt,
    finishedAt,
    id,
    log,
    name,
    priority,
    status,
    updatedAt,
    work
  }) {
    super({
      config,
      createdAt,
      finishedAt,
      id,
      log,
      name,
      priority,
      status,
      updatedAt,
      work
    })
  }

  markAsCompleted() {
    this._status.setValue(this._config.get('AVAILABLE_STATUS').COMPLETED)
    this._finishedAt.set(new Date())
    this._updatedAt.set(new Date())
  }

  markAsInProgress() {
    this._status.setValue(this._config.get('AVAILABLE_STATUS').IN_PROGRESS)
    this._updatedAt.set(new Date())
  }

  markAsError() {
    this._status.setValue(this._config.get('AVAILABLE_STATUS').ERROR)
    this._updatedAt.set(new Date())
  }

  hasInProgressWork() {
    return this._work.hasInProgressWork()
  }

  getQueuedWork() {
    return this._work.getQueuedWork()
  }

  toJSON() {
    return {
      createdAt: this._createdAt.toJSON(),
      finishedAt: this._finishedAt.toJSON(),
      id: this._id.toJSON(),
      log: this._log.toJSON(),
      name: this._name.toJSON(),
      priority: this._priority.toJSON(),
      status: this._status.toJSON(),
      updatedAt: this._updatedAt.toJSON(),
      work: this._work.toJSON()
    }
  }
}
