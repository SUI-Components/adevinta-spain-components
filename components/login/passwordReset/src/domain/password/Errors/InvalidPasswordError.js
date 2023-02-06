import {PasswordError} from './PasswordError.js'
export class InvalidPasswordError extends PasswordError {
  constructor() {
    super(`Password is not valid`)
  }
}
