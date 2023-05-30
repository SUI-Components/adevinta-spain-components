import {ValueObject} from '@s-ui/domain'

export class WorkResultTaskValueObject extends ValueObject {
  get() {
    return this._result
  }

  set(result) {
    this._result = result
  }

  toJSON() {
    return this.get()
  }
}
