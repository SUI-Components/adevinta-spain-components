import {TcfServicesUseCasesFactory} from './service/factory'

class Service {
  constructor() {
    this._sendConsentsUseCase = TcfServicesUseCasesFactory.sendConsentUseCase()
  }

  sendConsents() {
    return this._sendConsentsUseCase.execute()
  }
}

export {Service}
