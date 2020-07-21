class Service {
  constructor({
    getVendorListUseCase,
    loadUserConsentUseCase,
    saveUserConsentUseCase,
    updateUserConsentUseCase,
    uiVisibleUseCase
  }) {
    this._getVendorListUseCase = getVendorListUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
    this._updateUserConsentUseCase = updateUserConsentUseCase
    this._uiVisibleUseCase = uiVisibleUseCase
  }

  getVendorList({language = 'es'} = {}) {
    return this._getVendorListUseCase.execute({language})
  }

  loadUserConsent() {
    return this._loadUserConsentUseCase.execute()
  }

  saveUserConsent() {
    return this._saveUserConsentUseCase.execute()
  }

  updateUserConsent({purpose, vendor, specialFeatures}) {
    return this._updateUserConsentUseCase.execute({
      purpose,
      vendor,
      specialFeatures
    })
  }

  uiVisible({visible}) {
    return this._uiVisibleUseCase.execute({visible})
  }
}

export {Service}
