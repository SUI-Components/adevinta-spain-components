import {PasswordError} from './PasswordError.js'
export class InvalidEmailPasswordError extends PasswordError {
  constructor() {
    super(`E-mail is not valid`)
  }
}
