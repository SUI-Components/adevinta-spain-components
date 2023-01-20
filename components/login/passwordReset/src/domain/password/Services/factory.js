import {PasswordRepositoriesFactory} from '../Repositories/factory.js'
import {ChangePasswordService} from './ChangePasswordService.js'
import {ResetPasswordService} from './ResetPasswordService.js'

export class PasswordServicesFactory {
  static changePasswordService = ({config}) =>
    new ChangePasswordService({
      passwordRepository: PasswordRepositoriesFactory.hTTPPasswordRepository({
        config
      })
    })

  static resetPasswordService = ({config}) =>
    new ResetPasswordService({
      passwordRepository: PasswordRepositoriesFactory.hTTPPasswordRepository({
        config
      })
    })
}
