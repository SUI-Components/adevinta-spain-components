class SaveUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purposeConsents, vendorConsents}) {
    this._repository.saveUserConsent({
      purposeConsents,
      vendorConsents
    })
  }
}

export {SaveUserConsentUseCase}
