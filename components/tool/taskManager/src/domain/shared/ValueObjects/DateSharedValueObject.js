import {ValueObject} from '@s-ui/domain'

export class DateSharedValueObject extends ValueObject {
  get() {
    return this._date
  }

  set(date) {
    this._date = date
  }

  toJSON() {
    return this._date
  }
}
