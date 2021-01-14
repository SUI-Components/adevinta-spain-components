import {ConsentDraft} from './ConsentDraft'

export class FullConsent extends ConsentDraft {
  /**
   * @param scope {import('./Scope.d.ts').Scope}
   */
  constructor({scope = {}} = {}) {
    const purpose = {consents: {}, legitimateInterests: {1: false}}
    const {
      purposes: scopedPurposes,
      specialFeatures: scopedSpecialFeatures,
      interestConsentVendors: scopedInterestConsentVendors
    } = scope
    scopedPurposes &&
      scopedPurposes.forEach(
        scopedPurpose => (purpose.consents[scopedPurpose] = true)
      )
    scopedPurposes &&
      scopedPurposes
        .filter(purpose => purpose > 1)
        .forEach(
          scopedPurpose => (purpose.legitimateInterests[scopedPurpose] = true)
        )
    const specialFeatures = {}
    scopedSpecialFeatures &&
      scopedSpecialFeatures.forEach(
        specialFeature => (specialFeatures[specialFeature] = true)
      )
    const vendor = {consents: {}, legitimateInterests: {}}
    scopedInterestConsentVendors &&
      scopedInterestConsentVendors.forEach(interestConsentVendor => {
        vendor.consents[interestConsentVendor] = true
        vendor.legitimateInterests[interestConsentVendor] = true
      })
    super({
      scope,
      purpose,
      vendor,
      specialFeatures,
      valid: true,
      vendorTouched: false
    })
  }
}
