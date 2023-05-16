import {ValueObject} from '@s-ui/domain'

export class NumberSharedValueObject extends ValueObject {
  get() {
    return this._number
  }

  set(number) {
    this._number = number
  }

  toJSON() {
    return this._number
  }
}
