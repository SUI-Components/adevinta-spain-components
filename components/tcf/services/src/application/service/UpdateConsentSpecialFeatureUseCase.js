export class UpdateConsentSpecialFeatureUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id, consent}) {
    return this._repository.updateSpecialFeature({id, consent})
  }
}
