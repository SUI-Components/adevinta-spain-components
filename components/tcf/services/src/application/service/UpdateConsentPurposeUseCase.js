export class UpdateConsentPurposeUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id, consent}) {
    const draft = this._repository.loadConsentDraft()
    draft.updatePurposes({id, consent})
  }
}
