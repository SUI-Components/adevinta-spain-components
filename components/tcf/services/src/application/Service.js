class Service {
  constructor({
    getConsentStatusUseCase,
    getVendorListUseCase,
    loadUserConsentUseCase,
    saveUserConsentUseCase
  }) {
    this._getConsentStatusUseCase = getConsentStatusUseCase
    this._getVendorListUseCase = getVendorListUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
  }

  getConsentStatus() {
    return this._getConsentStatusUseCase.execute()
  }

  getVendorList() {
    return this._getVendorListUseCase.execute()
  }

  loadUserConsent() {
    return this._loadUserConsentUseCase.execute()
  }

  saveUserConsent({purpose, vendor}) {
    this._saveUserConsentUseCase.execute({purpose, vendor})
  }
}

export {Service}
