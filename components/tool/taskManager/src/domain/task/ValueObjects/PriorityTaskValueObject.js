import {EnumSharedValueObject} from '../../shared/ValueObjects/EnumSharedValueObject.js'

export class PriorityTaskValueObject extends EnumSharedValueObject {
  constructor({config, value}) {
    super({availableValues: config.get('AVAILABLE_PRIORITIES'), value})
  }
}
