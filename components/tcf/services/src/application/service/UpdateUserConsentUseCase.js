export class UpdateUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purpose, vendor, specialFeatures}) {
    return this._repository.updateUserConsent({
      purpose,
      vendor,
      specialFeatures
    })
  }
}
