import {GetVendorListUseCase} from './GetVendorListUseCase'
import {LoadUserConsentUseCase} from './LoadUserConsentUseCase'
import {LoadConsentDraftUseCase} from './LoadConsentDraftUseCase'
import {SaveUserConsentUseCase} from './SaveUserConsentUseCase'
import {UiVisibleUseCase} from './UiVisibleUseCase'
import {UpdateConsentPurposeUseCase} from './UpdateConsentPurposeUseCase'
import {UpdateConsentSpecialFeatureUseCase} from './UpdateConsentSpecialFeatureUseCase'
import {UpdateConsentVendorUseCase} from './UpdateConsentVendorUseCase'

export function getVendorListUseCaseFactory({repository}) {
  return new GetVendorListUseCase({
    repository
  })
}

export function loadUserConsentUseCaseFactory({repository}) {
  return new LoadUserConsentUseCase({
    repository
  })
}

export function loadConsentDraftUseCaseFactory({repository}) {
  return new LoadConsentDraftUseCase({
    repository
  })
}

export function saveUserConsentUseCaseFactory({repository}) {
  return new SaveUserConsentUseCase({
    repository
  })
}

export function uiVisibleUseCaseFactory({repository}) {
  return new UiVisibleUseCase({
    repository
  })
}

export function updateConsentPurposeUseCaseFactory({repository}) {
  return new UpdateConsentPurposeUseCase({repository})
}

export function updateConsentSpecialFeatureUseCaseFactory({repository}) {
  return new UpdateConsentSpecialFeatureUseCase({repository})
}

export function updateConsentVendorUseCaseFactory({repository}) {
  return new UpdateConsentVendorUseCase({repository})
}
