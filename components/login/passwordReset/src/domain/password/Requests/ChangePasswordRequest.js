import {ValueObject} from '@s-ui/domain'

export class ChangePasswordRequest extends ValueObject {
  getPassword() {
    return this._password
  }

  getToken() {
    return this._token
  }

  static validate({
    password,
    emptyPasswordErrorFactory,
    invalidPasswordErrorFactory
  }) {
    if (password.length === 0) {
      throw emptyPasswordErrorFactory()
    }

    const isValidPassword = password.length >= 8

    if (!isValidPassword) {
      throw invalidPasswordErrorFactory()
    }
  }
}
