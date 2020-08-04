import React from 'react'
import PropTypes from 'prop-types'
import TcfSecondLayerDecisionGroup from '../tcf-secondLayer-decision-group'
export default function TcfSecondLayerVendorList({
  i18n,
  groupBaseClass,
  vendorListState,
  state,
  handleConsentsChange,
  handleAcceptAll,
  handleRejectAll,
  vendorExpandedContent
}) {
  const {vendors} = vendorListState
  const consentVendors = {}
  const legitimateInterestVendors = {}
  for (const key in vendors) {
    if (vendors[key].purposes.length) {
      consentVendors[key] = vendors[key]
    }
    if (vendors[key].legIntPurposes.length) {
      legitimateInterestVendors[key] = vendors[key]
    }
  }
  return (
    <>
      <h2>{i18n.VENDOR_PAGE.GROUPS.TITLE}</h2>
      <TcfSecondLayerDecisionGroup
        baseClass={groupBaseClass}
        decisionKey="consents"
        descriptions={consentVendors}
        expandedContent={vendorExpandedContent}
        hasConsent
        i18n={i18n}
        isVendorLayer
        name={i18n.VENDOR_PAGE.GROUPS.TITLE_CONSENT}
        onAcceptAll={() => handleAcceptAll({group: 'vendors'})}
        onConsentChange={props =>
          handleConsentsChange({group: 'vendors', ...props})
        }
        onRejectAll={() => handleRejectAll({group: 'vendors'})}
        state={state.vendors}
        vendorList={vendorListState}
      />
      <TcfSecondLayerDecisionGroup
        baseClass={groupBaseClass}
        decisionKey="legitimateInterests"
        descriptions={legitimateInterestVendors}
        expandedContent={vendorExpandedContent}
        hasConsent
        i18n={i18n}
        isVendorLayer
        name={i18n.VENDOR_PAGE.GROUPS.TITLE_LEGITIMATEINTEREST}
        onAcceptAll={() => handleAcceptAll({group: 'vendors'})}
        onConsentChange={props =>
          handleConsentsChange({group: 'vendors', ...props})
        }
        onRejectAll={() => handleRejectAll({group: 'vendors'})}
        state={state.vendors}
        vendorList={vendorListState}
      />
    </>
  )
}

TcfSecondLayerVendorList.propTypes = {
  groupBaseClass: PropTypes.string,
  handleAcceptAll: PropTypes.func,
  handleConsentsChange: PropTypes.func,
  handleRejectAll: PropTypes.func,
  i18n: PropTypes.object,
  state: PropTypes.object,
  vendorExpandedContent: PropTypes.object,
  vendorListState: PropTypes.object
}
