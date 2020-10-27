/* eslint-env jest */
import {TcfRepository} from '../../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'
import {UpdateConsentPurposeUseCase} from '../../../../../components/tcf/services/src/application/service/UpdateConsentPurposeUseCase'

describe('UpdateConsentPurposeUseCase test', () => {
  const givenScope = {
    purposes: [1, 2, 3]
  }
  const givenConsent = {
    purpose: {
      consents: {1: false, 2: true, 3: false},
      legitimateInterests: {1: false, 2: true, 3: false}
    },
    specialFeatures: {},
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
    const useCase = new UpdateConsentPurposeUseCase({repository})
    useCase.execute({id: 3, consent: true})
    const {purpose} = repository.loadConsentDraft()
    expect(purpose.consents[3]).toBeTruthy()
    expect(purpose.legitimateInterests[3]).toBeTruthy()
  })

  it('should update all values', () => {
    const repository = new TcfRepository({
      tcfApi: borosTCFMock.init(),
      scope: givenScope
    })
    const useCase = new UpdateConsentPurposeUseCase({repository})
    useCase.execute({consent: true})
    const {purpose} = repository.loadConsentDraft()
    Object.values(purpose.consents).forEach(value => {
      expect(value).toBeTruthy()
    })
    Object.values(purpose.legitimateInterests).forEach(value => {
      expect(value).toBeTruthy()
    })
  })
})
