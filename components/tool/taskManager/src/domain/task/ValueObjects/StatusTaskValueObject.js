import {EnumSharedValueObject} from '../../shared/ValueObjects/EnumSharedValueObject.js'

export class StatusTaskValueObject extends EnumSharedValueObject {
  constructor({config, value}) {
    super({availableValues: config.get('AVAILABLE_STATUS'), value})
  }
}
