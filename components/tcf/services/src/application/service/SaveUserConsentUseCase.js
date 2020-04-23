class SaveUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purpose, vendor}) {
    this._repository.saveUserConsent({purpose, vendor})
  }
}

export {SaveUserConsentUseCase}
