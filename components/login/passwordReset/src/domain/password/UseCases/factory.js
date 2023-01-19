import {PasswordRequestsFactory} from '../Requests/factory.js'
import {PasswordServicesFactory} from '../Services/factory.js'
import {ResetPasswordUseCase} from './ResetPasswordUseCase.js'

export default class PasswordUseCasesFactory {
  static resetPasswordUseCase = ({config}) =>
    new ResetPasswordUseCase({
      config,
      resetPasswordService: PasswordServicesFactory.resetPasswordService({
        config
      }),
      resetPasswordRequest: PasswordRequestsFactory.resetPasswordRequest
    })
}
