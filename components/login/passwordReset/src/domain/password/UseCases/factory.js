import {ResetPasswordUseCase} from './ResetPasswordUseCase.js'
import {PasswordServicesFactory} from '../Services/factory.js'

export default class PasswordUseCasesFactory {
  static resetPasswordUseCase = ({config}) =>
    new ResetPasswordUseCase({
      config,
      resetPasswordService: PasswordServicesFactory.resetPasswordService({config})
    })
}
