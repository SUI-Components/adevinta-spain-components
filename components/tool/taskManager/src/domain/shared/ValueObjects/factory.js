import {CallbackSharedValueObject} from './CallbackSharedValueObject.js'
import {DateSharedValueObject} from './DateSharedValueObject.js'
import {EnumSharedValueObject} from './EnumSharedValueObject.js'
import {IdSharedValueObject} from './IdSharedValueObject.js'
import {NumberSharedValueObject} from './NumberSharedValueObject.js'
import {StringSharedValueObject} from './StringSharedValueObject.js'

const NO_OP = () => null
export class SharedValueObjectsFactory {
  static callbackSharedValueObject = (callback = NO_OP) =>
    new CallbackSharedValueObject({
      callback
    })

  static dateSharedValueObject = (date = new Date()) =>
    new DateSharedValueObject({
      date
    })

  static enumSharedValueObject = (availableValues, value) => {
    const enumerated = new EnumSharedValueObject({availableValues, value})
    enumerated.validate()

    return enumerated
  }

  static idSharedValueObject = (id = IdSharedValueObject.generateId()) =>
    new IdSharedValueObject({
      id
    })

  static stringSharedValueObject = (string = '') =>
    new StringSharedValueObject({
      string
    })

  static numberSharedValueObject = (number = 0) =>
    new NumberSharedValueObject({
      number
    })
}
