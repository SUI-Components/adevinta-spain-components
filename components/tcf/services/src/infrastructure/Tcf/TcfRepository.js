class TcfRepository {
  constructor({borosTCF}) {
    this._borosTCF = borosTCF
  }

  getConsentStatus() {
    return this._borosTCF.getConsentStatus()
  }

  getVendorList() {
    return this._borosTCF.getVendorList()
  }

  loadUserConsent() {
    return this._borosTCF.loadUserConsent()
  }

  saveUserConsent({purpose, vendor}) {
    this._borosTCF.saveUserConsent({purpose, vendor})
  }
}

export {TcfRepository}
