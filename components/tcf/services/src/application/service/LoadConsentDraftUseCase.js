class LoadConsentDraftUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    return this._repository.loadConsentDraft()
  }
}

export {LoadConsentDraftUseCase}
