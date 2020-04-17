import {SendConsentUseCase} from './SendConsentUseCase'
import {TcfServicesRepositoriesFactory} from '../../infrastructure/Tcf/factory'

class TcfServicesUseCasesFactory {
  static sendConsentUseCase() {
    return new SendConsentUseCase({
      repository: TcfServicesRepositoriesFactory.tcfRepository()
    })
  }
}

export {TcfServicesUseCasesFactory}
