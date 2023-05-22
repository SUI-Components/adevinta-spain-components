import {Entity} from '@s-ui/domain'

export class TaskEntity extends Entity {
  constructor({
    config,
    createdAt,
    finishedAt,
    id,
    log,
    name,
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
      status,
      updatedAt,
      work
    })
  }

  markAsCompleted() {
    this._status.setCompleted()
    this._finishedAt.setNow()
    this._updatedAt.setNow()
  }

  markAsInProgress() {
    this._status.setInProgress()
    this._updatedAt.setNow()
  }

  markAsError() {
    this._status.setError()
    this._updatedAt.setNow()
  }

  hasInProgressWork() {
    return this._work.hasInProgressWork()
  }

  getRunnableWork() {
    return this._work.getRunnableWork()
  }

  toJSON() {
    return {
      createdAt: this._createdAt.toJSON(),
      finishedAt: this._finishedAt.toJSON(),
      id: this._id.toJSON(),
      log: this._log.toJSON(),
      name: this._name.toJSON(),
      status: this._status.toJSON(),
      updatedAt: this._updatedAt.toJSON(),
      work: this._work.toJSON()
    }
  }
}
