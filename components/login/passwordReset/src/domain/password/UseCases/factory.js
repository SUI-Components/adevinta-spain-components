import {PasswordRequestsFactory} from '../Requests/factory.js'
import {PasswordServicesFactory} from '../Services/factory.js'
import {ChangePasswordUseCase} from './ChangePasswordUseCase.js'
import {ResetPasswordUseCase} from './ResetPasswordUseCase.js'
import {ValidateEmailPasswordUseCase} from './ValidateEmailPasswordUseCase.js'
import {ValidatePasswordUseCase} from './ValidatePasswordUseCase.js'

export default class PasswordUseCasesFactory {
  static changePasswordUseCase = ({config}) =>
    new ChangePasswordUseCase({
      config,
      changePasswordService: PasswordServicesFactory.changePasswordService({
        config
      }),
      changePasswordRequest: PasswordRequestsFactory.changePasswordRequest
    })

  static resetPasswordUseCase = ({config}) =>
    new ResetPasswordUseCase({
      config,
      resetPasswordService: PasswordServicesFactory.resetPasswordService({
        config
      }),
      resetPasswordRequest: PasswordRequestsFactory.resetPasswordRequest
    })

  static validateEmailPasswordUseCase = ({config}) =>
    new ValidateEmailPasswordUseCase({
      config,
      resetPasswordRequest: PasswordRequestsFactory.resetPasswordRequest
    })

  static validatePasswordUseCase = ({config}) =>
    new ValidatePasswordUseCase({
      config,
      changePasswordRequest: PasswordRequestsFactory.changePasswordRequest
    })
}
