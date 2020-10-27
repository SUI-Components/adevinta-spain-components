import {Service} from '../../application/Service'
import {
  saveUserConsentUseCaseFactory,
  loadUserConsentUseCaseFactory,
  getVendorListUseCaseFactory,
  uiVisibleUseCaseFactory,
  updateConsentPurposeUseCaseFactory,
  updateConsentSpecialFeatureUseCaseFactory,
  updateConsentVendorUseCaseFactory,
  loadConsentDraftUseCaseFactory
} from '../../application/service/factory'
import {tcfRepositoryFactory} from '../tcf/factory'

class ServiceInitializer {
  static init({language, reporter, scope} = {}) {
    const tcfRepository = tcfRepositoryFactory({language, reporter, scope})
    const saveUserConsentUseCase = saveUserConsentUseCaseFactory({
      repository: tcfRepository
    })
    const uiVisibleUseCase = uiVisibleUseCaseFactory({
      repository: tcfRepository
    })
    const loadConsentDraftUseCase = loadConsentDraftUseCaseFactory({
      repository: tcfRepository
    })
    const loadUserConsentUseCase = loadUserConsentUseCaseFactory({
      repository: tcfRepository
    })
    const getVendorListUseCase = getVendorListUseCaseFactory({
      repository: tcfRepository
    })
    const updateConsentPurposeUseCase = updateConsentPurposeUseCaseFactory({
      repository: tcfRepository
    })
    const updateConsentSpecialFeatureUseCase = updateConsentSpecialFeatureUseCaseFactory(
      {
        repository: tcfRepository
      }
    )
    const updateConsentVendorUseCase = updateConsentVendorUseCaseFactory({
      repository: tcfRepository
    })
    return new Service({
      saveUserConsentUseCase,
      loadConsentDraftUseCase,
      loadUserConsentUseCase,
      getVendorListUseCase,
      updateConsentPurposeUseCase,
      updateConsentSpecialFeatureUseCase,
      updateConsentVendorUseCase,
      uiVisibleUseCase
    })
  }
}

export {ServiceInitializer}
