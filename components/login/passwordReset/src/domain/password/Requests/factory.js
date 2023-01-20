import {ChangePasswordRequest} from './ChangePasswordRequest.js'
import {ResetPasswordRequest} from './ResetPasswordRequest.js'

export class PasswordRequestsFactory {
  static changePasswordRequest = ({password, token}) =>
    new ChangePasswordRequest({password, token})

  static resetPasswordRequest = ({email}) => new ResetPasswordRequest({email})
}
