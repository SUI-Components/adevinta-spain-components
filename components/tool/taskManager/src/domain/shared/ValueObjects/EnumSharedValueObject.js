import {ValueObject} from '@s-ui/domain'

export class EnumSharedValueObject extends ValueObject {
  getValue() {
    return this._value
  }

  setValue(value) {
    this._value = value
    this.validate()
  }

  getAvailableValues() {
    return this._availableValues
  }

  setAvailableValues(availableValues) {
    this._availableValues = availableValues
  }

  validate() {
    if (Object.values(this._availableValues).includes(this._value) === false) {
      throw new Error(`${this._value} is not an available value`)
    }
  }

  toJSON() {
    return this._value
  }
}
