import {ValueObject} from '@s-ui/domain'

export class WorkListTaskValueObject extends ValueObject {
  getWork() {
    return this._work
  }

  setWork(work) {
    this._work = work
  }

  getById(idValueObject) {
    return this._work.find(work => work._id.get() === idValueObject.get())
  }

  push(work) {
    this._work.push(work)
  }

  hasInProgressWork() {
    return this._work.some(work => work.isInProgress())
  }

  getRunnableWork() {
    return this._work.filter(
      work => work.isQueued() && work.areDependenciesMet(this)
    )
  }

  toJSON() {
    return this._work.map(work => work.toJSON())
  }
}
