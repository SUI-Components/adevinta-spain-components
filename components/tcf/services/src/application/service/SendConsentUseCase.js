class SendConsentUseCase {
  constructor({repository}) {
    this._repository = repository
  }

  execute({purposeConsents, vendorConsents, uiVisible}) {
    this._repository.sendConsents({purposeConsents, vendorConsents, uiVisible})
  }
}

export {SendConsentUseCase}
