import {Service} from '../../application/Service'
import {
  getVendorListUseCaseFactory,
  loadConsentDraftUseCaseFactory,
  loadUserConsentUseCaseFactory,
  saveFullUserConsentUseCaseFactory,
  saveUserConsentUseCaseFactory,
  uiVisibleUseCaseFactory,
  updateConsentPurposeUseCaseFactory,
  updateConsentSpecialFeatureUseCaseFactory,
  updateConsentVendorUseCaseFactory
} from '../../application/service/factory'
import {tcfRepositoryFactory} from '../tcf/factory'

export class ServiceInitializer {
  static init({language, reporter, scope} = {}) {
    const tcfRepository = tcfRepositoryFactory({language, reporter, scope})
    const saveUserConsentUseCase = saveUserConsentUseCaseFactory({
      repository: tcfRepository
    })
    const saveFullUserConsentUseCase = saveFullUserConsentUseCaseFactory({
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
      getVendorListUseCase,
      loadConsentDraftUseCase,
      loadUserConsentUseCase,
      saveFullUserConsentUseCase,
      saveUserConsentUseCase,
      uiVisibleUseCase,
      updateConsentPurposeUseCase,
      updateConsentSpecialFeatureUseCase,
      updateConsentVendorUseCase
    })
  }
}
