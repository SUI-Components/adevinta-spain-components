import {ValueObject} from '@s-ui/domain'

export class ResetPasswordRequest extends ValueObject {
  getEmail() {
    return this._email
  }
}
