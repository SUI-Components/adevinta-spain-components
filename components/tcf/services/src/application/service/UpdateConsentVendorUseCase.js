export class UpdateConsentVendorUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({id, consent, legitimateInterest}) {
    return this._repository.updateVendor({id, consent, legitimateInterest})
  }
}
