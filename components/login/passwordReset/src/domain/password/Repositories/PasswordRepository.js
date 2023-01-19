import {Repository} from '@s-ui/domain'

export class PasswordRepository extends Repository {
  resetPassword() {
    throw new Error('[PasswordRepository#resetPassword] must be implemented')
  }
}
