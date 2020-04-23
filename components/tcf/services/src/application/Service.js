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

  saveUserConsent({purposeConsents, vendorConsents}) {
    this._saveUserConsentUseCase.execute({purposeConsents, vendorConsents})
  }
}

export {Service}
