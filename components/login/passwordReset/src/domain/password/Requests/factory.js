import {ResetPasswordRequest} from './ResetPasswordRequest.js'

export class PasswordRequestsFactory {
  static resetPasswordRequest = ({email}) => new ResetPasswordRequest({email})
}
