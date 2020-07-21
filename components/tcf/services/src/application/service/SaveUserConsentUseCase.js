class SaveUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    return this._repository.saveUserConsent()
  }
}

export {SaveUserConsentUseCase}
