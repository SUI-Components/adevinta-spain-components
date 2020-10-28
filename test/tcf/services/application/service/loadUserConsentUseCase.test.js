/* eslint-env jest */
import {LoadUserConsentUseCase} from '../../../../../components/tcf/services/src/application/service/LoadUserConsentUseCase'
import {TcfRepository} from '../../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'
describe('LoadUserConsentUseCase test', () => {
  const givenUserConsent = {
    purpose: {
      consents: {
        1: false,
        2: false,
        3: false
      },
      legitimateInterests: {
        1: false,
        2: false,
        3: false
      }
    },
    vendor: {
      consents: {
        1: true,
        2: true,
        3: true
      },
      legitimateInterests: {
        1: true,
        2: true,
        3: true
      }
    },
    specialFeatures: {1: false, 2: false, 3: false},
    valid: false
  }
  const borosMethods = {
    loadUserConsent: () => Promise.resolve(givenUserConsent),
    getVendorList: () => Promise.resolve(null),
    saveUserConsent: () => null
  }
  const borosTCFMock = {
    init: () => borosMethods
  }
  const loadUserConsentSpy = jest.spyOn(borosMethods, 'loadUserConsent')

  it('should return correct data when execute', async () => {
    const tcfRepositoryMock = new TcfRepository({
      tcfApi: borosTCFMock.init()
    })
    const loadUserConsentUseCase = new LoadUserConsentUseCase({
      repository: tcfRepositoryMock
    })
    const {
      purpose,
      vendor,
      specialFeatures
    } = await loadUserConsentUseCase.execute()
    expect(loadUserConsentSpy).toHaveBeenCalledTimes(1)
    expect({
      purpose: givenUserConsent.purpose,
      vendor: givenUserConsent.vendor,
      specialFeatures: givenUserConsent.specialFeatures
    }).toEqual({
      purpose,
      vendor,
      specialFeatures
    })
  })
})
