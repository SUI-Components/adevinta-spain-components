import {ValueObject} from '@s-ui/domain'

export class ChangePasswordRequest extends ValueObject {
  getPassword() {
    return this._password
  }

  getToken() {
    return this._token
  }
}
