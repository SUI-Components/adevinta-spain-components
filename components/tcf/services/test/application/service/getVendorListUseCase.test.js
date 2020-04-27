/* eslint-env jest */
import {GetVendorListUseCase} from '../../../src/application/Service/GetVendorListUseCase'
import {TcfRepositoryMock} from '../../helpers/TcfRepositoryMock'
describe('GetVendorListUseCase test', () => {
  const givenVendorList = {
    purposes: {
      '1': {
        id: 1,
        name: 'Store and/or access information on a device',
        description:
          'Cookies, device identifiers, or other information can be stored or accessed on your device for the purposes presented to you.',
        descriptionLegal:
          'Vendors can:\n* Store and access information on the device such as cookies and device identifiers presented to a user.'
      }
    }
  }
  const borosMethods = {
    getVendorList: () => Promise.resolve(givenVendorList),
    getConsentStatus: () => Promise.resolve(null),
    loadUserConsent: () => Promise.resolve(null),
    saveUserConsent: () => null
  }
  const borosTCFMock = {
    init: () => borosMethods
  }
  const getVendorListSpy = jest.spyOn(borosMethods, 'getVendorList')

  it('should return correct data when execute', async () => {
    const tcfRepositoryMock = new TcfRepositoryMock({
      borosTCF: borosTCFMock.init()
    })
    const getVendorListUseCase = new GetVendorListUseCase({
      repository: tcfRepositoryMock
    })
    const vendorList = await getVendorListUseCase.execute()
    expect(vendorList).toBe(givenVendorList)
    expect(getVendorListSpy).toHaveBeenCalledTimes(1)
  })
})
