/* eslint-env jest */
import {SaveUserConsentUseCase} from '../../../../../components/tcf/services/src/application/service/SaveUserConsentUseCase'
import {TcfRepositoryMock} from '../../helpers/TcfRepositoryMock'
describe('SaveUserConsentUseCase test', () => {
  const borosMethods = {
    saveUserConsent: () => Promise.resolve(null),
    getConsentStatus: () => Promise.resolve(null),
    getVendorList: () => Promise.resolve(null),
    loadUserConsent: () => Promise.resolve(null)
  }
  const borosTCFMock = {
    init: () => borosMethods
  }
  const saveUserConsentSpy = jest.spyOn(borosMethods, 'saveUserConsent')

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
      }
    }
    const tcfRepositoryMock = new TcfRepositoryMock({
      borosTCF: borosTCFMock.init()
    })
    const saveUserConsentUseCase = new SaveUserConsentUseCase({
      repository: tcfRepositoryMock
    })
    const response = await saveUserConsentUseCase.execute(userConsent)
    expect(response).toBe(undefined)
    expect(saveUserConsentSpy).toHaveBeenCalledTimes(1)
    expect(saveUserConsentSpy).toHaveBeenCalledWith(userConsent)
  })
})
