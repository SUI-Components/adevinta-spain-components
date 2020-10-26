export class UpdateConsentPurposeUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id, consent}) {
    return this._repository.updatePurpose({id, consent})
  }
}
