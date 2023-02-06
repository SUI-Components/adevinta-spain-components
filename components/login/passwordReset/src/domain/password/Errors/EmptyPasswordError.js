import {PasswordError} from './PasswordError.js'
export class EmptyPasswordError extends PasswordError {
  constructor() {
    super(`Password is empty`)
  }
}
