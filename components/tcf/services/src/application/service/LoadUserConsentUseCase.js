class LoadUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    return this._repository.loadUserConsent()
  }
}

export {LoadUserConsentUseCase}
