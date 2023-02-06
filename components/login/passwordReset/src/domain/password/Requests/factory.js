import {PasswordErrorsFactory} from '../Errors/factory.js'
import {ChangePasswordRequest} from './ChangePasswordRequest.js'
import {ResetPasswordRequest} from './ResetPasswordRequest.js'

export class PasswordRequestsFactory {
  static changePasswordRequest = ({password, token}) =>
    new ChangePasswordRequest({password, token})

  static resetPasswordRequest = ({email}) => {
    ResetPasswordRequest.validate({
      email,
      emptyEmailPasswordErrorFactory:
        PasswordErrorsFactory.emptyEmailPasswordError,
      invalidEmailPasswordErrorFactory:
        PasswordErrorsFactory.invalidEmailPasswordError
    })
    return new ResetPasswordRequest({email})
  }
}
