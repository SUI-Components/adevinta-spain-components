export class UpdateConsentVendorUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id, consent, legitimateInterest}) {
    const draft = this._repository.loadConsentDraft()
    draft.updateVendors({id, consent, legitimateInterest})
  }
}
