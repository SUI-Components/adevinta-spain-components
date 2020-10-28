import {ConsentDraft} from '../../domain/ConsentDraft'

class TcfRepository {
  constructor({tcfApi, scope}) {
    this._tcfApi = tcfApi
    this._scope = scope
    this._draft = new ConsentDraft({
      scope: this._scope
    })
  }

  getVendorList() {
    return this._tcfApi.getVendorList()
  }

  loadUserConsent() {
    return this._tcfApi.loadUserConsent()
  }

  loadConsentDraft() {
    return this._draft
  }

  initConsentDraft({userConsent}) {
    this._draft = new ConsentDraft({
      ...userConsent,
      vendorTouched: userConsent.isNew !== true,
      scope: this._scope
    })
  }

  saveUserConsent({purpose, specialFeatures, vendor}) {
    return this._tcfApi.saveUserConsent({purpose, specialFeatures, vendor})
  }

  uiVisible({visible}) {
    return this._tcfApi.uiVisible({visible})
  }
}

export {TcfRepository}
