import {ValueObject} from '@s-ui/domain'

export class CallbackSharedValueObject extends ValueObject {
  get() {
    return this._callback
  }

  set(callback) {
    this._callback = callback
  }

  toJSON() {
    return this._callback
  }
}
