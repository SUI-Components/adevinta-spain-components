import {Service} from '../../application/Service'
import {
  saveUserConsentUseCaseFactory,
  loadUserConsentUseCaseFactory,
  getVendorListUseCaseFactory,
  uiVisibleUseCaseFactory,
  updateUserConsentUseCaseFactory
} from '../../application/service/factory'
import {tcfRepositoryFactory} from '../Tcf/factory'

class ServiceInitializer {
  static init({language = 'es'} = {}) {
    const tcfRepository = tcfRepositoryFactory()
    const saveUserConsentUseCase = saveUserConsentUseCaseFactory({
      repository: tcfRepository
    })
    const uiVisibleUseCase = uiVisibleUseCaseFactory({
      repository: tcfRepository
    })
    const loadUserConsentUseCase = loadUserConsentUseCaseFactory({
      repository: tcfRepository
    })
    const getVendorListUseCase = getVendorListUseCaseFactory({
      repository: tcfRepository
    })
    const updateUserConsentUseCase = updateUserConsentUseCaseFactory({
      repository: tcfRepository
    })
    return new Service({
      saveUserConsentUseCase,
      loadUserConsentUseCase,
      getVendorListUseCase,
      updateUserConsentUseCase,
      uiVisibleUseCase
    })
  }
}

export {ServiceInitializer}
