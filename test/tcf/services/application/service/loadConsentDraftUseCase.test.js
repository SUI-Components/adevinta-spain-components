/* eslint-env jest */
import {TcfRepository} from '../../../../../components/tcf/services/src/infrastructure/tcf/TcfRepository'
import {LoadConsentDraftUseCase} from '../../../../../components/tcf/services/src/application/service/LoadConsentDraftUseCase'

describe('LoadConsentDraftUseCase test', () => {
  const givenScope = {
    purposes: [1, 2, 3],
    specialFeatures: [1]
  }
  const givenConsent = {
    purpose: {
      consents: {1: false, 2: true, 3: false},
      legitimateInterests: {1: false, 2: true, 3: false}
    },
    specialFeatures: {1: false},
    vendor: {
      consents: {1: false, 2: true, 3: false},
      legitimateInterests: {1: false, 2: true, 3: false}
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

  it('should return the inmemory status of the modified user consent', async () => {
    const repository = new TcfRepository({
      tcfApi: borosTCFMock.init(),
      scope: givenScope
    })
    repository.initConsentDraft({userConsent: givenConsent})
    const useCase = new LoadConsentDraftUseCase({repository})
    const {
      purpose,
      vendor,
      specialFeatures
    } = await repository.loadUserConsent()
    let draft = useCase.execute()
    expect({
      purpose: draft.purpose,
      vendor: draft.vendor,
      specialFeatures: draft.specialFeatures
    }).toEqual({
      purpose,
      vendor,
      specialFeatures
    })
    draft.updateSpecialFeatures({consent: false})
    draft = useCase.execute()
    expect(draft.specialFeatures[1]).toBeFalsy()
  })
})
