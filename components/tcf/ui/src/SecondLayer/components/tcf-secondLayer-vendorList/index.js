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
  return (
    <TcfSecondLayerDecisionGroup
      name={i18n.VENDOR_PAGE.GROUPS.TITLE}
      baseClass={groupBaseClass}
      descriptions={vendorListState.vendors}
      state={state.vendors}
      onConsentChange={props =>
        handleConsentsChange({group: 'vendors', ...props})
      }
      hasConsent
      i18n={i18n}
      onAcceptAll={() => handleAcceptAll({group: 'vendors'})}
      onRejectAll={() => handleRejectAll({group: 'vendors'})}
      vendorList={vendorListState}
      expandedContent={vendorExpandedContent}
      isVendorLayer
    />
  )
}

TcfSecondLayerVendorList.propTypes = {
  i18n: PropTypes.object,
  groupBaseClass: PropTypes.string,
  vendorListState: PropTypes.object,
  state: PropTypes.object,
  handleConsentsChange: PropTypes.func,
  handleAcceptAll: PropTypes.func,
  handleRejectAll: PropTypes.func,
  vendorExpandedContent: PropTypes.object
}
