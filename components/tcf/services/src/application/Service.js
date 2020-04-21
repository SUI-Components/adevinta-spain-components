class Service {
  constructor({
    getConsentStatusUseCase,
    loadUserConsentUseCase,
    saveUserConsentUseCase
  }) {
    this._getConsentStatusUseCase = getConsentStatusUseCase
    this._loadUserConsentUseCase = loadUserConsentUseCase
    this._saveUserConsentUseCase = saveUserConsentUseCase
  }

  getConsentStatus() {
    return this._getConsentStatusUseCase.execute()
  }

  loadUserConsent() {
    return this._loadUserConsentUseCase.execute()
  }

  saveUserConsent({purposeConsents, vendorConsents}) {
    this._saveUserConsentUseCase.execute({purposeConsents, vendorConsents})
  }
}

export {Service}
