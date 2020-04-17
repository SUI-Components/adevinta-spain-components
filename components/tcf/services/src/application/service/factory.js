import {SendConsentUseCase} from './SendConsentUseCase'

export function sendConsentUseCaseFactory({repository}) {
  return new SendConsentUseCase({
    repository
  })
}
