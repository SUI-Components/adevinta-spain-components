import {ResetPasswordUseCase} from './ResetPasswordUseCase.js'

export default class PasswordUseCasesFactory {
  static resetPasswordUseCase = ({config}) =>
    new ResetPasswordUseCase({
      config
    })
}
