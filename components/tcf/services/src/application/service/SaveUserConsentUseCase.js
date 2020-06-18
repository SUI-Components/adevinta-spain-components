class SaveUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purpose, vendor, specialFeatures}) {
    this._repository.saveUserConsent({purpose, vendor, specialFeatures})
  }
}

export {SaveUserConsentUseCase}
