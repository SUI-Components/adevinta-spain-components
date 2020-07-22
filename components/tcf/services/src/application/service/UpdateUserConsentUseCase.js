export class UpdateUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({
    purpose,
    vendor,
    specialFeatures,
    allPurposes,
    allVendors,
    allSpecialFeatures
  }) {
    return this._repository.updateUserConsent({
      purpose,
      vendor,
      specialFeatures,
      allPurposes,
      allVendors,
      allSpecialFeatures
    })
  }
}
