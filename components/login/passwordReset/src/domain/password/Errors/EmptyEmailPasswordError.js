import {PasswordError} from './PasswordError.js'
export class EmptyEmailPasswordError extends PasswordError {
  constructor() {
    super(`E-mail is empty`)
  }
}
