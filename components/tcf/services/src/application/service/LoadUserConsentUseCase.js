class LoadUserConsentUseCase {
  constructor({repository}) {
    this._repository = repository
    this._draftReady = false
    this._cachedUserConsent = null
  }

  execute() {
    return this._draftReady
      ? Promise.resolve(this._repository.loadConsentDraft())
      : this._loadUserConsent()
  }

  _loadUserConsent() {
    this._cachedUserConsent =
      this._cachedUserConsent ||
      this._repository
        .loadUserConsent()
        .then(userConsent =>
          userConsent.isNew
            ? this._initializeWithVendorList({userConsent})
            : userConsent
        )
        .then(userConsent => {
          this._repository.initConsentDraft({userConsent})
          this._draftReady = true
          return this._repository.loadConsentDraft()
        })
    return this._cachedUserConsent
  }

  _initializeWithVendorList({userConsent}) {
    return this._repository.getVendorList().then(vendorList => {
      userConsent.purpose = {consents: {}, legitimateInterests: {}}
      userConsent.vendor = {
        consents: {},
        legitimateInterests: {},
        purposes: {},
        specialFeatures: {}
      }
      userConsent.specialFeatures = {}
      Object.keys(vendorList.purposes).forEach(key => {
        userConsent.purpose.consents[key] = false
        userConsent.purpose.legitimateInterests[key] = false
      })
      Object.keys(vendorList.specialFeatures).forEach(key => {
        userConsent.specialFeatures[key] = false
      })
      Object.keys(vendorList.vendors).forEach(key => {
        userConsent.vendor.consents[key] = false
        userConsent.vendor.legitimateInterests[key] = true
        userConsent.vendor.purposes[key] = vendorList.vendors[key].purposes
        userConsent.vendor.specialFeatures[key] =
          vendorList.vendors[key].specialFeatures
      })
      return userConsent
    })
  }
}

export {LoadUserConsentUseCase}
