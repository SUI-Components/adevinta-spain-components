/* eslint-env jest */
import {TcfRepositoryMock} from '../../helpers/TcfRepositoryMock'
import {UpdateUserConsentUseCase} from '../../../../../components/tcf/services/src/application/service/UpdateUserConsentUseCase'
import {LoadUserConsentUseCase} from '../../../../../components/tcf/services/src/application/service/LoadUserConsentUseCase'
describe('UpdateUserConsentUseCase test', () => {
  const testPurposes = [1, 2, 3]
  const testVendors = [1, 2, 3]
  const testSpecialFeatures = [1, 2]

  const mockConsent = ({accepted = false} = {}) => {
    const consent = {
      isNew: true,
      purpose: {consents: {}, legitimateInterests: {}},
      vendor: {consents: {}, legitimateInterests: {}},
      specialFeatures: {}
    }
    testPurposes.forEach(k => {
      consent.purpose.consents[k] = accepted
      consent.purpose.legitimateInterests[k] = accepted
    })
    testVendors.forEach(k => {
      consent.vendor.consents[k] = accepted
      consent.vendor.legitimateInterests[k] = accepted
    })
    testSpecialFeatures.forEach(k => {
      consent.specialFeatures[k] = accepted
    })
    return consent
  }

  const mockUseCases = async ({initialConsent = mockConsent(), scope} = {}) => {
    const borosMethods = {
      saveUserConsent: () => Promise.resolve(null),
      getVendorList: () =>
        Promise.resolve({vendors: {}, purposes: {}, specialFeatures: {}}),
      loadUserConsent: () => Promise.resolve(initialConsent)
    }
    const borosTCFMock = {
      init: () => borosMethods
    }
    const tcfRepositoryMock = new TcfRepositoryMock({
      tcfApi: borosTCFMock.init(),
      scope
    })
    const loadUserConsentUseCase = new LoadUserConsentUseCase({
      repository: tcfRepositoryMock
    })
    const updateUserConsentUseCase = new UpdateUserConsentUseCase({
      repository: tcfRepositoryMock
    })
    await loadUserConsentUseCase.execute()
    return {loadUserConsentUseCase, updateUserConsentUseCase}
  }

  it('should update consent with given values', async () => {
    const initialConsent = mockConsent({accepted: true})
    const {
      loadUserConsentUseCase,
      updateUserConsentUseCase
    } = await mockUseCases({
      initialConsent
    })
    const givenUpdate = false
    const modifiedConsent = mockConsent({accepted: givenUpdate})
    updateUserConsentUseCase.execute({...modifiedConsent})
    const consent = await loadUserConsentUseCase.execute()
    const validateExpected = node =>
      Object.values(node).every(value => value === givenUpdate)
    expect(validateExpected(consent.purpose.consents)).toBeTruthy()
    expect(validateExpected(consent.purpose.legitimateInterests)).toBeTruthy()
    expect(validateExpected(consent.vendor.consents)).toBeTruthy()
    expect(validateExpected(consent.vendor.legitimateInterests)).toBeTruthy()
    expect(validateExpected(consent.specialFeatures)).toBeTruthy()
  })
  it('should update consent applying all values', async () => {
    const initialConsent = mockConsent({accepted: false})
    const {
      loadUserConsentUseCase,
      updateUserConsentUseCase
    } = await mockUseCases({
      initialConsent
    })
    updateUserConsentUseCase.execute({
      ...initialConsent,
      allPurposes: true,
      allVendors: true,
      allSpecialFeatures: true
    })
    const consent = await loadUserConsentUseCase.execute()
    const validateExpected = node =>
      Object.values(node).every(value => value === true)
    expect(validateExpected(consent.purpose.consents)).toBeTruthy()
    expect(validateExpected(consent.purpose.legitimateInterests)).toBeTruthy()
    expect(validateExpected(consent.vendor.consents)).toBeTruthy()
    expect(validateExpected(consent.vendor.legitimateInterests)).toBeTruthy()
    expect(validateExpected(consent.specialFeatures)).toBeTruthy()
  })
  it('should use the scoped consent', async () => {
    const givenScope = {
      purposes: [2],
      specialFeatures: [1]
    }
    const initialConsent = mockConsent({accepted: false})
    const {
      loadUserConsentUseCase,
      updateUserConsentUseCase
    } = await mockUseCases({
      initialConsent,
      scope: givenScope
    })
    updateUserConsentUseCase.execute({
      ...initialConsent,
      allPurposes: true,
      allVendors: true,
      allSpecialFeatures: true
    })
    const consent = await loadUserConsentUseCase.execute()
    expect(consent.purpose.consents[1]).toBeFalsy()
    expect(consent.purpose.consents[2]).toBeTruthy()
    expect(consent.specialFeatures[1]).toBeTruthy()
    expect(consent.specialFeatures[2]).toBeFalsy()
  })
})
