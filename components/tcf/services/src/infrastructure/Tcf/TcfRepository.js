class TcfRepository {
  constructor({tcfApi}) {
    this._tcfApi = tcfApi
  }

  getVendorList() {
    return this._tcfApi.getVendorList()
  }

  loadUserConsent() {
    return this._tcfApi.loadUserConsent()
  }

  saveUserConsent({purpose, vendor, specialFeatures}) {
    this._tcfApi.saveUserConsent({purpose, vendor, specialFeatures})
  }
}

export {TcfRepository}
