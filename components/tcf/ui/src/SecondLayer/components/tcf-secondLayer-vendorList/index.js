import PropTypes from 'prop-types'
import TcfSecondLayerDecisionGroup from '../tcf-secondLayer-decision-group'
export default function TcfSecondLayerVendorList({
  i18n,
  baseClass,
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
      <h4 className={`${baseClass}-title`}>{i18n.VENDOR_PAGE.GROUPS.TITLE}</h4>
      <TcfSecondLayerDecisionGroup
        baseClass={groupBaseClass}
        decisionKey="consents"
        descriptions={consentVendors}
        expandedContent={vendorExpandedContent}
        hasConsent
        i18n={i18n}
        isVendorLayer
        name={i18n.VENDOR_PAGE.GROUPS.TITLE_CONSENT}
        onAcceptAll={props =>
          handleAcceptAll({group: 'vendors', decisionKey: 'consents', ...props})
        }
        onConsentChange={props =>
          handleConsentsChange({
            group: 'vendors',
            decisionKey: 'consents',
            ...props
          })
        }
        onRejectAll={props =>
          handleRejectAll({group: 'vendors', decisionKey: 'consents', ...props})
        }
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
        onAcceptAll={props =>
          handleAcceptAll({
            group: 'vendors',
            decisionKey: 'legitimateInterests',
            ...props
          })
        }
        onConsentChange={props =>
          handleConsentsChange({
            group: 'vendors',
            decisionKey: 'legitimateInterests',
            ...props
          })
        }
        onRejectAll={props =>
          handleRejectAll({
            group: 'vendors',
            decisionKey: 'legitimateInterests',
            ...props
          })
        }
        state={state.vendors}
        vendorList={vendorListState}
      />
    </>
  )
}

TcfSecondLayerVendorList.propTypes = {
  groupBaseClass: PropTypes.string,
  baseClass: PropTypes.string,
  handleAcceptAll: PropTypes.func,
  handleConsentsChange: PropTypes.func,
  handleRejectAll: PropTypes.func,
  i18n: PropTypes.object,
  state: PropTypes.object,
  vendorExpandedContent: PropTypes.object,
  vendorListState: PropTypes.object
}
