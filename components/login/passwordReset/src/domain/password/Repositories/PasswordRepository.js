import {Repository} from '@s-ui/domain'

export class PasswordRepository extends Repository {
  constructor({}) {
    super()
  }

  resetPassword() {
    throw new Error('[PasswordRepository#resetPassword] must be implemented')
  }
}
