import {EmptyEmailPasswordError} from './EmptyEmailPasswordError.js'
import {EmptyPasswordError} from './EmptyPasswordError.js'
import {InvalidEmailPasswordError} from './InvalidEmailPasswordError.js'
import {InvalidPasswordError} from './InvalidPasswordError.js'
import {PasswordError} from './PasswordError.js'
export class PasswordErrorsFactory {
  static passwordError = msg => new PasswordError(msg)
  static emptyEmailPasswordError = () => new EmptyEmailPasswordError()
  static invalidEmailPasswordError = () => new InvalidEmailPasswordError()
  static emptyPasswordError = () => new EmptyPasswordError()
  static invalidPasswordError = () => new InvalidPasswordError()
}
