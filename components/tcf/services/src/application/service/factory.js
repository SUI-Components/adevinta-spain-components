import {GetVendorListUseCase} from './GetVendorListUseCase'
import {LoadUserConsentUseCase} from './LoadUserConsentUseCase'
import {SaveUserConsentUseCase} from './SaveUserConsentUseCase'
import {UiVisibleUseCase} from './UiVisibleUseCase'

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
