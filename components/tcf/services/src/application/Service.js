class Service {
  constructor({
    getVendorListUseCase,
    loadConsentDraftUseCase,
    loadUserConsentUseCase,
    saveUserConsentUseCase,
    updateConsentPurposeUseCase,
    updateConsentSpecialFeatureUseCase,
    updateConsentVendorUseCase,
    uiVisibleUseCase
  }) {
    this._getVendorListUseCase = getVendorListUseCase
    this._loadConsentDraftUseCase = loadConsentDraftUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
    this._updateConsentPurposeUseCase = updateConsentPurposeUseCase
    this._updateConsentSpecialFeatureUseCase = updateConsentSpecialFeatureUseCase
    this._updateConsentVendorUseCase = updateConsentVendorUseCase
    this._uiVisibleUseCase = uiVisibleUseCase
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

export {Service}
