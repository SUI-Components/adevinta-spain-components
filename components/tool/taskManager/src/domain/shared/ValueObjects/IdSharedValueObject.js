import {ValueObject} from '@s-ui/domain'

export class IdSharedValueObject extends ValueObject {
  get() {
    return this._id
  }

  set(id) {
    this._id = id
  }

  static generateId() {
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, c =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    )
  }

  toJSON() {
    return this._id
  }
}
