import {ValueObject} from '@s-ui/domain'

export class StringSharedValueObject extends ValueObject {
  get() {
    return this._string
  }

  set(string) {
    this._string = string || ''
  }

  toJSON() {
    return this._string
  }
}
