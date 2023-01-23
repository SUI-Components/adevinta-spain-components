import {PasswordError} from './PasswordError.js'
export class PasswordErrorsFactory {
  static passwordError = msg => new PasswordError(msg)
}
