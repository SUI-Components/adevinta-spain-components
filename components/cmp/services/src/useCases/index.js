import borosCmp from '@schibstedspain/boros-cmp/lib'

import getConsentStatusUseCase from './GetConsentStatusUseCase'
import getPurposesAndVendorsUseCase from './GetPurposesAndVendorsUseCase'
import sendConsentsUseCase from './SendConsentsUseCase'

import cmpRepository from '../repository/cmpRepository'
const repository = cmpRepository()

export default function getUseCases() {
  return borosCmp.init().then(() => {
    return {
      getConsentStatus: getConsentStatusUseCase({repository}),
      getPurposesAndVendors: getPurposesAndVendorsUseCase({repository}),
      sendConsents: sendConsentsUseCase({repository})
    }
  })
}
