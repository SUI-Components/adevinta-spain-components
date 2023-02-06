import {ValueObject} from '@s-ui/domain'

export class ResetPasswordRequest extends ValueObject {
  getEmail() {
    return this._email
  }

  static validate({
    email,
    emptyEmailPasswordErrorFactory,
    invalidEmailPasswordErrorFactory
  }) {
    if (email.length === 0) {
      throw emptyEmailPasswordErrorFactory()
    }

    const emailRegex =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const isValidEmail = emailRegex.test(email)

    if (!isValidEmail) {
      throw invalidEmailPasswordErrorFactory()
    }
  }
}
