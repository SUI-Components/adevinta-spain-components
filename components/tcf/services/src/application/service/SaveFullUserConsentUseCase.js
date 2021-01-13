export class SaveFullUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute() {
    const fullConsent = this._repository.loadFullUserConsent()
    const userConsent = fullConsent.asUserConsent()
    return this._repository.saveUserConsent(userConsent)
  }
}
