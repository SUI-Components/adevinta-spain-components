import {TcfRepository} from './TcfRepository'

const borosTCF = {
  init: () => ({
    getConsentStatus: () => 'NOT_ACCEPTED',
    loadUserConsent: () =>
      Promise.resolve({
        specialFeatureOptins: [],
        purposeConsents: [],
        purposeLegitimateInterests: [],
        publisherConsents: [],
        publisherLegitimateInterests: [],
        vendorConsents: [],
        vendorLegitimateInterests: []
      }),
    saveUserConsent: () => null
  })
}

export function tcfRepositoryFactory() {
  return new TcfRepository({borosTCF, window})
}
