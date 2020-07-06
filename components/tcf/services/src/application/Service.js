class Service {
  constructor({
    getVendorListUseCase,
    loadUserConsentUseCase,
    saveUserConsentUseCase,
    uiVisibleUseCase
  }) {
    this._getVendorListUseCase = getVendorListUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
    this._uiVisibleUseCase = uiVisibleUseCase
  }

  getVendorList({language}) {
    return this._getVendorListUseCase.execute({language})
  }

  loadUserConsent() {
    return this._loadUserConsentUseCase.execute()
  }

  saveUserConsent({purpose, vendor, specialFeatures}) {
    this._saveUserConsentUseCase.execute({purpose, vendor, specialFeatures})
  }

  uiVisible({visible}) {
    this._uiVisibleUseCase.execute({visible})
  }
}

export {Service}
