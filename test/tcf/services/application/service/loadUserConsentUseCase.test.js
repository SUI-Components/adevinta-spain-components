/* eslint-env jest */
import {LoadUserConsentUseCase} from '../../../../../components/tcf/services/src/application/Service/LoadUserConsentUseCase'
import {TcfRepositoryMock} from '../../helpers/TcfRepositoryMock'
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
    }
  }
  const borosMethods = {
    loadUserConsent: () => Promise.resolve(givenUserConsent),
    getConsentStatus: () => Promise.resolve(),
    getVendorList: () => Promise.resolve(null),
    saveUserConsent: () => null
  }
  const borosTCFMock = {
    init: () => borosMethods
  }
  const loadUserConsentSpy = jest.spyOn(borosMethods, 'loadUserConsent')

  it('should return correct data when execute', async () => {
    const tcfRepositoryMock = new TcfRepositoryMock({
      borosTCF: borosTCFMock.init()
    })
    const loadUserConsentUseCase = new LoadUserConsentUseCase({
      repository: tcfRepositoryMock
    })
    const userConsent = await loadUserConsentUseCase.execute()
    expect(userConsent).toBe(givenUserConsent)
    expect(loadUserConsentSpy).toHaveBeenCalledTimes(1)
  })
})
