import {EmptyEmailPasswordError} from './EmptyEmailPasswordError.js'
import {InvalidEmailPasswordError} from './InvalidEmailPasswordError.js'
import {PasswordError} from './PasswordError.js'
export class PasswordErrorsFactory {
  static passwordError = msg => new PasswordError(msg)
  static emptyEmailPasswordError = () => new EmptyEmailPasswordError()
  static invalidEmailPasswordError = () => new InvalidEmailPasswordError()
}
