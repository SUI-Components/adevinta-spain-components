import {ValueObject} from '@s-ui/domain'

export class WorkListTaskValueObject extends ValueObject {
  getWork() {
    return this._work
  }

  setWork(work) {
    this._work = work
  }

  push(work) {
    this._work.push(work)
  }

  hasInProgressWork() {
    return this._work.some(work => work.isInProgress())
  }

  getQueuedWork() {
    return this._work.filter(work => work.isQueued())
  }

  toJSON() {
    return this._work.map(work => work.toJSON())
  }
}
