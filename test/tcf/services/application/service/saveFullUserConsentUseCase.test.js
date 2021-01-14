/* eslint-env jest */
import {SaveFullUserConsentUseCase} from '../../../../../components/tcf/services/src/application/service/SaveFullUserConsentUseCase'
import {FullConsent} from '../../../../../components/tcf/services/src/domain/FullConsent'

describe('SaveFullUserConsentUseCase', function() {
  it('should save full accepted user consent', () => {
    const givenFullConsent = new FullConsent()
    const expectedConsent = givenFullConsent.asUserConsent()

    const mockRepository = {
      loadFullUserConsent: () => givenFullConsent,
      saveUserConsent: () => expectedConsent
    }
    const spyLoadFullUserConsent = jest.spyOn(
      mockRepository,
      'loadFullUserConsent'
    )
    const spySaveUserConsent = jest.spyOn(mockRepository, 'saveUserConsent')
    const saveFullUserConsentUseCase = new SaveFullUserConsentUseCase({
      repository: mockRepository
    })
    const response = saveFullUserConsentUseCase.execute()
    expect(response).toBe(expectedConsent)
    expect(spyLoadFullUserConsent).toHaveBeenCalledTimes(1)
    expect(spySaveUserConsent).toHaveBeenCalledTimes(1)
  })
})
