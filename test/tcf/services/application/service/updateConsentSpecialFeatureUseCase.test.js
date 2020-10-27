/* eslint-env jest */
import {TcfRepository} from '../../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'
import {UpdateConsentSpecialFeatureUseCase} from '../../../../../components/tcf/services/src/application/service/UpdateConsentSpecialFeatureUseCase'

describe('UpdateConsentSpecialFeatureUseCase test', () => {
  const givenScope = {
    specialFeatures: [1, 2]
  }
  const givenConsent = {
    purpose: {},
    specialFeatures: {1: false, 2: false},
    vendor: {}
  }
  const borosMethods = {
    saveUserConsent: () => Promise.resolve(null),
    getVendorList: () => Promise.resolve(null),
    loadUserConsent: () => Promise.resolve(givenConsent)
  }
  const borosTCFMock = {
    init: () => borosMethods
  }

  it('should update single id', () => {
    const repository = new TcfRepository({
      tcfApi: borosTCFMock.init(),
      scope: givenScope
    })
    const useCase = new UpdateConsentSpecialFeatureUseCase({repository})
    useCase.execute({id: 2, consent: true})
    const {specialFeatures} = repository.loadConsentDraft()
    expect(specialFeatures[2]).toBeTruthy()
  })

  it('should update all values', () => {
    const repository = new TcfRepository({
      tcfApi: borosTCFMock.init(),
      scope: givenScope
    })
    const useCase = new UpdateConsentSpecialFeatureUseCase({repository})
    useCase.execute({consent: true})
    const {specialFeatures} = repository.loadConsentDraft()
    Object.values(specialFeatures).forEach(value => {
      expect(value).toBeTruthy()
    })
  })
})
