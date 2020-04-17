class Service {
  constructor(sendConsentUseCase) {
    this._sendConsentsUseCase = sendConsentUseCase
  }

  sendConsents() {
    return this._sendConsentsUseCase.execute()
  }
}

export {Service}
