export class UpdateConsentSpecialFeatureUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id, consent}) {
    const draft = this._repository.loadConsentDraft()
    draft.updateSpecialFeatures({id, consent})
  }
}
