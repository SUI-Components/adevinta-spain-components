class TcfRepository {
  constructor({tcfApi, scope = {}}) {
    this._tcfApi = tcfApi
    this._scope = scope
    this._cachedConsent = null
    this._draft = {
      purpose: {
        consents: {},
        legitimateInterests: {}
      },
      vendor: {
        consents: {},
        legitimateInterests: {}
      },
      specialFeatures: {}
    }
  }

  getVendorList() {
    return this._tcfApi.getVendorList()
  }

  loadUserConsent() {
    this._cachedConsent = this._cachedConsent || this._initializeConsent()
    return this._cachedConsent
  }

  loadConsentDraft() {
    return this._draft
  }

  async _initializeConsent() {
    const userConsent = await this._tcfApi.loadUserConsent()
    if (userConsent.isNew) {
      const vendorList = await this.getVendorList()
      userConsent.purpose = {consents: {}, legitimateInterests: {}}
      userConsent.vendor = {consents: {}, legitimateInterests: {}}
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
      })
    }
    this._draft = userConsent
    return this._draft
  }

  async saveUserConsent() {
    const {purpose, vendor, specialFeatures} = this._draft
    return this._tcfApi.saveUserConsent({purpose, vendor, specialFeatures})
  }

  uiVisible({visible}) {
    return this._tcfApi.uiVisible({visible})
  }

  updatePurpose({id, consent}) {
    if (!id) {
      this._scope.purposes = this._scope.purposes || []
      this._scope.purposes.forEach(key => {
        this._draft.purpose.consents[key] = consent
        this._draft.purpose.legitimateInterests[key] = consent
      })
    } else {
      this._draft.purpose.consents[id] = consent
      this._draft.purpose.legitimateInterests[id] = consent
    }
  }

  updateSpecialFeature({id, consent}) {
    if (!id) {
      this._scope.specialFeatures = this._scope.specialFeatures || []
      this._scope.specialFeatures.forEach(key => {
        this._draft.specialFeatures[key] = consent
      })
    } else {
      this._draft.specialFeatures[id] = consent
    }
  }

  updateVendor({id, consent, legitimateInterest}) {
    if (!id) {
      if (typeof consent === 'boolean') {
        Object.keys(this._draft.vendor.consents).forEach(key => {
          this._draft.vendor.consents[key] = consent
        })
      }
      if (typeof legitimateInterest === 'boolean') {
        Object.keys(this._draft.vendor.legitimateInterests).forEach(key => {
          this._draft.vendor.legitimateInterests[key] = legitimateInterest
        })
      }
    } else {
      typeof consent === 'boolean' &&
        (this._draft.vendor.consents[id] = consent)
      typeof legitimateInterest === 'boolean' &&
        (this._draft.vendor.legitimateInterests[id] = legitimateInterest)
    }
  }
}

export {TcfRepository}
