/* eslint-env jest */
import {GetConsentStatusUseCase} from '../../../../../components/tcf/services/src/application/Service/GetConsentStatusUseCase'
import {TcfRepositoryMock} from '../../helpers/TcfRepositoryMock'
describe('GetConsentStatusUseCase test', () => {
  const givenConsentStatus = 'givenConsentStatus'
  const borosMethods = {
    getConsentStatus: () => Promise.resolve(givenConsentStatus),
    getVendorList: () => Promise.resolve(null),
    loadUserConsent: () => Promise.resolve(null),
    saveUserConsent: () => null
  }
  const borosTCFMock = {
    init: () => borosMethods
  }
  const getConsentStatusSpy = jest.spyOn(borosMethods, 'getConsentStatus')

  it('should return correct data when execute', async () => {
    const tcfRepositoryMock = new TcfRepositoryMock({
      borosTCF: borosTCFMock.init()
    })
    const getConsentStatusUseCase = new GetConsentStatusUseCase({
      repository: tcfRepositoryMock
    })
    const consentStatus = await getConsentStatusUseCase.execute()
    expect(consentStatus).toBe(givenConsentStatus)
    expect(getConsentStatusSpy).toHaveBeenCalledTimes(1)
  })
})
