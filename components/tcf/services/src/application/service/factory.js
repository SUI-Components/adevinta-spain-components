import {GetConsentStatusUseCase} from './GetConsentStatusUseCase'
import {LoadUserConsentUseCase} from './LoadUserConsentUseCase'
import {SaveUserConsentUseCase} from './SaveUserConsentUseCase'

export function getConsentStatusUseCaseFactory({repository}) {
  return new GetConsentStatusUseCase({
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
