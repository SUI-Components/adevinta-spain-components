import borosCmp from '@schibstedspain/boros-cmp'

import {GetConsentStatusUseCase} from './GetConsentStatusUseCase'
import {GetPurposesAndVendorsUseCase} from './GetPurposesAndVendorsUseCase'
import {SendConsentsUseCase} from './SendConsentsUseCase'

import {CmpRepository} from '../repository/cmpRepository'

const repository = new CmpRepository()

export default function getUseCases() {
  return borosCmp.init().then(() => {
    return {
      getConsentStatus: new GetConsentStatusUseCase({repository}),
      getPurposesAndVendors: new GetPurposesAndVendorsUseCase({repository}),
      sendConsents: new SendConsentsUseCase({repository})
    }
  })
}
