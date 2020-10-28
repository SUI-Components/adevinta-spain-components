/* eslint-env jest */
import {SaveUserConsentUseCase} from '../../../../../components/tcf/services/src/application/service/SaveUserConsentUseCase'
import {TcfRepository} from '../../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'

describe('SaveUserConsentUseCase test', () => {
  it('should return correct data when execute', async () => {
    const userConsent = {
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
      specialFeatures: {1: false, 2: false, 3: false}
    }
    const borosMethods = {
      saveUserConsent: () => Promise.resolve(null),
      getVendorList: () => Promise.resolve(null),
      loadUserConsent: () => Promise.resolve(userConsent)
    }
    const borosTCFMock = {
      init: () => borosMethods
    }
    const saveUserConsentSpy = jest.spyOn(borosMethods, 'saveUserConsent')

    const tcfRepositoryMock = new TcfRepository({
      tcfApi: borosTCFMock.init()
    })
    const saveUserConsentUseCase = new SaveUserConsentUseCase({
      repository: tcfRepositoryMock
    })
    tcfRepositoryMock.initConsentDraft({userConsent})
    await saveUserConsentUseCase.execute()
    expect(saveUserConsentSpy).toHaveBeenCalledTimes(1)
    expect(saveUserConsentSpy).toHaveBeenCalledWith(userConsent)
  })
})
