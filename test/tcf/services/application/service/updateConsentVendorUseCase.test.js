/* eslint-env jest */
import {TcfRepository} from '../../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'
import {UpdateConsentVendorUseCase} from '../../../../../components/tcf/services/src/application/service/UpdateConsentVendorUseCase'

describe('UpdateConsentVendorUseCase test', () => {
  const givenConsent = {
    purpose: {},
    specialFeatures: {},
    vendor: {
      consents: {1: false, 2: false, 3: false},
      legitimateInterests: {1: true, 2: true, 3: true}
    }
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
      tcfApi: borosTCFMock.init()
    })
    const useCase = new UpdateConsentVendorUseCase({repository})
    useCase.execute({id: 2, consent: true, legitimateInterest: false})
    const {vendor} = repository.loadConsentDraft()
    expect(vendor.consents[2]).toBeTruthy()
    expect(vendor.legitimateInterests[2]).toBeFalsy()
  })

  it('should update all values', () => {
    const repository = new TcfRepository({
      tcfApi: borosTCFMock.init()
    })
    const useCase = new UpdateConsentVendorUseCase({repository})
    useCase.execute({consent: true, legitimateInterest: false})
    const {vendor} = repository.loadConsentDraft()
    Object.values(vendor.consents).forEach(value => {
      expect(value).toBeTruthy()
    })
    Object.values(vendor.legitimateInterests).forEach(value => {
      expect(value).toBeFalsy()
    })
  })
})
