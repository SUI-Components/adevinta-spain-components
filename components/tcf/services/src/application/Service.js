class Service {
  constructor({
    getVendorListUseCase,
    loadUserConsentUseCase,
    saveUserConsentUseCase
  }) {
    this._getVendorListUseCase = getVendorListUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
  }

  getVendorList() {
    return this._getVendorListUseCase.execute()
  }

  loadUserConsent() {
    return this._loadUserConsentUseCase.execute()
  }

  saveUserConsent({purpose, vendor, specialFeatures}) {
    this._saveUserConsentUseCase.execute({purpose, vendor, specialFeatures})
  }
}

export {Service}
