import {PasswordRepositoriesFactory} from '../Repositories/factory.js'
import {ResetPasswordService} from './ResetPasswordService.js'

export class PasswordServicesFactory {
  static resetPasswordService = ({config}) =>
    new ResetPasswordService({
      passwordRepository: PasswordRepositoriesFactory.hTTPPasswordRepository({
        config
      })
    })
}
