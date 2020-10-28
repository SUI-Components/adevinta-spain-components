class SaveUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    const draft = this._repository.loadConsentDraft()
    const userConsent = draft.asUserConsent()
    return this._repository.saveUserConsent(userConsent)
  }
}

export {SaveUserConsentUseCase}
