import {isBoolean} from '../core/service/isBoolean'

export class ConsentDraft {
  constructor({
    scope = {},
    purpose = {consents: {}, legitimateInterests: {}},
    vendor = {consents: {}, legitimateInterests: {}},
    specialFeatures = {},
    valid = false,
    vendorTouched = true
  } = {}) {
    this._scopedPurposes = scope.purposes || []
    this._scopedSpecialFeatures = scope.specialFeatures || []
    this._purpose = purpose
    this._vendor = vendor
    this._specialFeatures = specialFeatures
    this._vendorTouched = vendorTouched
    this._valid = valid
  }

  get purpose() {
    return this._purpose
  }

  get specialFeatures() {
    return this._specialFeatures
  }

  get vendor() {
    return this._vendor
  }

  get valid() {
    return this._valid
  }

  asUserConsent() {
    return {
      purpose: {
        consents: this._purpose.consents,
        legitimateInterests: this._purpose.legitimateInterests
      },
      specialFeatures: this._specialFeatures,
      vendor: {
        consents: this._vendor.consents,
        legitimateInterests: this._vendor.legitimateInterests
      }
    }
  }

  updatePurposes({id, consent}) {
    if (!id) {
      this._scopedPurposes.forEach(key => {
        this._purpose.consents[key] = consent
        this._purpose.legitimateInterests[key] = consent
      })
    } else {
      this._purpose.consents[id] = consent
      this._purpose.legitimateInterests[id] = consent
    }
    this._refreshVendors()
  }

  updateSpecialFeatures({id, consent}) {
    if (!id) {
      this._scopedSpecialFeatures.forEach(key => {
        this._specialFeatures[key] = consent
      })
    } else {
      this._specialFeatures[id] = consent
    }
    this._refreshVendors()
  }

  updateVendors({id, consent, legitimateInterest}) {
    if (!id) {
      if (isBoolean(consent)) {
        Object.keys(this._vendor.consents).forEach(key => {
          this._vendor.consents[key] = consent
        })
      }
      if (isBoolean(legitimateInterest)) {
        Object.keys(this._vendor.legitimateInterests).forEach(key => {
          this._vendor.legitimateInterests[key] = legitimateInterest
        })
      }
    } else {
      isBoolean(consent) && (this._vendor.consents[id] = consent)
      isBoolean(legitimateInterest) &&
        (this._vendor.legitimateInterests[id] = legitimateInterest)
    }
    this._vendorTouched = true
  }

  _refreshVendors() {
    if (!this._vendorTouched) {
      Object.keys(this._vendor.consents).forEach(key => {
        const acceptedByPurposes = this._vendor.purposes[key].every(
          purpose => this._purpose.consents[purpose] === true
        )
        const acceptedBySpecialFeatures = this._vendor.specialFeatures[
          key
        ].every(
          specialFeature => this._specialFeatures[specialFeature] === true
        )
        this._vendor.consents[key] =
          acceptedByPurposes && acceptedBySpecialFeatures
      })
    }
  }
}
