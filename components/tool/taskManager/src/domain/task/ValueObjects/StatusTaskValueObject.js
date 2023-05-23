import {EnumSharedValueObject} from '../../shared/ValueObjects/EnumSharedValueObject.js'

export class StatusTaskValueObject extends EnumSharedValueObject {
  constructor({config, value}) {
    super({availableValues: config.get('AVAILABLE_STATUS'), value})
  }

  setCompleted() {
    this.setValue(this.getAvailableValues().COMPLETED)
  }

  setInProgress() {
    this.setValue(this.getAvailableValues().IN_PROGRESS)
  }

  setError() {
    this.setValue(this.getAvailableValues().ERROR)
  }

  setQueued() {
    this.setValue(this.getAvailableValues().QUEUED)
  }

  setCancelled() {
    this.setValue(this.getAvailableValues().CANCELLED)
  }
}
