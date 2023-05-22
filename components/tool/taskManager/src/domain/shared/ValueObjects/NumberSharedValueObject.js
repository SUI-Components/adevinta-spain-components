import {ValueObject} from '@s-ui/domain'

export class NumberSharedValueObject extends ValueObject {
  get() {
    return this._number
  }

  set(number) {
    this._number = number
  }

  decreaseBy(quantity) {
    this._number -= quantity
  }

  increaseBy(quantity) {
    this._number += quantity
  }

  toJSON() {
    return this._number
  }
}
