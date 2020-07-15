class SaveUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purpose, vendor, specialFeatures}) {
    return this._repository.saveUserConsent({purpose, vendor, specialFeatures})
  }
}

export {SaveUserConsentUseCase}
