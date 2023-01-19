//import {SitesRepositoriesFactory} from '../Repositories/factory.js'
//import {SitesValueObjectsFactory} from '../ValueObjects/factory.js'
import {ResetPasswordService} from './ResetPasswordService.js'

export class PasswordServicesFactory {
  static resetPasswordService = ({config}) =>
    new ResetPasswordService({
      /*passwordRepository: PasswordRepositoriesFactory.HTTPPasswordRepository({config})*/
    })
}
