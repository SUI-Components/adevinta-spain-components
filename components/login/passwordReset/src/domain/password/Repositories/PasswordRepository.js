import {Repository} from '@s-ui/domain'

export class PasswordRepository extends Repository {
  changePassword() {
    throw new Error('[PasswordRepository#changePassword] must be implemented')
  }

  resetPassword() {
    throw new Error('[PasswordRepository#resetPassword] must be implemented')
  }
}
