export class Service {
  constructor({
    getVendorListUseCase,
    loadConsentDraftUseCase,
    loadUserConsentUseCase,
    saveFullUserConsentUseCase,
    saveUserConsentUseCase,
    uiVisibleUseCase,
    updateConsentPurposeUseCase,
    updateConsentSpecialFeatureUseCase,
    updateConsentVendorUseCase
  }) {
    this._getVendorListUseCase = getVendorListUseCase
    this._loadConsentDraftUseCase = loadConsentDraftUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveFullUserConsentUserCase = saveFullUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
    this._uiVisibleUseCase = uiVisibleUseCase
    this._updateConsentPurposeUseCase = updateConsentPurposeUseCase
    this._updateConsentSpecialFeatureUseCase = updateConsentSpecialFeatureUseCase
    this._updateConsentVendorUseCase = updateConsentVendorUseCase
  }

  getVendorList() {
    return this._getVendorListUseCase.execute()
  }

  loadConsentDraft() {
    return this._loadConsentDraftUseCase.execute()
  }

  loadUserConsent() {
    return this._loadUserConsentUseCase.execute()
  }

  saveUserConsent() {
    return this._saveUserConsentUseCase.execute()
  }

  saveFullUserConsent() {
    return this._saveFullUserConsentUserCase.execute()
  }

  updatePurpose({id, consent}) {
    return this._updateConsentPurposeUseCase.execute({
      id,
      consent
    })
  }

  updateSpecialFeature({id, consent}) {
    return this._updateConsentSpecialFeatureUseCase.execute({
      id,
      consent
    })
  }

  updateVendor({id, consent, legitimateInterest}) {
    return this._updateConsentVendorUseCase.execute({
      id,
      consent,
      legitimateInterest
    })
  }

  uiVisible({visible}) {
    return this._uiVisibleUseCase.execute({visible})
  }
}
