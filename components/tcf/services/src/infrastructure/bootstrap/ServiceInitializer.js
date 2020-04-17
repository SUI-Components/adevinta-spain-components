import {Service} from '../../application/Service'
import {sendConsentUseCaseFactory} from '../../application/service/factory'
import {tcfRepositoryFactory} from '../Tcf/factory'

class ServiceInitializer {
  static init() {
    const tcfRepository = tcfRepositoryFactory()
    const sendConsentUseCase = sendConsentUseCaseFactory({
      repository: tcfRepository
    })
    return new Service({
      sendConsentUseCase
    })
  }
}

export {ServiceInitializer}
